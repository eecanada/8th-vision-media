const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');
const formRow = document.querySelector('.home-row');
const homeContainer = document.querySelector('.vimeo-wrapper')

navbarTogglerIcon.addEventListener('click', () => {
  formRow.style.display = 'none';
  // homeContainer.style.height = '120vh'
});
