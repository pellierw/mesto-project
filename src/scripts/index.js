import './../pages/index.css';

import { getInitialCards, getUserInfo, updateUserInfo, addNewCard, likeCard, unlikeCard, deleteCard, updateAvatar } from './api.js';


// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template');

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

const profileFormElement = profilePopup.querySelector('.popup__form');
const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const jobInput = profileFormElement.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const editButton = document.querySelector('.profile__edit-button');
const profileCloseButton = profilePopup.querySelector('.popup__close');

const avatarPopup = document.querySelector('.popup_type_avatar');
const avatarFormElement = avatarPopup.querySelector('.popup__form');
const avatarInput = avatarFormElement.querySelector('.popup__input_type_avatar-url');
const avatarCloseButton = avatarPopup.querySelector('.popup__close');
const avatarEditButton = document.querySelector('.profile__image-edit'); // элемент иконки


const cardFormElement = cardPopup.querySelector('.popup__form');
const placeNameInput = cardFormElement.querySelector('.popup__input_type_card-name');
const placeLinkInput = cardFormElement.querySelector('.popup__input_type_url');
const addCardButton = document.querySelector('.profile__add-button');
const cardCloseButton = cardPopup.querySelector('.popup__close');

const imageCloseButton = imagePopup.querySelector('.popup__close');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

document.querySelectorAll('.popup').forEach((popup) => {
  popup.classList.add('popup_is-animated');
});

// @todo: Универсальные функции
function openModal(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEsc);
}

function closeModal(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEsc);
  const form = popup.querySelector('.popup__form');
  if (form){
    clearValidation(form);
  }
}

function isProfileChanged() {
  return (
    nameInput.value !== profileTitle.textContent ||
    jobInput.value !== profileDescription.textContent
  );
}


function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) closeModal(openedPopup);
  }
}

function setupOverlayClose(popup) {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === popup) {
      closeModal(popup);
      const form = popup.querySelector('.popup__form');
      if (form){
        clearValidation(form);
      }
    }
  });
}
[profilePopup, cardPopup, imagePopup].forEach(setupOverlayClose);

// @todo: Работа с профилем
editButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  clearValidation(profileFormElement);

  const inputList = Array.from(profileFormElement.querySelectorAll('.popup__input'));
  const buttonElement = profileFormElement.querySelector('.popup__button');
  toggleButtonState(inputList, buttonElement, true);

  openModal(profilePopup);
});

profileCloseButton.addEventListener('click', () => {
  closeModal(profilePopup)
  clearValidation(profileFormElement)
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const submitButton = profileFormElement.querySelector('.popup__button');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Сохранение...';

  const name = nameInput.value;
  const about = jobInput.value;

  updateUserInfo(name, about)
    .then((userData) => {
      profileTitle.textContent = userData.name;
      profileDescription.textContent = userData.about;
      closeModal(profilePopup);
    })
    .catch((err) => {
      console.error('Ошибка при обновлении профиля:', err);
    })
    .finally(() => {
      submitButton.textContent = originalText;
    });
}

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

// @todo: Работа с карточками
addCardButton.addEventListener('click', () => {
  placeNameInput.value = '';
  placeLinkInput.value = '';
  clearValidation(cardFormElement);

  const inputList = Array.from(cardFormElement.querySelectorAll('.popup__input'));
  const buttonElement = cardFormElement.querySelector('.popup__button');
  cardFormElement.reset()
  toggleButtonState(inputList, buttonElement, true, isCardFormFilled);

  openModal(cardPopup);
});

cardCloseButton.addEventListener('click', () => closeModal(cardPopup));

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const submitButton = cardFormElement.querySelector('.popup__button');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Сохранение...';

  const name = placeNameInput.value;
  const link = placeLinkInput.value;

  addNewCard(name, link)
    .then((cardData) => {
      const newCard = createCard(cardData, currentUserId);
      placesList.prepend(newCard);
      closeModal(cardPopup);
      cardFormElement.reset(); 
    })
    .catch(err => {
      console.error('Ошибка при добавлении карточки:', err);
    })
    .finally(() => {
      submitButton.textContent = originalText;
    });
}
cardFormElement.addEventListener('submit', handleCardFormSubmit);

imageCloseButton.addEventListener('click', () => closeModal(imagePopup));

