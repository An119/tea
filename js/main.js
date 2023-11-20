// код для меню-тел
const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');

// код для затемнения при открытии меню-тел
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', ()=>{ //показать меню
    menuList.classList.toggle/*или add*/('menu__list--open');
    menuShadow.classList.toggle('menu--open'); //затемнениe
})

menuClose.addEventListener('click', ()=>{ //убрать мею
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open'); //затемнениe
})

