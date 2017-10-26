$(function(){
	$('.menubg').click(function() {
		$(this).fadeOut();
		$('.header .top-menu').removeClass('opened');
	});
	$('.header .top-line .menu-button').click(function() {
		$('.menubg').fadeIn();
		$('.header .top-menu').addClass('opened');
	});
	$('.popup .window .close').click(function() {
		$('.popup').fadeOut();
	});
	$('.header .top-line button').click(function() {
		$('.popup').fadeIn();
	});
	$('.index-page-slider').slick({
		arrows: false,
		dots: true
	});
	$('.products-slider').slick({
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1
		  }
		}
	  ]
	});
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: '.slider-for',
	  vertical: true,
	  focusOnSelect: true
	});
});