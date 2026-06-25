document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  const openMenuBtn = document.querySelector('.header-menu-btn');
  const closeMenuBtns = document.querySelectorAll('.js-close-menu');

  if (mobileMenu && openMenuBtn) {
    openMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('is-open');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });

    closeMenuBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }
});