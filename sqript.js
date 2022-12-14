let barsBtn = document.querySelector('#bars-btn');
let navBar = document.querySelector('.navbar');



barsBtn.addEventListener('click', () => {
  barsBtn.classList.toggle('fa-times');
  navBar.classList.toggle('active');
})


var swiper = new Swiper(".courses-slider", {
  spaceBetween: 25,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".buttons-slider", {

  loop: true,
  centeredSlides: true,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".books-slider", {
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },

  }
});


var swiper = new Swiper(".review-slider", {
  spaceBetween: 24,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },

  }
});