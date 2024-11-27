import { initialCards } from './cards.js'
import { createCardNode, likeButtonClicked } from './components/card.js';
import { closePopup, openPopup } from './components/modal.js';
import {  } from './validation.js';
import './index.css';

const cardsList = document.querySelector('.places__list');
const addButton = document.querySelector('.profile__add-button');
const profileEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const inputName = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const closePopupButtons = document.querySelectorAll('.popup__close');
const popup = document.querySelectorAll('.popup');

addButton.addEventListener('click', function() {
    openPopup(popupNewCard);
});

closePopupButtons.forEach(button => {
    button.addEventListener('click', function() {
        const popup = button.closest('.popup');
        closePopup(popup);
    });
});

popup.forEach(popup => {
    popup.addEventListener('click', function(e) {
     closePopup(e.target);
    })
 })

popupNewCard.addEventListener('submit', (e) => {
    const inputCardName = popupNewCard.querySelector('.popup__input_type_card-name');
    const inputCardUrl = popupNewCard.querySelector('.popup__input_type_url');
    e.preventDefault();
    const card = createCardNode(inputCardName.value, inputCardUrl.value, likeButtonClicked, openPopupImage);
    prependCardToPage(cardsList, card);
    closePopup(popupNewCard);
    inputCardName.value = '';
    inputCardUrl.value = '';
});

initialCards.forEach(function(object) {
    appendCardToPage(cardsList, createCardNode(object.name, object.link, likeButtonClicked, openPopupImage))
});

function appendCardToPage(container, cardData) {
    container.append(cardData);
}

function prependCardToPage(container, cardData) {
    container.prepend(cardData);
}

profileEdit.addEventListener('click', function(e) {
    openPopup(popupEdit);
    inputName.value = profileTitle.textContent;
    inputDescription.value = profileDescription.textContent;
});

popupEdit.addEventListener('submit', handleProfileFormSubmit);

function openPopupImage(title, link) {
    const openImage = popupImage.querySelector('.popup__image');
    const popupTitle = popupImage.querySelector('.popup__caption');
    openImage.src = link;
    openImage.alt = title;
    popupTitle.textContent = title;

    openPopup(popupImage);
}

function handleProfileFormSubmit(e) {
    e.preventDefault();
    profileTitle.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closePopup(popupEdit);
}

enableValidation(config);



// const setEventListener = (popupForm, config) => {
//     const inputList = Array.from(popupForm.querySelectorAll(config.inputSelector));
//     const submitButton = popupForm.querySelector(config.submitButtonSelector);


//     toggleButtonState(inputList, submitButton, config);

//     inputList.forEach((popupInput) => {
        
//         popupInput.addEventListener('input', () => {
//             isValid(popupForm, popupInput, popupError, config);
//             toggleButtonState(inputList, submitButton, config);
//         });
//     });

// };

// const toggleButtonState = (inputList, submitButton, config) => {
//     const isFormValid = inputList.every((input) => input.validity.valid);

//     if (isFormValid) {
//         submitButton.classList.remove(config.inactiveButtonClass);
//         submitButton.disabled = false;
//     } else {
//         submitButton.classList.add(config.inactiveButtonClass);
//         submitButton.disabled = true;
//     }
// };

// //сделать объект настроек

// const config = {
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
// }

// const enableValidation = (config) => {
//     const popupFormList = Array.from(document.querySelectorAll(config.formSelector));
//     popupFormList.forEach((popupForm) => {
//         setEventListener(popupForm, config);
//     });
// };

// enableValidation(config);

// const showInputError = (popupInput, popupError, errorMessage, config) => {
//     popupInput.classList.add(config.inputErrorClass);
//     popupError.textContent = errorMessage;
//     popupError.classList.add(config.errorClass);
// };

// const hideInputError = (popupInput, popupError, config) => {
//     popupInput.classList.remove(config.inputErrorClass);
//     popupError.classList.remove(config.errorClass);
//     popupError.textContent = '';
//     console.log(config);
// };

// // const showInputError = (elem, errorMesage) => {
// //     elem.classList.add('popup__input_type_error');
// //     popupError.textContent = errorMesage;
// //     popupError.classList.add('form__input-error_active');
// // };

// // const hideInputError = (elem) => {
// //     elem.classList.remove('popup__input_type_error');
// //     popupError.classList.remove('form__input-error_active');
// //     popupError.textContent = '';
// // };

// const isValid = (popupForm, popupInput, popupError, config) => {
   

//     if (popupInput.validity.patternMismatch) {
//         popupInput.setCustomValidity(popupInput.dataset.errorMessage);
//         console.log(popupInput.validity.patternMismatch)

//     } else { 
//         popupInput.setCustomValidity("");
//     }

//     if(!popupInput.validity.valid) {
//         showInputError(popupInput, popupError, popupInput.validationMessage, config);
//     } else {
//         hideInputError(popupInput, popupError, config);
//     }
// };

// popupInput.addEventListener('input', isValid);