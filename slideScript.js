var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 15,
  initialSlide: 1,
  centeredSlides: true,
  loop: true,
  keyboard: {
    enabled: true,
  }
});

var swiper = new Swiper(".mobileshow", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    initialSlide: 1,
    keyboard: {
      enabled: true,
    }

  });
  
  var swiper = new Swiper(".filterSlide", {
    slidesPerView: "auto",
    spaceBetween: 10,
    initialSlide: 0,
    loop: false,
    container: false,
    centeredSlides: false,
    keyboard: {
      enabled: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      }
    },
    breakpoints: {
      400: {
        slidesPerView: 2,
        spaceBetween: 10,
      }
    },
    breakpoints: {
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      }
    },
    breakpoints: {
      768: {
        slidesPerView: 3.2,
        spaceBetween: 10,
      }
    },
    breakpoints: {
      992: {
        slidesPerView: 4.2,
        spaceBetween: 10,
      }
    }
  });