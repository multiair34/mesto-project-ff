export function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupByEsc);
};

export function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupByEsc)
};

function closePopupByEsc(e) {
    if(e.key === 'Escape') {
        closePopup(document.querySelector('.popup_is-opened'));
    }
}
