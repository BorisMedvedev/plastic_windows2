
// document.addEventListener('DOMContentLoaded', () => {
//   const navigation = () => {
//     const anchors = document.querySelectorAll(
//         '.nav__link, .logo-footer, .hero__link,
// .aside__btn, .tabs-block__btn',
//     );

//     for (const anchor of anchors) {
//       anchor.addEventListener('click', (e) => {
//         e.preventDefault();

//         const blockID = anchor.getAttribute('href');
//         console.log(blockID);

//         document.querySelector(blockID).scrollIntoView({
//           behavior: 'smooth',
//           block: 'start',
//         });
//       });
//     }
//   };


//   const tabsContent = () => {
//     const tabsBtn = document.querySelectorAll('.tabs-block__btn');
//     const tabsItem = document.querySelectorAll('.table-prise');

//     tabsBtn.forEach((el) => {
//       el.addEventListener('click', (e) => {
//         const path = e.currentTarget.dataset.path;
//         navigation();
//         tabsBtn.forEach((btn) => {
//           btn.classList.remove('tabs-block__btn--active');
//           e.currentTarget.classList.add('tabs-block__btn--active');

//           tabsItem.forEach((el) => {
//             el.classList.remove('table-prise--active');
//             document
//                 .querySelector(`[data-target='${path}']`)
//                 .classList.add('table-prise--active');
//           });
//         });
//       });
//     });
//   };

// const contactsForm = () => {
//   const Selector = document.querySelectorAll('input[type=\'tel\']');
//   const im = new Inputmask('+7 (999)-999-99-99');
//   im.mask(Selector);
//   new JustValidate('.contacts-form', {
//     rules: {
//       name: {
//         required: true,
//         minLength: 2,
//         maxLength: 10,
//       },
//       phone: {
//         required: true,
//         function: (name, value) => {
//           const phone = Selector.Inputmask.unmaskevalue();
//           return Number(phone) && phone.length === 10;
//         },
//       },
//       mail: {
//         required: true,
//         email: true,
//       },
//     },
//   });
// };


//   navigation();
//   tabsContent();
//   // contactsForm();
// });


const swiperNew = new Swiper('.mySwiper', {
  slidesPerView: 1.5,
  spaceBetween: 80,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
    },
    440: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
      centeredSlides: false,
    },
    1340: {
      slidesPerView: 1.5,
      spaceBetween: 50,
      centeredSlides: true,
    },
    1440: {
      slidesPerView: 1.5,
      spaceBetween: 50,
      centeredSlides: true,
    },
    1560: {
      slidesPerView: 1.5,
      spaceBetween: 50,
      centeredSlides: true,
    },
    1880: {
      slidesPerView: 1.5,
      spaceBetween: 80,
      centeredSlides: true,
    },
    1920: {
      slidesPerView: 1.5,
      spaceBetween: 80,
      centeredSlides: true,
    },
  },
});


// let lastScroll = 0;
// const defaultOffset = 200;
// const header = document.querySelector('.header');

// const scrollPosition = () => window.pageXOffset ||
// document.documentElement.scrollTop;
// const containHide = () => header.classList.contains('hide');

// window.addEventListener('scroll', () => {
//   if (scrollPosition() > lastScroll && !containHide() &&
//   scrollPosition() > defaultOffset) {
//     header.classList.add('hide');
//   } else if (scrollPosition() < lastScroll && containHide()) {
//     header.classList.remove('hide');
//   }

//   lastScroll = scrollPosition();
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const burger = document.querySelector('.burger');
//   const menu = document.querySelector('.menu-mobail');

//   burger.addEventListener('click', () => {
//     burger.classList.toggle('burger--active');
//     menu.classList.toggle('menu-mobail-active');
//   });

//   const close = document.querySelector('.burger-mob');
//   close.addEventListener('click', () => {
//     menu.classList.remove('menu-mobail-active');
//     burger.classList.remove('burger--active');
//   });

//   const btns = document.querySelectorAll('.footer__nav-link');

//   btns.forEach(el => {
//     el.addEventListener('click', (e) => {
//       menu.classList.remove('menu-mobail-active');
//       burger.classList.remove('burger--active');
//     });
//   });
// });


// const cookieEl = document.querySelector('.cookie-block');
// const okEl = document.querySelector('.ok');

// okEl.addEventListener('click', () => {
//   cookieEl.style.display = 'none';
// });

// const cookies = () => {
//   if (!Cookies.get('hide-cookie')) {
//     setTimeout(() => {
//       cookieEl.style.display = 'block';
//     }, 5000);
//   }

//   Cookies.set('hide-cookie', 'true', {
//     expires: 10,
//   });
// };


// cookies();


const heightInput = document.getElementById('height');
const widthInput = document.getElementById('width');
const tripleGlazedCheckbox = document.getElementById('triple-glazed');
const colorSelect = document.getElementById('color');
const resultDiv = document.getElementById('result');
const form = document.getElementById('form');
const image1 = document.getElementById('window-image');
const image2 = document.getElementById('window-image2');
const preloader = document.getElementById('preloader');
const modalButtons = document.querySelectorAll('.btn-calculator');
const modalOverlay = document.getElementById('modal-overlay');
const modalDialog = document.getElementById('modal-dialog');
const modalClose = document.getElementById('modal-close');

const calculateWindowPrice = (height, width, isTripleGlazed, color) => {
  const basePrice = 5750;
  const area = height * width;
  let price = basePrice * area;

  if (isTripleGlazed) {
    price *= 1.5;
  }

  switch (color) {
    case 'white':
      break;
    case 'brown':
    case 'beige':
      price *= 1.1;
      break;
    default:
      price *= 1.2;
  }

  return price;
};

const showPreloader = () => {
  preloader.style.display = 'block';
};

const hidePreloader = () => {
  preloader.style.display = 'none';
};

async function handleSubmit(event) {
  event.preventDefault();
  const height = heightInput.value;
  const width = widthInput.value;
  const isTripleGlazed = tripleGlazedCheckbox.checked;
  const color = colorSelect.value;
  showPreloader();
  await new Promise(resolve => setTimeout(resolve, 1500));
  const price = calculateWindowPrice(height, width, isTripleGlazed, color);
  resultDiv.textContent = `Предварительная цена: ${price.toFixed(2)} рублей`;
  hidePreloader();
}

const handleCheckboxChange = () => {
  if (!tripleGlazedCheckbox.checked) {
    image1.style.display = 'block';
    image2.style.display = 'none';
  } else {
    image1.style.display = 'none';
    image2.style.display = 'block';
  }
};

form.addEventListener('submit', handleSubmit);
tripleGlazedCheckbox.addEventListener('change', handleCheckboxChange);

modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    modalOverlay.classList.add('visible');
    modalDialog.classList.add('visible');
    document.body.classList.add('modal-open');
  });
});

modalClose.addEventListener('click', () => {
  modalOverlay.classList.remove('visible');
  modalDialog.classList.remove('visible');
  document.body.classList.remove('modal-open');
});

preloader.style.display = 'none';
preloader.style.position = 'absolute';
preloader.style.left = '50%';
preloader.style.top = '50%';
preloader.style.width = '48px';
preloader.style.height = '48px';
preloader.style.marginLeft = '-24px';
preloader.style.marginTop = '-24px';
preloader.style.border = '#31a9df 3px solid';
preloader.style.borderLeftColor = 'transparent';
preloader.style.borderRadius = '50%';
preloader.style.animation = 'rotating 1s linear infinite';

const rotatingKeyframes = `from { transform: rotate(0deg); }
to { transform: rotate(360deg); }`;
const rotatingAnimation = `@keyframes rotating { ${rotatingKeyframes} }`;

const style = document.createElement('style');
style.innerHTML = rotatingAnimation;
document.head.appendChild(style);

const button = document.getElementById('menu-toggle');
const openCubes = Array.from(document.querySelectorAll('#open-cubes rect'));
const closeCubes = Array.from(document.querySelectorAll('#close-cubes rect'));
const nav = document.querySelector('.nav__list');
let locked = false;

const openEffect = (cubes) => {
  cubes.forEach((element, index) => {
    setTimeout(() => {
      element.classList.remove('spin-in');
      element.classList.add('spin-out');
    }, index * 10);
  });
};

const closeEffect = (cubes) => {
  cubes.forEach((element, index) => {
    setTimeout(() => {
      element.classList.remove('spin-out');
      element.classList.add('spin-in');
    }, index * 10);
  });
};

button.addEventListener('click', (e) => {
  if (!locked) {
    locked = true;
    button.classList.toggle('active');
    nav.classList.toggle('active');
    const length = openCubes.length;

    if (button.classList.contains('active')) {
      openEffect(openCubes);
      closeEffect(closeCubes);
    } else {
      closeEffect(openCubes);
      openEffect(closeCubes);
    }

    setTimeout(() => {
      locked = false;
    }, 1300 + length * 10);
  }
});


const modal = document.querySelector('.modal');
const openButtons = document.querySelectorAll('.open-btn');
const overlay = document.querySelector('.modal-overlay');
const closeButtons = document.querySelectorAll('.modal-close-btn');

const openModal = (event) => {
  event.preventDefault();
  modal.classList.add('open');
  document.body.classList.add('modal-open'); // добавление класса к body
};

const closeModal = () => {
  modal.classList.remove('open');
  document.body.classList.remove('modal-open'); // удаление класса с body
};

for (const button of openButtons) {
  button.addEventListener('click', openModal);
}

overlay.addEventListener('click', closeModal);

for (const button of closeButtons) {
  button.addEventListener('click', closeModal);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});


document.addEventListener('DOMContentLoaded', () => {
  let lastScroll = 0;
  const defaultOffset = 0;
  const header = document.querySelector('.uc-header');
  header.classList.add('top');
  const scrollPosition = () =>
    window.pageXOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains('hide');

  window.addEventListener('scroll', () => {
    if (
      scrollPosition() > lastScroll &&
      !containHide() &&
      scrollPosition() > defaultOffset
    ) {
      header.classList.add('hide');
      header.classList.add('top');
    } else if (scrollPosition() < lastScroll && containHide()) {
      header.classList.remove('hide');
      header.classList.remove('top');
    }

    if (scrollPosition() === defaultOffset) {
      header.classList.add('top');
    }


    lastScroll = scrollPosition();
  });
});


// // Получаем все ссылки на странице
// const links = document.querySelectorAll('a');

// // Добавляем слушатели событий на все ссылки
// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', function(event) {
//     // Отменяем стандартное действие ссылки
//     event.preventDefault();

//     // Получаем адрес страницы, куда нужно перейти
//     const href = this.getAttribute('href');

//     // Добавляем задержку перед переходом
//     setTimeout(() => {
//       // Осуществляем переход на другую страницу
//       window.location.href = href;
//     }, 500);
//   });
// }


const mixer = mixitup('.works__content');

Fancybox.bind('[data-filter="gallery"]', {
  caption(carousel, slide) {
    return `${slide.index + 1} / ${carousel.slides.length} ${slide.caption}`;
  },
});

const buttons = document.querySelectorAll('.filter-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('filter-btn--active'));
    button.classList.add('filter-btn--active');
  });
});


