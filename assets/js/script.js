 var swiper = new Swiper("#exclusiveOffer", {
      slidesPerView: 3,
      spacebetween:30,
      loop: true,
      
       pagination: {
        el: ".swiper-pagination",
      },
 });



 
//  connected programs
  var swiper = new Swiper("#connectedPrograms", {
      spaceBetween: 10,
      slidesPerView: 2,
      grabCursor: true,
      loop:true,
      zoom: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
      },
  });


//  most popular destination
  var swiper = new Swiper("#popularDestination", {
      effect: "coverflow",
      grabCursor: true,
      slidesPerView: 3,
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
      slidesPerView: 4,
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
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });


