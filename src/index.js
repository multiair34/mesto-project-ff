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






export const popupProfile = document.querySelector('.popup_type_edit');
export const popupNewCard = document.querySelector('.popup_type_new-card');
export const popupImg = document.querySelector('.popup_type_image');
export const popupRemove = document.querySelector('.popup__close');
export const popup = document.querySelector('.popup');

function openPopup (popup) {
    const popupOpenBut = document.querySelector('.profile__edit-button');

    popupOpenBut.addEventListener('click', function(evt) {
        if(evt.currentTarget.classList.contains('profile__edit-button')) {

            popup.add('visibility', visible);
        };
    })
}