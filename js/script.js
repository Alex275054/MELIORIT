//Burger
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});
//Burger

//Slick
$(document).ready(function () {
   $('.pi').slick({
      arrows: true,
      slidesToShow: 4,
      speed: 500,
      responsive: [
         {
            breakpoint: 1250,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1
            }
         },
      ]
   });
   $('.si').slick({
      arrows: true,
      slidesToShow: 4,
      speed: 500,
      responsive: [
         {
            breakpoint: 1250,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 1
            }
         },
      ]
   });
   $('.ni').slick({
      slidesToShow: 4,
      speed: 500,
      responsive: [
         {
            breakpoint: 1250,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1
            }
         },
      ]
   });
});
//Slick

//Spollers
$(document).ready(function () {
   $('.block__title').click(function (event) {
      if ($('.block').hasClass('one')) {
         $('.block__title').not($(this)).removeClass('active');
         $('.block__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});
//Spollers

//Swiper
// new Swiper('.popular__items', {
//    // Брейк поинты (адаптив)
//    // Ширина экрана
//    breakpoints: {
//       320: {
//          slidesPerView: 1,
//       },
//       480: {
//          slidesPerView: 2,
//       },
//       992: {
//          slidesPerView: 3,
//       }
//    },
//    // Отступ между слайдами
//    spaceBetween: 30,
//    // Бесконечный слайдер
//    loop: true,
// });
//Swiper