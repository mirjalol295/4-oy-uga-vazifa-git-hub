
const darkModeToggle = document.querySelector('.darmode');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDarkMode = document.body.classList.contains('dark-mode');
  const darkModeIcon = document.querySelector('.darmode i');
  if (isDarkMode) {
    darkModeIcon.classList.replace('bx-brightness-half', 'bx-sun');
  } else {
    darkModeIcon.classList.replace('bx-sun', 'bx-brightness-half');
  }
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerIcon = document.querySelector('.hamburger-menu i');

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  
  if (hamburgerIcon.classList.contains('bx-menu')) {
    hamburgerIcon.classList.replace('bx-menu', 'bx-x');
  } else {
    hamburgerIcon.classList.replace('bx-x', 'bx-menu');
  }
});
