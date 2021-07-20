$(document).ready(function(){
  $('.icons').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
     autoplaySpeed: 1000
      }
    }]
  });
});