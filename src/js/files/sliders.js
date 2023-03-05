/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/
// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, {
  Navigation,
  EffectFade,
  Pagination
} from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/
// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';
// первый слайдер
// Ініціалізація слайдерів

function initSliders() { // Список слайдерів
  new Swiper('.review__slider', { // Вказуємо склас потрібного слайдера
    // Підключаємо модулі слайдера
    // для конкретного випадку
    modules: [Navigation, EffectFade, Pagination],
    observer: true,
    centeredSlides: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: false,

    // autoHeight: true,

    //touchRatio: 0,
    //simulateTouch: false,
    // loop: true,
    //preloadImages: false,
    // lazy: true,

    // Ефекти
    effect: 'fade',
    speed: 500,

    // autoplay: {
    // 	delay: 3000,
    // 	disableOnInteraction: false,
    // },

    // Пагінація
    pagination: {
      el: '.review__pagination',
      clickable: true,
    },

    // Скроллбар
    /*
    scrollbar: {
    	el: '.swiper-scrollbar',
    	draggable: true,
    },
    */

    // Кнопки "вліво/вправо"
    navigation: {
      prevEl: '.review__swiper-btn--left',
      nextEl: '.review__swiper-btn--right',
    },
    /*
    
    // Брейкпоінти
    breakpoints: {
    	640: {
    		slidesPerView: 1,
    		spaceBetween: 0,
    		autoHeight: true,
    	},
    	768: {
    		slidesPerView: 2,
    		spaceBetween: 20,
    	},
    	992: {
    		slidesPerView: 3,
    		spaceBetween: 20,
    	},
    	1268: {
    		slidesPerView: 4,
    		spaceBetween: 30,
    	},
    },
    */
    // Події
    on: {

    }
  });
}


function functionName() {
  if (window.innerWidth <= 769) {
    // Список слайдерів
    // Перевіряємо, чи є слайдер на сторінці
    // Створюємо слайдер
    new Swiper('.content-catalog', { // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation],
      // observer: true,
      // observeParents: true,
      slidesPerView: 2,
      spaceBetween: 30,
      autoHeight: true,
      allowTouchMove: false,

      // speed: 800,
      // allowTouchMove: true,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
      // Ефекти
      effect: 'fade',
    speed: 500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      */
      // Пагінація
      /*
      pagination: {
       el: '.swiper-pagination',
         clickable: true,
       },
       */
      // Скроллбар
      /*
      scrollbar: {
      	el: '.swiper-scrollbar',
      	draggable: true,
      },
      */

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: '.content-catalog__btn--left',
        nextEl: '.content-catalog__btn--right',
      },

      // Брейкпоінти
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: {
            prevEl: '.content-catalog__btn--left',
            nextEl: '.content-catalog__btn--right',
          },
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // 768: {
        // 	slidesPerView: 2,
        // 	spaceBetween: 20,
        // },

      },
      // Події
      on: {

      }
    });
  }
}
// window.onresize = functionName;
window.onload = functionName;




// второй
// Ініціалізація слайдерів
function initSlidersPrint() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector('.print__slider')) { // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper('.print__slider', { // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 137,
      autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      /*
      // Ефекти
      effect: 'fade',
      autoplay: {
      	delay: 3000,
      	disableOnInteraction: false,
      },
      */
      // Пагінація
      pagination: {
        el: '.print__pagination',
        clickable: true,
      },
      // Скроллбар
      /*
      scrollbar: {
      	el: '.swiper-scrollbar',
      	draggable: true,
      },
      */
      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: '.print__btn--prev',
        nextEl: '.print__btn--next',
      },

      // Брейкпоінти
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1268: {
          spaceBetween: 30,
        },
      },
      // Події
      on: {}
    });
  }
}

// Ініціалізація слайдерів
function initSlidersPromotions() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector('.promotions__slider')) { // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper('.promotions__slider', { // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      /*
      // Ефекти
      effect: 'fade',
      autoplay: {
      	delay: 3000,
      	disableOnInteraction: false,
      },
      */
      // Пагінація
      pagination: {
        el: '.promotions__pagination',
        clickable: true,
      },
      // Скроллбар
      /*
      scrollbar: {
      	el: '.swiper-scrollbar',
      	draggable: true,
      },
      */
      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: '.btn-prev__promotions',
        nextEl: '.btn-next__promotions',
      },
      /*
      // Брейкпоінти
      breakpoints: {
      	640: {
      		slidesPerView: 1,
      		spaceBetween: 0,
      		autoHeight: true,
      	},
      	768: {
      		slidesPerView: 2,
      		spaceBetween: 20,
      	},
      	992: {
      		slidesPerView: 3,
      		spaceBetween: 20,
      	},
      	1268: {
      		slidesPerView: 4,
      		spaceBetween: 30,
      	},
      },
      */
      // Події
      on: {}
    });
  }
}

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders();
  initSlidersPrint();
  initSlidersPromotions();
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
});