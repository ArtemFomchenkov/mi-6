// SMALL GALLERIES SLIDER - SLICK SCRIPT

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

// ROOMS PAGE SLIDER - SLICK SCRIPT

$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
});

// SLICK SLIDER FOR VARIABLE WIDTH

$('.variable-width').slick({
  dots: false,
  infinite: true,
  speed: 300,
  initialSlide: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
});

// SLICK-SLIDER Mini

$('.autoplay-mini').slick({
  slidesToShow: 1.1,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
});
