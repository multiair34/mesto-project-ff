import {initialCards} from './cards.js'
import './index.css';
import { createCardNode, deleteCard, likeButtonClicked } from './components/card.js';
import { handleProfileFormSubmit, closePopup, openPopup, closedPopup, closedPopupOverlay, closePopupByEsc } from './components/modal.js';

const cardsList = document.querySelector('.places__list');
const addButton = document.querySelector('.profile__add-button');
const popup = document.querySelectorAll('.popup');
const profileEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const inputName = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const addCard = document.querySelector('.popup_type_new-card');
const inputCardName = document.querySelector('.popup__input_type_card-name');
const inputCardUrl = document.querySelector('.popup__input_type_url');
const popupImage = document.querySelector('.popup_type_image');
const openImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__caption');

closedPopup();
closedPopupOverlay();

addButton.addEventListener('click', function() {
    openPopup(addCard);
});

addCard.addEventListener('submit', (e) => {
    e.preventDefault();
    const card = createCardNode(inputCardName.value, inputCardUrl.value, likeButtonClicked, openPopupImage);
    prependCardToPage(cardsList, card);
    closePopup(addCard);
    inputCardName.value = '';
    inputCardUrl.value = '';
});

initialCards.forEach(function(object) {
    appendCardToPage(cardsList, createCardNode(object.name, object.link, likeButtonClicked, openPopupImage))
});

function appendCardToPage(container, cardData) {
    container.append(cardData);
};

function prependCardToPage(container, cardData) {
    container.prepend(cardData);
};

profileEdit.addEventListener('click', function(e) {
    openPopup(popupEdit);
    inputName.value = profileTitle.textContent;
    inputDescription.value = profileDescription.textContent;
});

popupEdit.addEventListener('submit', handleProfileFormSubmit);

function openPopupImage(title, link) {
    openImage.src = link;
    openImage.alt = title;
    popupTitle.textContent = title;

    openPopup(popupImage);
};

