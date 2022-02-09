const contactForm = document.querySelector('#contact-form-id');
const createWithUsButton = document.querySelector('.create-button');
const hamburgerMenuPhone = document.querySelector('#hamburger-menu-phone');

function showHideContactForm() {
  if (window.screen.width > 576) {
    console.log('does not work');
  } else {
    if (!hamburgerMenuPhone.classList.contains('collapsed')) {
      createWithUsButton.classList.remove('hidden');
      contactForm.classList.add('active-form');
    } else {
      createWithUsButton.classList.add('hidden');
      contactForm.classList.remove('active-form');
    }
  }
}

hamburgerMenuPhone.addEventListener('click', showHideContactForm);

window.addEventListener('resize', function () {
  let win = this;
  if (win.innerWidth > 576) {
    contactForm.classList.remove('active-form');
    createWithUsButton.classList.add('hidden');
  } else {
    // if (!hamburgerMenuPhone.classList.contains('collapsed')) {
    //   createWithUsButton.classList.remove('hidden');
    //   contactForm.classList.add('active-form');
    // } else {
    //   createWithUsButton.classList.add('hidden');
    //   contactForm.classList.remove('active-form');
    // }
    console.log('click');
  }
});
