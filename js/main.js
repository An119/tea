// код для меню-тел
const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');
const body = document.body; 

// Функция для открытия меню
function openMenu() {
  menuList.classList.add('menu__list--open');
  menuShadow.classList.add('menu--open'); // код для затемнения при открытии меню-тел
  body.classList.add('body--no-scroll'); // Убираем прокрутку страницы
}

// Функция для закрытия меню
function closeMenu() {
  menuList.classList.remove('menu__list--open');
  menuShadow.classList.remove('menu--open');
  body.classList.remove('body--no-scroll'); // Возвращаем прокрутку
}

// Закрываем меню при клике на затемнение
if (menuShadow) {
  menuShadow.addEventListener('click', closeMenu);
}

menuBtn.addEventListener('click', openMenu);

menuClose.addEventListener('click', closeMenu);
