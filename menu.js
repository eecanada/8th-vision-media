const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');
const formRow = document.querySelector('.home-row');
const homeContainer = document.querySelector('.vimeo-wrapper')

navbarTogglerIcon.addEventListener('click', () => {
  formRow.style.marginTop = '6rem';
  homeContainer.style.height = '120vh'

});
