$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      speed: 400,
      allowSlidePrev: true,
      allowSlideNext: true,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination'
    }
    })
  });