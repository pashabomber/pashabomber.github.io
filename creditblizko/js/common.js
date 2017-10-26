$(function () {
    var tabContainers = $('div.tabs > div');
    tabContainers.hide().filter(':first').show();
    $('div.tabs ul.tabNavigation a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('div.tabs ul.tabNavigation a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    }).filter(':first').click();
});

$(function () {
    var tabContainers = $('div.tabs2 > div');
    tabContainers.hide().filter(':first').show();
    $('div.tabs2 ul.tabNavigation a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('div.tabs2 ul.tabNavigation a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    }).filter(':first').click();
});

$(function(){
	$('.popup .window .close').click(function() {
		$('.popup').fadeOut();
	});
	$('.bank-page .reviews .button button').click(function() {
		$('.popup').fadeIn();
	});
	$('.menubg').click(function() {
		$(this).fadeOut();
		$('.header .top-menu').removeClass('opened');
	});
	$('.header .menu-button').click(function() {
		$('.menubg').fadeIn();
		$('.header .top-menu').addClass('opened');
	});
});