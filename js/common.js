$(document).ready(function () {

  var windowWidth = $(window).width();
  if (windowWidth < 988) {
    var psOwl = $('.owl-portfolio');
    psOwl.owlCarousel({
      items: 1,
      dots: false
    });
    var artOwl = $('.owl-ariticle');
    artOwl.owlCarousel({
      items: 1,
      dots: false,
      stagePadding: 0,
      margin: 30
    });
    var artOwl = $('.owl-step_work');
    artOwl.owlCarousel({
      items: 1,
      dots: false,
    });
    var linksOwl = $('.owl-links');
    linksOwl.owlCarousel({
      items: 1,
      dots: false,
    });
  }


});