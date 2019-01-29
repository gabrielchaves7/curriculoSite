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
    });

   $('.fechar-modal').click(function(e) {  
       $('.modal-qualidade').not('.escondido').addClass('escondido');
       $('.overlay-para-modal').addClass('escondido');
    });

    $('.overlay-para-modal').click(function(e) {  
        $('.modal-qualidade').not('.escondido').addClass('escondido');
        $('.overlay-para-modal').addClass('escondido');
     });

    $('.wrapper-qualidade').click(function(e) {  
        modalToShow = $(this).attr('id');
        $('#modal'+modalToShow).removeClass('escondido');
        $('.overlay-para-modal').removeClass('escondido');
    }); 

    $('.fechar-contatos').click(function(e) {  
        $('.nao-se-convenceu').addClass('escondido');
     });
  });
