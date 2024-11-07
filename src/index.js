import {initialCards} from './cards.js'
import './index.css';

// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const cardsList = document.querySelector('.places__list');
const addButton = document.querySelector('.profile__add-button');

// @todo: Функция создания карточки

function createCardNode(title, link, likeHandler, imageOpen) {
    const cardItem = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardTitle = cardItem.querySelector('.card__title');
    const cardImage = cardItem.querySelector('.card__image');
    const deleteButton = cardItem.querySelector('.card__delete-button');
    const likeButton = cardItem.querySelector('.card__like-button');

    cardTitle.textContent = title;
    cardImage.setAttribute('src', link);
    cardImage.setAttribute('alt', title);
    deleteButton.addEventListener('click', () => {
        cardDelete(cardItem);
    });
    likeButton.addEventListener('click', likeHandler);
    cardImage.addEventListener('click', imageOpen);

    return cardItem;
};

// @todo: Функция удаления карточки

function cardDelete(cardItem) {
    cardItem.remove()
};

// @todo: Вывести карточки на страницу

function appendCardToPage(container, cardData) {
    container.prepend(cardData);
};

function likeButtonClicked(e) {
    e.target.classList.toggle('like-active');
}

initialCards.forEach(function(object) {
    appendCardToPage(cardsList, createCardNode(object.name, object.link, likeButtonClicked, popupImageOpen))
});


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
const inputCardName = document.querySelector('.popup__input_type_card-name');
const inputCardUrl = document.querySelector('.popup__input_type_url');
const popupImage = document.querySelector('.popup_type_image');
const openImage = document.querySelector('.popup__image');
const cardTitle = document.querySelectorAll('.card__title');
const cardImage = document.querySelectorAll('.card__image');
const popupTitle = document.querySelector('.popup__caption');

function popupImageOpen(e) {
    cardImage.forEach(cardImage => {
        cardImage.addEventListener('click', function(e) {
            openImage.src = cardImage.src;
            popupTitle.textContent = cardTitle.textContent;
            // cardTitle.forEach(cardTitle => {
            //     popupTitle.textContent = cardTitle.textContent;
            // });
            
            popupOpen(popupImage);
        });
    })
}

// открытие попапа

function popupOpen(popup) {
    popup.classList.add('popup_is-opened');
};

// закрытие попапа

function popupClose(popup) {
    popup.classList.remove('popup_is-opened');
};

// добавление карточки

addButton.addEventListener('click', function() {
    popupOpen(addCard);
});

addCard.addEventListener('submit', (e) => {
    e.preventDefault();

    const card = createCardNode(inputCardName.value, inputCardUrl.value, likeButtonClicked);
    appendCardToPage(cardsList, card);
    popupClose(addCard);
    inputCardName.value = '';
    inputCardUrl.value = '';
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

