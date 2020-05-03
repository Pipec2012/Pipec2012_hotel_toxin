let _ = require('slick-carousel');

   $(document).ready(function(){
      $('.room_photo__slider').slick({
         dots: true,
         infinite: true,
         slidesToShow: 1,
         
         nextArrow: '<span class="material-icons room_slider__next">keyboard_arrow_right</span>',
         prevArrow: '<span class="material-icons room_slider__prev">keyboard_arrow_left</span>',
      });
   });