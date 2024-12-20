export function createCardNode(title, link, likeHandler, openImage) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardItem = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardTitle = cardItem.querySelector('.card__title');
    const cardImage = cardItem.querySelector('.card__image');
    const deleteButton = cardItem.querySelector('.card__delete-button');
    const likeButton = cardItem.querySelector('.card__like-button');

    cardTitle.textContent = title;
    cardImage.setAttribute('src', link);
    cardImage.setAttribute('alt', title);
    deleteButton.addEventListener('click', () => {
        deleteCard(cardItem);
    });
    likeButton.addEventListener('click', likeHandler);
    cardImage.addEventListener('click', () => openImage(title, link));

    return cardItem;
};

function deleteCard(cardItem) {
    cardItem.remove()
};

export function likeButtonClicked(e) {
    e.target.classList.toggle('like-active');
};