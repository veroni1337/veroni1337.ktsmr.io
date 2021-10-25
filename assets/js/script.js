$('.header-lang-title').click(function(){
    $('.header-lang-dropdown').toggleClass('active');
  
    if($('.header-lang-dropdown').hasClass('active')){
        $('.header-lang-dropdown').show("slow");
        $('.header-lang-title-svg').css('transform', 'rotate(180deg)');
        $('.header-lang-title-svg').css('transition', 'all 0.3s ease 0s');
    }
    else{
        $('.header-lang-dropdown').hide(0);
        $('.header-lang-title-svg').css('transform', 'rotate(0deg)');
      }
});
// dropdown-lang

$(document).ready(function() {
    $('.burger-icon').click(function() {
      $('.burger-icon').toggleClass('active');
    });
})
// burger-btn

$('.burger-icon').click(function(){
    $('.burger-dropdown').toggleClass('active');
  
    if($('.burger-dropdown').hasClass('active')){
        $('.burger-dropdown').show("slow");
    }
    else{
        $('.burger-dropdown').hide(300);
      }
});
// burger

// search
$('.header-search').click(function() {
    $('.header-search').css('width', '100%',);
    $('.header-search-form').css('width', '100%');
    $('#search').css('width', '100%');
    $('.header-search').css('margin-left', '10px');
});

jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $("#search"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('#search').css('width', 'auto');
        $('.header-search').css('width', 'auto');
        $('.header-search-form').css('width', 'auto'); // скрываем его
    }
  });
});
// search

const swiper = new Swiper('.services-slider', {
      slidesPerView: 5,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: '.services-slider-next',
        prevEl: '.services-slider-prev',
      },
      breakpoints: {
          310: {
              slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          560: {
              slidesPerView: 2,
          },
          768: {
              slidesPerView: 3,
          },
          1240: {
              slidesPerView: 5,
          },
          1650: {
              slidesPerView: 5,
          },
      },
});


var swiperNews = new Swiper(".news-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".news-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
});


var swiperBanner = new Swiper(".banner-slider", {
    slidesPerView: 2,
    spaceBetween: 0,
    navigation: {
      nextEl: ".banner-button-next",
      prevEl: ".banner-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
      }
    }
});


