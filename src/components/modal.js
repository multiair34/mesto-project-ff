const closePopupButtons = document.querySelectorAll('.popup__close');
const popup = document.querySelectorAll('.popup');

export function handleProfileFormSubmit(e) {
    e.preventDefault();
    profileTitle.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closePopup(popupEdit);
};

export function openPopup(popup) {
    popup.classList.add('popup_is-opened');
};

export function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
};

export function closedPopup() {
    closePopupButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popup = button.closest('.popup');
            closePopup(popup);
        });
    });
};

export function closedPopupOverlay () {
    popup.forEach(popup => {
        popup.addEventListener('click', function(e) {
         closePopup(e.target);
        })
     })
};

export function closePopupByEsc () {
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            const popupOpened = document.querySelectorAll('.popup_is-opened');
            popupOpened.forEach(popup => {
                closePopup(popup);
            });
        }
    });
}