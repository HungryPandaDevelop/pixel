$(document).ready(function () {
  wow = new WOW();
  wow.init();
  var windowWidth = $(window).width();
  if (windowWidth < 988) {
    var psOwl = $('.owl-portfolio');
    psOwl.owlCarousel({
      items: 1,
      dots: false,
      nav: true
    });
    var artOwl = $('.owl-ariticle');
    artOwl.owlCarousel({
      items: 1,
      dots: false,
      stagePadding: 0,
      margin: 30,
      nav: true
    });
    var artOwl = $('.owl-step_work');
    artOwl.owlCarousel({
      items: 1,
      dots: false,
      nav: true
    });

  }


});