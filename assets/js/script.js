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


document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.swiper-slide.hoverForMoreInfo');
  const infos = document.querySelectorAll('.moreInfo');

  // Hide all .moreInfo initially
  infos.forEach(info => {
    info.style.display = 'none';
  });

  slides.forEach((slide, index) => {
    slide.addEventListener('mouseenter', () => {
      // Hide all .moreInfo divs
      infos.forEach(info => info.style.display = 'none');

      // Show only the corresponding .moreInfo div
      if(infos[index]) {
        infos[index].style.display = 'block';
      }
    });

    slide.addEventListener('mouseleave', () => {
      // Hide the corresponding .moreInfo when mouse leaves the slide
      if(infos[index]) {
        infos[index].style.display = 'none';
      }
    });
  });
});
