import { cardsList,
    addButton,
    popup,
    profileEdit,
    closePopupButtons,
    popupEdit,
    inputName,
    inputDescription,
    profileTitle,
    profileDescription,
    addCard,
    inputCardName,
    inputCardUrl,
    popupImage,
    openImage,
    popupTitle } from "..";

export function handleFormSubmit(e) {
    e.preventDefault();
    profileTitle.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
};

export function popupOpen(popup) {
    popup.classList.add('popup_is-opened');
};

export function popupClose(popup) {
    popup.classList.remove('popup_is-opened');
};

export function popupImageOpen(title, link) {
    openImage.src = link;
    openImage.alt = title;
    popupTitle.textContent = title;

    popupOpen(popupImage);
};

export function closedPopup() {
    closePopupButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popup = button.closest('.popup');
            popupClose(popup);
        });
    });
};

export function closedPopupOverlay () {
    popup.forEach(popup => {
        popup.addEventListener('click', function(e) {
         popupClose(e.target);
        })
     })
};

export function closedPopupEscButton () {
    document.addEventListener('keydown', function(e) {
        if (e.code === "Escape") {
            const popupOpened = document.querySelectorAll('.popup_is-opened');
            popupOpened.forEach(popup => {
                popupClose(popup);
            });
        }
    });
}