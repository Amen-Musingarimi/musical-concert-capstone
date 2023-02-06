const btnOpenModal = document.querySelector('.openModal');
const btnCloseModalBtn = document.querySelector('.closeModalBtn');
const home = document.querySelector('.home-page');
const navMenu = document.querySelector('.nav-bar');
const modalMenu = document.querySelector('.menuContainer');
const navLinks = document.querySelectorAll('.nav-link-item');

btnOpenModal.addEventListener('click', () => {
  navMenu.classList.remove('hide');
  modalMenu.classList.remove('hide');
  home.classList.add('hide');
  modalMenu.classList.add('mobileOverlay', 'mobileMenuFlex');
  navLinks.classList.add('menuItemsMargin');
});

btnCloseModalBtn.addEventListener('click', () => {
  navMenu.classList.add('hide');
  modalMenu.classList.add('hide');
  home.classList.remove('hide');
  modalMenu.classList.remove('mobileOverlay', 'mobileMenuFlex');
  navLinks.classList.remove('menuItemsMargin');
});
