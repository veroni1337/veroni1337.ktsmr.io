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