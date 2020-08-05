/*
(function($){

	"use strict";

	var $doc = $('html,body');
	$('.scroll-page').click(function(){
		$doc.animate({
			scrollTop: $($.attr(this,'href')).offset().top
		},5);
		return false;
	});
})(jQuery);



Efeito Deslizante em Nav. em OnePage.

$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
	targetOffset = $(id).offset().top,
	menuHeight = $('nav').innerHeight();

	console.log(menuHeight);

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 5000);
});


*/