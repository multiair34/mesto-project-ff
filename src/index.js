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

const popup = document.querySelectorAll('.popup');
const profileEdit = document.querySelector('.profile__edit-button');
const closePopupButtons = document.querySelectorAll('.popup__close');
const button = document.querySelector('.button');
const popupEdit = document.querySelector('.popup_type_edit');
const inputName = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const addCard = document.querySelector('.popup_type_new-card');

const editForm = document.querySelector('.popup__form[name="edit-profile"]');




// открытие попапа

function popupOpen(popup) {
    popup.classList.add('popup_is-opened');
};
function popupClose(popup) {
    popup.classList.remove('popup_is-opened');
};

// закрытие попапа

addButton.addEventListener('click', function() {
    popupOpen(addCard);
});


// заполненные поля формы Имя и О себе

profileEdit.addEventListener('click', function(e) {
    popupOpen(popupEdit);
    inputName.value = profileTitle.textContent;
    inputDescription.value = profileDescription.textContent;
});

function handleFormSubmit(e) {
    e.preventDefault();
    profileTitle.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
}

popupEdit.addEventListener('submit', handleFormSubmit);


// Закрытие по кнопке

closePopupButtons.forEach(button => {
    button.addEventListener('click', function() {
        const popup = button.closest('.popup');
        popupClose(popup);
    });
});

// Закрытие по фону

popup.forEach(popup => {
   popup.addEventListener('click', function(e) {
    popupClose(e.target);
   })
})

// закрытие по ESC

document.addEventListener('keydown', function(e) {
    if (e.code === "Escape") {
        const popupOpened = document.querySelectorAll('.popup_is-opened');
        popupOpened.forEach(popup => {
            popupClose(popup);
        });
    }
});

