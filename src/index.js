import { initialCards } from './cards.js'
import { createCardNode, likeButtonClicked } from './components/card.js';
import { closePopup, openPopup } from './components/modal.js';
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