import {initialCards} from './cards.js'
import './index.css';
import { createCardNode, cardDelete, appendCardToPage, likeButtonClicked } from './components/card.js';
import { handleFormSubmit, popupClose, popupOpen, popupImageOpen, closedPopup, closedPopupOverlay, closedPopupEscButton } from './components/modal.js';

export const cardsList = document.querySelector('.places__list');
export const addButton = document.querySelector('.profile__add-button');
export const popup = document.querySelectorAll('.popup');
export const profileEdit = document.querySelector('.profile__edit-button');
export const closePopupButtons = document.querySelectorAll('.popup__close');
export const popupEdit = document.querySelector('.popup_type_edit');
export const inputName = document.querySelector('.popup__input_type_name');
export const inputDescription = document.querySelector('.popup__input_type_description');
export const profileTitle = document.querySelector('.profile__title');
export const profileDescription = document.querySelector('.profile__description');
export const addCard = document.querySelector('.popup_type_new-card');
export const inputCardName = document.querySelector('.popup__input_type_card-name');
export const inputCardUrl = document.querySelector('.popup__input_type_url');
export const popupImage = document.querySelector('.popup_type_image');
export const openImage = document.querySelector('.popup__image');
export const popupTitle = document.querySelector('.popup__caption');

addButton.addEventListener('click', function() {
    popupOpen(addCard);
});

addCard.addEventListener('submit', (e) => {
    e.preventDefault();
    const card = createCardNode(inputCardName.value, inputCardUrl.value, likeButtonClicked, popupImageOpen);
    appendCardToPage(cardsList, card);
    popupClose(addCard);
    inputCardName.value = '';
    inputCardUrl.value = '';
});

initialCards.forEach(function(object) {
    appendCardToPage(cardsList, createCardNode(object.name, object.link, likeButtonClicked, popupImageOpen))
});

profileEdit.addEventListener('click', function(e) {
    popupOpen(popupEdit);
    inputName.value = profileTitle.textContent;
    inputDescription.value = profileDescription.textContent;
});

popupEdit.addEventListener('submit', handleFormSubmit);

closedPopup();
closedPopupEscButton();
closedPopupOverlay();