function showMenu() {
  let menuMobile = document.querySelector('.menu-mobile');
  if (menuMobile.classList.contains('hidden')) {
    menuMobile.classList.remove('hidden');
  }
  else {
    menuMobile.classList.add('hidden');
  };
}
