//OWL Carousel
$('.tabs').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0:   {items: 2},
      250: {items: 3},
      400: {items: 4},
      500: {items: 5}
    }
});

//Tabs

$('.tabs li a').click(function() {
	var activeLink = $(this).data('target');
  var targetTab = $('.tab.'+activeLink);
  
  targetTab.siblings().removeClass('active');
	targetTab.addClass('active');
});
