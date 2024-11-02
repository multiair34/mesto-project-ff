import {initialCards} from './cards.js'

// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const cardsList = document.querySelector('.places__list');
const addButton = document.querySelector('.profile__add-button');

// @todo: Функция создания карточки

function cardAdd(title, link) {
    const cardItem = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardTitle = cardItem.querySelector('.card__title');
    const cardImage = cardItem.querySelector('.card__image');
    cardTitle.textContent = title;
    cardImage.setAttribute('src', link);
    cardImage.setAttribute('alt', title);
    cardItem.querySelector('.card__delete-button').addEventListener('click', () => {
        cardDelete(cardItem);
    });
    return cardItem;
};

// @todo: Функция удаления карточки

function cardDelete(cardItem) {
    cardItem.remove()
};

// @todo: Вывести карточки на страницу

function cardCreate(container, cardData) {
    container.append(cardData);
};

initialCards.forEach(function(object) {
    cardCreate(cardsList, cardAdd(object.name, object.link))
});

import './index.css';

const popup = document.querySelector('.popup');
const profileEdit = document.querySelector('.profile__edit-button');
const popupClosed = document.querySelector('.popup__close');
const button = document.querySelector('.button');
const popupEdit = document.querySelector('.popup_type_edit');
const inputName = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');


const editForm = document.querySelector('.popup__form[name="edit-profile]');






function popupOpen(popup) {
    popup.classList.add('popup_is-opened');
}
function popupClose(popup) {
    popup.classList.remove('popup_is-opened');
}



profileEdit.addEventListener('click', function(e) {
    popupOpen(popupEdit);
    inputName.value = profileTitle.textContent;
    inputDescription.value = profileDescription.textContent;
})

popupClosed.addEventListener('click', function(e) {
    popupClose(popupClosed.closest('.popup_is-opened'))
})

document.addEventListener('keydown', function(evt) {
    if (evt.code === "Escape" && popup.classList.contains('popup_is-opened')) {
        popupClose(popup);
    }
})
