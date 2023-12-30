// nav fixed 
// nav fixed
$('.back-to-top i').click(function(){
  $('html, body').animate({
    scrollTop:0
  },500)
})
$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
  if(scrolling > 50){
    $('.nav-bg').addClass('navfixed-bg')
  }
  else{
    $('.nav-bg').removeClass('navfixed-bg')
  }
  if(scrolling > 50){
    $('.back-to-top').fadeIn(500)
  }
  else{
    $('.back-to-top').fadeOut(500)
  }
})

// client slick
$('.client-slide-main').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });