const swiperHero = new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiperSale = new Swiper('.sale__swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,


  navigation: {
    nextEl: '.sale-button-next',
    prevEl: '.sale-button-prev',
    disabledClass: 'swiper-button-disabled',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 32,
    },
    1020: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 32,
    },
    1350: {
      slidesPerView: 'auto',
      slidesPerGroup: 3,
      spaceBetween: 32,
    },
  }
});

const swiperGood = new Swiper('.good__swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,

  navigation: {
    nextEl: '.good-button-next',
    prevEl: '.good-button-prev',
    disabledClass: 'swiper-button-disabled',
  },

  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1020: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1350: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  }
});

const swiperPrototype = new Swiper('.prototype__swiper', {
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 16,
  loop: false,

  navigation: {
    nextEl: '.prototype-button-next',
    prevEl: '.prototype-button-prev',
    disabledClass: 'swiper-button-disabled',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1020: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1350: {
      slidesPerView: 4,
      spaceBetween: 32,
    }
  }
});


let swiperProduct;
const breakpointSeven = window.matchMedia('(min-width: 1350px)');

const breakpointChecker = function () {
  if (breakpointSeven.matches === true) {
    if (swiperProduct !== undefined) swiperProduct.destroy(true, true);
    return;
  } else if (breakpointSeven.matches === false) {
    return enableSwiper();
  }
}

const enableSwiper = function () {
  swiperProduct = new Swiper('.product__swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,

    navigation: {
      nextEl: '.product-button-next',
      prevEl: '.product-button-prev',
      disabledClass: 'swiper-button-disabled',
    },

    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 78,
      },
      1020: {
        slidesPerView: 'auto',
        spaceBetween: 78,
      },
      1350: {
        slidesPerView: 4,
        spaceBetween: 78,
      }
    }
  });
}

breakpointSeven.addListener(breakpointChecker);
breakpointChecker();
