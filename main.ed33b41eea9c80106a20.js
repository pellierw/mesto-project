/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project/./src/pages/index.css?");

/***/ }),

/***/ "./src/scripts/api.js":
/*!****************************!*\
  !*** ./src/scripts/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewCard: () => (/* binding */ addNewCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   getInitialCards: () => (/* binding */ getInitialCards),\n/* harmony export */   getUserInfo: () => (/* binding */ getUserInfo),\n/* harmony export */   likeCard: () => (/* binding */ likeCard),\n/* harmony export */   unlikeCard: () => (/* binding */ unlikeCard),\n/* harmony export */   updateAvatar: () => (/* binding */ updateAvatar),\n/* harmony export */   updateUserInfo: () => (/* binding */ updateUserInfo)\n/* harmony export */ });\nvar config = {\n  baseUrl: 'https://mesto.nomoreparties.co/v1/apf-cohort-202',\n  headers: {\n    authorization: '41291eea-f992-4607-a0af-e6afbf2d6e11',\n    'Content-Type': 'application/json'\n  }\n};\nvar handleResponse = function handleResponse(res) {\n  if (res.ok) {\n    return res.json().catch(function (err) {\n      return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u0447\\u0442\\u0435\\u043D\\u0438\\u0438 JSON: \".concat(err.message));\n    });\n  }\n  return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n};\nvar getUserInfo = function getUserInfo() {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar getInitialCards = function getInitialCards() {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar updateUserInfo = function updateUserInfo(name, about) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    method: 'PATCH',\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      about: about\n    })\n  }).then(handleResponse);\n};\nvar addNewCard = function addNewCard(name, link) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    method: 'POST',\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      link: link\n    })\n  }).then(handleResponse);\n};\nvar deleteCard = function deleteCard(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/\").concat(cardId), {\n    method: 'DELETE',\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar likeCard = function likeCard(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(cardId), {\n    method: 'PUT',\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar unlikeCard = function unlikeCard(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(cardId), {\n    method: 'DELETE',\n    headers: config.headers\n  }).then(handleResponse);\n};\nfunction updateAvatar(avatarUrl) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me/avatar\"), {\n    method: 'PATCH',\n    headers: config.headers,\n    body: JSON.stringify({\n      avatar: avatarUrl\n    })\n  }).then(handleResponse);\n}\n\n//# sourceURL=webpack://mesto-project/./src/scripts/api.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/scripts/api.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n\n// @todo: Темплейт карточки\nvar cardTemplate = document.querySelector('#card-template');\n\n// @todo: DOM узлы\nvar placesList = document.querySelector('.places__list');\nvar profilePopup = document.querySelector('.popup_type_edit');\nvar cardPopup = document.querySelector('.popup_type_new-card');\nvar imagePopup = document.querySelector('.popup_type_image');\nvar profileFormElement = profilePopup.querySelector('.popup__form');\nvar nameInput = profileFormElement.querySelector('.popup__input_type_name');\nvar jobInput = profileFormElement.querySelector('.popup__input_type_description');\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar editButton = document.querySelector('.profile__edit-button');\nvar profileCloseButton = profilePopup.querySelector('.popup__close');\nvar avatarPopup = document.querySelector('.popup_type_avatar');\nvar avatarFormElement = avatarPopup.querySelector('.popup__form');\nvar avatarInput = avatarFormElement.querySelector('.popup__input_type_avatar-url');\nvar avatarCloseButton = avatarPopup.querySelector('.popup__close');\nvar avatarEditButton = document.querySelector('.profile__image-edit'); // элемент иконки\n\nvar cardFormElement = cardPopup.querySelector('.popup__form');\nvar placeNameInput = cardFormElement.querySelector('.popup__input_type_card-name');\nvar placeLinkInput = cardFormElement.querySelector('.popup__input_type_url');\nvar addCardButton = document.querySelector('.profile__add-button');\nvar cardCloseButton = cardPopup.querySelector('.popup__close');\nvar imageCloseButton = imagePopup.querySelector('.popup__close');\nvar popupImage = imagePopup.querySelector('.popup__image');\nvar popupCaption = imagePopup.querySelector('.popup__caption');\n\n// Добавим анимацию всем попапам\ndocument.querySelectorAll('.popup').forEach(function (popup) {\n  popup.classList.add('popup_is-animated');\n});\n\n// @todo: Универсальные функции\nfunction openModal(popup) {\n  popup.classList.add('popup_is-opened');\n  document.addEventListener('keydown', closeByEsc);\n}\nfunction closeModal(popup) {\n  popup.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', closeByEsc);\n}\n\n// Закрытие по нажатию Esc\nfunction closeByEsc(evt) {\n  if (evt.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_is-opened');\n    if (openedPopup) closeModal(openedPopup);\n  }\n}\n\n// Закрытие по клику на оверлей\nfunction setupOverlayClose(popup) {\n  popup.addEventListener('mousedown', function (evt) {\n    if (evt.target === popup) closeModal(popup);\n  });\n}\n[profilePopup, cardPopup, imagePopup].forEach(setupOverlayClose);\n\n// @todo: Работа с профилем\neditButton.addEventListener('click', function () {\n  nameInput.value = profileTitle.textContent;\n  jobInput.value = profileDescription.textContent;\n  openModal(profilePopup);\n});\nprofileCloseButton.addEventListener('click', function () {\n  return closeModal(profilePopup);\n});\nfunction handleProfileFormSubmit(evt) {\n  evt.preventDefault();\n  var submitButton = profileFormElement.querySelector('.popup__button');\n  var originalText = submitButton.textContent;\n  submitButton.textContent = 'Сохранение...';\n  var name = nameInput.value;\n  var about = jobInput.value;\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.updateUserInfo)(name, about).then(function (userData) {\n    profileTitle.textContent = userData.name;\n    profileDescription.textContent = userData.about;\n    closeModal(profilePopup);\n  }).catch(function (err) {\n    console.error('Ошибка при обновлении профиля:', err);\n  }).finally(function () {\n    submitButton.textContent = originalText;\n  });\n}\nprofileFormElement.addEventListener('submit', handleProfileFormSubmit);\n\n// @todo: Работа с карточками\naddCardButton.addEventListener('click', function () {\n  placeNameInput.value = '';\n  placeLinkInput.value = '';\n  openModal(cardPopup);\n});\ncardCloseButton.addEventListener('click', function () {\n  return closeModal(cardPopup);\n});\nfunction handleCardFormSubmit(evt) {\n  evt.preventDefault();\n  var submitButton = cardFormElement.querySelector('.popup__button');\n  var originalText = submitButton.textContent;\n  submitButton.textContent = 'Сохранение...';\n  var name = placeNameInput.value;\n  var link = placeLinkInput.value;\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.addNewCard)(name, link).then(function (cardData) {\n    var newCard = createCard(cardData, currentUserId);\n    placesList.prepend(newCard);\n    closeModal(cardPopup);\n    cardFormElement.reset(); // очищаем форму\n  }).catch(function (err) {\n    console.error('Ошибка при добавлении карточки:', err);\n  }).finally(function () {\n    submitButton.textContent = originalText;\n  });\n}\ncardFormElement.addEventListener('submit', handleCardFormSubmit);\n\n// Закрытие попапа с картинкой\nimageCloseButton.addEventListener('click', function () {\n  return closeModal(imagePopup);\n});\n\n// @todo: Функция создания карточки\nfunction createCard(cardData, userId) {\n  var cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);\n  var cardImage = cardElement.querySelector('.card__image');\n  var cardTitle = cardElement.querySelector('.card__title');\n  var deleteButton = cardElement.querySelector('.card__delete-button');\n  var likeButton = cardElement.querySelector('.card__like-button');\n  var likeCount = cardElement.querySelector('.card__like-count');\n  if (likeCount) {\n    likeCount.textContent = cardData.likes.length;\n  }\n  cardImage.src = cardData.link;\n  cardImage.alt = cardData.name;\n  cardTitle.textContent = cardData.name;\n  if (cardData.likes.some(function (user) {\n    return user._id === userId;\n  })) {\n    likeButton.classList.add('card__like-button_is-active');\n  }\n\n  // Лайк\n  likeButton.addEventListener('click', function () {\n    var isLiked = likeButton.classList.contains('card__like-button_is-active');\n    var toggleLike = isLiked ? _api_js__WEBPACK_IMPORTED_MODULE_1__.unlikeCard : _api_js__WEBPACK_IMPORTED_MODULE_1__.likeCard;\n    toggleLike(cardData._id).then(function (updatedCard) {\n      likeButton.classList.toggle('card__like-button_is-active');\n      likeCount.textContent = updatedCard.likes.length;\n    }).catch(function (err) {\n      console.error('Ошибка при переключении лайка:', err);\n    });\n  });\n  if (cardData.owner._id !== userId) {\n    deleteButton.remove();\n  } else {\n    // Удаление карточки через API\n    deleteButton.addEventListener('click', function () {\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.deleteCard)(cardData._id).then(function () {\n        return cardElement.remove();\n      }).catch(function (err) {\n        console.error('Ошибка при удалении карточки:', err);\n      });\n    });\n  }\n\n  // Открытие изображения\n  cardImage.addEventListener('click', function () {\n    popupImage.src = cardData.link;\n    popupImage.alt = cardData.name;\n    popupCaption.textContent = cardData.name;\n    openModal(imagePopup);\n  });\n  return cardElement;\n}\nfunction showInputError(formElement, inputElement, errorMessage) {\n  var errorElement = formElement.querySelector(\".popup__error_type_\".concat(inputElement.name));\n  inputElement.classList.add('popup__input_type_error');\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add('popup__error_visible');\n}\nfunction hideInputError(formElement, inputElement) {\n  var errorElement = formElement.querySelector(\".popup__error_type_\".concat(inputElement.name));\n  inputElement.classList.remove('popup__input_type_error');\n  errorElement.textContent = '';\n  errorElement.classList.remove('popup__error_visible');\n}\nfunction checkInputValidity(formElement, inputElement) {\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement, inputElement.validationMessage);\n  } else {\n    hideInputError(formElement, inputElement);\n  }\n}\nfunction hasInvalidInput(inputList) {\n  return inputList.some(function (inputElement) {\n    return !inputElement.validity.valid;\n  });\n}\nfunction toggleButtonState(inputList, buttonElement) {\n  if (hasInvalidInput(inputList)) {\n    buttonElement.disabled = true;\n    buttonElement.classList.add('popup__button_disabled');\n  } else {\n    buttonElement.disabled = false;\n    buttonElement.classList.remove('popup__button_disabled');\n  }\n}\nfunction setEventListeners(formElement) {\n  var inputList = Array.from(formElement.querySelectorAll('.popup__input'));\n  var buttonElement = formElement.querySelector('.popup__button');\n  toggleButtonState(inputList, buttonElement);\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener('input', function () {\n      checkInputValidity(formElement, inputElement);\n      toggleButtonState(inputList, buttonElement);\n    });\n  });\n}\nfunction enableValidation() {\n  var formList = Array.from(document.querySelectorAll('.popup__form'));\n  formList.forEach(function (formElement) {\n    formElement.setAttribute('novalidate', true);\n    setEventListeners(formElement);\n  });\n}\navatarEditButton.addEventListener('click', function () {\n  avatarInput.value = '';\n  clearValidation(avatarFormElement);\n  openModal(avatarPopup);\n});\navatarCloseButton.addEventListener('click', function () {\n  return closeModal(avatarPopup);\n});\nfunction handleAvatarFormSubmit(evt) {\n  evt.preventDefault();\n  var submitButton = avatarFormElement.querySelector('.popup__button');\n  var originalText = submitButton.textContent;\n  submitButton.textContent = 'Сохранение...';\n  var avatarUrl = avatarInput.value;\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.updateAvatar)(avatarUrl).then(function (userData) {\n    document.querySelector('.profile__image').style.backgroundImage = \"url(\".concat(userData.avatar, \")\");\n    closeModal(avatarPopup);\n    avatarFormElement.reset();\n  }).catch(function (err) {\n    console.error('Ошибка при обновлении аватара:', err);\n  }).finally(function () {\n    submitButton.textContent = originalText;\n  });\n}\navatarFormElement.addEventListener('submit', handleAvatarFormSubmit);\n\n// Очистка ошибок и сброс состояния кнопки при открытии формы\nfunction clearValidation(formElement) {\n  var inputList = Array.from(formElement.querySelectorAll('.popup__input'));\n  var buttonElement = formElement.querySelector('.popup__button');\n  inputList.forEach(function (inputElement) {\n    hideInputError(formElement, inputElement);\n  });\n  toggleButtonState(inputList, buttonElement);\n}\nenableValidation();\nvar currentUserId = null;\nPromise.all([(0,_api_js__WEBPACK_IMPORTED_MODULE_1__.getUserInfo)(), (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.getInitialCards)()]).then(function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n    userData = _ref2[0],\n    cards = _ref2[1];\n  currentUserId = userData._id;\n  // Данные пользователя\n  profileTitle.textContent = userData.name;\n  profileDescription.textContent = userData.about;\n  document.querySelector('.profile__image').style.backgroundImage = \"url(\".concat(userData.avatar, \")\");\n\n  // Отображение карточек с сервера\n  cards.forEach(function (cardData) {\n    var card = createCard(cardData, currentUserId);\n    placesList.append(card);\n  });\n}).catch(function (err) {\n  console.error('Ошибка при загрузке данных с сервера:', err);\n});\n\n//# sourceURL=webpack://mesto-project/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;