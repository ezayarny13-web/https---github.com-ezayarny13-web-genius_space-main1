const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('modal-btn-open');
const modalBtnClose = document.querySelector('modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalButtonOpen.addEventListener('click', toggleModal);
modalButtonClose.addEventListener('click', toggleModal);