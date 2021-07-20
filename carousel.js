var opts = {
  autoScroll : true,
  autoScrollSpeed : 20000
};
var responsiveCarousel = $('#carousel-responsive').floatingCarousel(opts);

$(window).resize($.debounce(100, function () {
responsiveCarousel.update(opts);
}));