// document.addEventListener('DOMContentLoaded', () => {
//   const navigation = () => {
//     const anchors = document.querySelectorAll(
//         '.nav__link, .logo-footer, .hero__link, .aside__btn, .tabs-block__btn',
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

const calculateWindowPrice = (height, width, isTripleGlazed, color) => {
  const basePrice = 1800;
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

const handleSubmit = async (event) => {
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
};

const handleCheckboxChange = () => {
  if (!tripleGlazedCheckbox.checked) {
    image1.style.display = 'block';
    image2.style.display = 'none';
  } else {
    image1.style.display = 'none';
    image2.style.display = 'block';
  }
};

image2.style.display = 'none';

form.addEventListener('submit', handleSubmit);
tripleGlazedCheckbox.addEventListener('change', handleCheckboxChange);

// Стили прелоадера
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


const modalButton = document.getElementById('modal-button');
const modalOverlay = document.getElementById('modal-overlay');
const modalDialog = document.getElementById('modal-dialog');
const modalClose = document.getElementById('modal-close');

modalButton.addEventListener('click', () => {
  modalOverlay.classList.add('visible');
  modalDialog.classList.add('visible');
  document.body.classList.add('modal-open');
});

modalClose.addEventListener('click', () => {
  modalOverlay.classList.remove('visible');
  modalDialog.classList.remove('visible');
  document.body.classList.remove('modal-open');
});