// @todo: Функция создания карточки
function createCard(cardData, userId) {
  const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  
  const likeCount = cardElement.querySelector('.card__like-count');
  if (likeCount) {
    likeCount.textContent = cardData.likes.length;
  }


  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  if (cardData.likes.some(user => user._id === userId)) {
    likeButton.classList.add('card__like-button_is-active');
  }

  likeButton.addEventListener('click', () => {
    const isLiked = likeButton.classList.contains('card__like-button_is-active');

    const toggleLike = isLiked ? unlikeCard : likeCard;

    toggleLike(cardData._id)
      .then(updatedCard => {
        likeButton.classList.toggle('card__like-button_is-active');
        likeCount.textContent = updatedCard.likes.length;
      })
      .catch(err => {
        console.error('Ошибка при переключении лайка:', err);
      });
  });

  if (cardData.owner._id !== userId) {
    deleteButton.remove();
  } else {
    deleteButton.addEventListener('click', () => {
      deleteCard(cardData._id)
        .then(() => cardElement.remove())
        .catch((err) => {
          console.error('Ошибка при удалении карточки:', err);
        });
    });
  }

  cardImage.addEventListener('click', () => {
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    popupCaption.textContent = cardData.name;
    openModal(imagePopup);
  });

  return cardElement;
}

function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.popup__error_type_${inputElement.name}`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_visible');
}


function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.popup__error_type_${inputElement.name}`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.textContent = '';
  errorElement.classList.remove('popup__error_visible');
}

function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => !inputElement.validity.valid);
}

function isCardFormFilled() {
  return placeNameInput.value.trim() !== '' && placeLinkInput.value.trim() !== '';
}

function toggleButtonState(inputList, buttonElement, checkForChanges = false, changeCheckFunc = null) {
  const hasInvalid = hasInvalidInput(inputList);
  const isChanged =  !checkForChanges || (changeCheckFunc && changeCheckFunc());
  
  if (hasInvalid || !isChanged) {
    buttonElement.disabled = true;
    buttonElement.classList.add('popup__button_disabled');
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup__button_disabled');
  }
}

function setEventListeners(formElement, checkForChanges = false, changeCheckFunc = null) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button');

  toggleButtonState(inputList, buttonElement, checkForChanges);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement, checkForChanges, changeCheckFunc);
    });
  });
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.setAttribute('novalidate', true);

     if (formElement === profileFormElement) {
      setEventListeners(formElement, true, isProfileChanged);
    } else if (formElement === cardFormElement) {
      setEventListeners(formElement, true, isCardFormFilled);
    } else if (formElement === avatarFormElement) {
      setEventListeners(formElement, true, () => avatarInput.value.trim() !== '');
    } else {
      setEventListeners(formElement);
    }
  });
}

avatarEditButton.addEventListener('click', () => {
  avatarInput.value = '';
  clearValidation(avatarFormElement);

  const inputList = Array.from(avatarFormElement.querySelectorAll('.popup__input'));
  const buttonElement = avatarFormElement.querySelector('.popup__button');
  toggleButtonState(inputList, buttonElement, true, () => avatarInput.value.trim() !== '');

  openModal(avatarPopup);
});

avatarCloseButton.addEventListener('click', () => closeModal(avatarPopup));

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();

  const submitButton = avatarFormElement.querySelector('.popup__button');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Сохранение...';

  const avatarUrl = avatarInput.value;

  updateAvatar(avatarUrl)
    .then((userData) => {
      document.querySelector('.profile__image').style.backgroundImage = `url(${userData.avatar})`;
      closeModal(avatarPopup);
      avatarFormElement.reset();
    })
    .catch((err) => {
      console.error('Ошибка при обновлении аватара:', err);
    })
    .finally(() => {
      submitButton.textContent = originalText;
    });
}

avatarFormElement.addEventListener('submit', handleAvatarFormSubmit);

function clearValidation(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button');

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement);
  });



  toggleButtonState(inputList, buttonElement);
}

enableValidation();

let currentUserId = null;

Promise.all([getUserInfo(), getInitialCards()])
  .then(([userData, cards]) => {
    currentUserId = userData._id;
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    document.querySelector('.profile__image').style.backgroundImage = `url(${userData.avatar})`;

    cards.forEach((cardData) => {
      const card = createCard(cardData, currentUserId);
      placesList.append(card);
    });
  })
  .catch((err) => {
    console.error('Ошибка при загрузке данных с сервера:', err);
  });

