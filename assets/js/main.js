const burger = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__menu");
const menuLinks = document.querySelectorAll(".header__nav-link");
burger.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
    menu.classList.remove("active");
    burger.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var faqItems = document.querySelectorAll(".faq__information-item");
  faqItems.forEach(function (item) {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});


function capitalizeFirstLetter(input) {
  let value = input.value;
  if (value.length > 0) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  input.value = value;
}

// CONNECT INPUTMASK
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7(999) 999-99-99');
im.mask(inputs);


const devicesSlider = new Splide('#devicesSlider', {
  perPage: 3,
  gap: '20px',
  pagination: false,
  breakpoints: {
    1450: {
      gap: '10px',
    },
    1150: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    },
  }
})
devicesSlider.mount()
const progressBar = document.querySelector('.my-carousel-progress-bar');
const progressContainer = document.querySelector('.my-carousel-progress');
devicesSlider.on('moved', () => {
  const totalSlides = devicesSlider.length;
  const slidesPerPage = devicesSlider.options.perPage;
  const currentSlide = devicesSlider.index + 1;
  const progressPercentage = ((currentSlide - 1) / (totalSlides - slidesPerPage)) * 100;
  progressBar.style.width = `${progressPercentage}%`;
});
window.addEventListener('resize', () => {
  const progressContainerWidth = progressContainer.clientWidth;
  const progressPercentage = ((devicesSlider.index) / (devicesSlider.length - devicesSlider.options.perPage)) * 100;
  progressBar.style.width = `${(progressContainerWidth * progressPercentage) / 100}px`;
});


new Swiper(".reviews__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  scrollbar: {
    el: ".reviews__slider-scrollbar",
    hide: false,
  },
  navigation: {
    nextEl: ".buttonPrev",
    prevEl: ".buttonNext",
  },
});

const modal = document.querySelector('#my--modal');
  const modalContent = document.querySelector('#modalContent');
    const modalThanks = document.querySelector('#modalThanks');
      const myForm = document.querySelector('#myForm');
        const modalTriggers = document.querySelectorAll('.modal-trigger');
          const modalClose = document.querySelector('.modal__heading-close');
             const modalThanksClose = document.querySelector('.modal__thanks-close');

modalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', openModal);
});
modalClose.addEventListener('click', closeModalWithoutScroll);
  modalThanksClose.addEventListener('click', closeModalWithoutScroll);
    window.addEventListener('click', outsideClick);

function openModal(e) {
  e.preventDefault();
  const modalId = this.getAttribute('data-modal-id');
  modal.style.display = 'block';
    modalContent.classList.remove('hidden');
      modalThanks.classList.add('hidden');
}
myForm.addEventListener('submit', submitForm);
function submitForm(e) {
  e.preventDefault();
  const isFormSubmittedSuccessfully = true;
  if (isFormSubmittedSuccessfully) {
    modalContent.classList.add('hidden');
      modalThanks.classList.remove('hidden');
  }
}
function closeModalWithoutScroll(e) {
  e.preventDefault();
   closeModal();
}
function closeModal() {
  modal.style.display = 'none';
    modalContent.classList.remove('hidden');
      modalThanks.classList.add('hidden');
}

function outsideClick(e) {
  if (e.target.classList.contains('modal')) {
    closeModal();
  }
}




