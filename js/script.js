window.addEventListener('load', function () {
  // ----------------- page loader -----------------

  document.querySelector('.page-loader').classList.add('fade-out');
  setTimeout(() => {
    document.querySelector('.page-loader').style.display = 'none';
  }, 500);
  // ----------------- Animation on Scroll -----------------
  AOS.init();
});

// ----------------- Toggle navbar -----------------

const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', toggleNav);

function toggleNav() {
  navToggler.classList.toggle('active');
  const nav = document.querySelector('.nav');
  nav.classList.toggle('open');
}

document.addEventListener('click', function (e) {
  if (e.target.closest('.nav-item')) {
    toggleNav();
  }
});

// ------------ sticky header ------------
window.addEventListener('scroll', function () {
  if (this.pageYOffset > 60) {
    document.querySelector('.header').classList.add('sticky');
  } else {
    document.querySelector('.header').classList.remove('sticky');
  }
});

// ------------ menu-tab ------------

const menuTabs = document.querySelector('.menu-tabs');
const menu = document.querySelector('.menu-section');

menuTabs.addEventListener('click', function (e) {
  if (
    e.target.classList.contains('menu-tab-item') &&
    !e.target.classList.contains('active')
  ) {
    const target = e.target.getAttribute('data-target');

    menuTabs.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    menu.querySelector('.menu-tab-content.active').classList.remove('active');
    menu.querySelector(target).classList.add('active');

    // Animation scroll
    AOS.init();
  }
});
