
      var swiper = new Swiper(".mySwiper", {
      // space between slides in px
      spaceBetween: 10,
      centeredSlides: true,
      autoplay: {
        // 2.5s delay between transitions
        delay: 2500, 
        disableOnInteraction: false, // Continue autoplay after user interactions
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });