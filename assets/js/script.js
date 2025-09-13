 var swiper = new Swiper("#exclusiveOffer", {
      slidesPerView: 3,
      spacebetween:30,
      loop: true,
      
       pagination: {
        el: ".swiper-pagination",
      },
 });


//  most popular destination
  var swiper = new Swiper("#popularDestination", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 4,
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
    });


//  most popular destination
  var swiper = new Swiper("#bestHotels", {
      centeredSlides: true,
      slidesPerView: 4,
      spaceBetween: 30,
      grabCursor: true,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
      },
    });