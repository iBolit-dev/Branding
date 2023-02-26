// Підключення функціоналу "Чертоги Фрілансера"
import {
  isMobile
} from "./functions.js";
// Підключення списку активних модулів
import {
  flsModules
} from "./modules.js";

const scrollHeader = document.querySelector('.header');
const scrollHeight = 1; // высота, на которой добавляется класс

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollHeight) {
    scrollHeader.classList.add('scroll');
  } else {
    scrollHeader.classList.remove('scroll');
  }
});

let button = document.querySelector('.search__icon');
let user = document.querySelector('.search');

const toggleSearch = () => {
  user.classList.toggle('search-active');
}

button.addEventListener('click', e => {
  e.stopPropagation();

  toggleSearch();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_users = target == user || user.contains(target);
  let its_button = target == button;
  let users_is_active = user.classList.contains('search-active');

  if (!its_users && !its_button && users_is_active) {
    toggleSearch();
  }
})

const buttonsLanguage = document.querySelectorAll('.language__btn');

buttonsLanguage.forEach(button => {
  button.addEventListener('click', () => {
    // проверяем, есть ли у кнопки класс "active"
    if (!button.classList.contains('language__btn--active')) {
      // добавляем класс "active" к кнопке, на которую был сделан клик
      button.classList.add('language__btn--active');
      // удаляем класс "active" у другой кнопки
      buttonsLanguage.forEach(otherButton => {
        if (otherButton !== button && otherButton.classList.contains('language__btn--active')) {
          otherButton.classList.remove('language__btn--active');
        }
      });
    }
  });
});

const buttonsCategories = document.querySelectorAll('.menu__item');

buttonsCategories.forEach(button => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('menu__item--active')) {
      button.classList.add('menu__item--active');
      buttonsCategories.forEach(otherButton => {
        if (otherButton !== button && otherButton.classList.contains('menu__item--active')) {
          otherButton.classList.remove('menu__item--active');
        }
      });
    }
  });
});

const btn = document.querySelector('.services__btn-show');
const list = document.querySelector('.services__list');
const items = document.querySelectorAll('.services__item');
const maxVisible = 2;

if (btn && list && items) {
  btn.addEventListener('click', () => {
    const hiddenItems = Array.from(items).slice(maxVisible);
    const isHidden = hiddenItems.some(item => item.classList.contains('hidden'));
    hiddenItems.forEach(item => {
      if (isHidden) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
    btn.textContent = isHidden ? 'Скрыть' : 'Показать все';
  });

  // hide all items except the first `maxVisible` ones
  items.forEach((item, index) => {
    if (index >= maxVisible) {
      item.classList.add('hidden');
    }
  });
}