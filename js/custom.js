// nav fixed 
// nav fixed
$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
  if(scrolling > 50){
    $('.nav-bg').addClass('navfixed-bg')
  }
  else{
    $('.nav-bg').removeClass('navfixed-bg')
  }

  if(scrolling > 20){
    $('.back_to_top i').fadeIn(500)
  }
  else{
    $('.back_to_top i').fadeOut(500)
  }
})

// client slick
$('.client-slide-main').slick({
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });