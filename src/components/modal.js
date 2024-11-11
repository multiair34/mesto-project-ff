const closePopupButtons = document.querySelectorAll('.popup__close');
const popup = document.querySelectorAll('.popup');

export function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupByEsc);
};

export function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupByEsc)
};

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

export function closePopupByEsc(e) {
    if(e.key === 'Escape') {
        closePopup(document.querySelector('.popup_is-opened'));
    }
}
