
// const formRow = document.querySelector('.home-row');

const contactForm = document.querySelector('#contact-form-id')
const createWithUsButton = document.querySelector('.create-button');
const hamburgerMenuPhone = document.querySelector('#hamburger-menu-phone');

function showHideContactForm() {
  if (!hamburgerMenuPhone.classList.contains('collapsed')) {
    createWithUsButton.classList.remove('hidden');
    contactForm.classList.add('active-form')
    

  } else {
    createWithUsButton.classList.add('hidden');
    contactForm.classList.remove('active-form')
  }
}

hamburgerMenuPhone.addEventListener('click', showHideContactForm);
