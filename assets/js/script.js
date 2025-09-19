 var swiper = new Swiper("#connectedPrograms", {
    slidesPerView: 3,
    slidesPerView: 7,
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 5,
        },

        768: {
            slidesPerView: 5,
            spaceBetween: 10,
        },

        1024: {
            slidesPerView: 7,
            spaceBetween: 10,
        },
    }
});

 var swiper = new Swiper("#exclusiveOffer", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 5,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    }
});



//  most popular destination
  var swiper = new Swiper("#popularDestination", {
      effect: "coverflow",
      grabCursor: true,
      slidesPerView: 2,
      loop:true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },

      pagination: {
        el: ".swiper-pagination",
      },

      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });


//  most popular destination
  var swiper = new Swiper("#bestHotels", {
      centeredSlides: true,
      slidesPerView: 2,
      spaceBetween: 10,
      grabCursor: true,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
      },

      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });


