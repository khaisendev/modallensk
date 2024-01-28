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
