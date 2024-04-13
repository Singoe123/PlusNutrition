const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.nav-bar');

menuToggle.addEventListener('click', () => {
  console.log('clicked');
  navBar.classList.toggle('show'); // Add/remove 'show' class for visibility
});