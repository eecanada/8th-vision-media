const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');
const formRow = document.querySelector('.home-row');
const homeContainer = document.querySelector('.home-container')

navbarTogglerIcon.addEventListener('click', () => {
  formRow.style.marginTop = '3rem';
  homeContainer.style.height = '120vh'

});
