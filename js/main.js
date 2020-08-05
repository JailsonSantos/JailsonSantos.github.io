/* Efeito Deslizante em NavBa em OnePage. */

$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
	targetOffset = $(id).offset().top,
	menuHeight = $('nav').innerHeight();

	console.log(menuHeight);

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 3000);
});

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





Mudar a cor da barra do header basta adicionar a classe header no documento.

const header = document.querySelector('.header');

window.onscroll = function(){
	var top = window.scrollY;
	console.log(top);

	if(top >= 560){
		header.classList.add('active')
	}else{
		header.classList.remove('active');
	}
}


Estilização do CSS, para funcionar

header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 4rem;
	z-index: 100;
	background: transparent;
	transition: all 0.5s;
}

header.active{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 4rem;
	z-index: 100;
	background-color: black;
	transition: all 0.5s;
}




*/







/*

<div class="carousel-item active">
				<div class="row">	
					<div class="col-lg-6 col-sm-1 p-0">	
						<a href="#">
							<img src="img/003.jpg" class="img-fluid" alt="Preimeiro Slide">		
							<div class="carousel-caption d-none d-md-block">
								<h4  style="color: red;">Primeiro Slide</h4>
								<h2  style="color: red;">Casamentos</h2>
							</div>			
						</a>
					</div>			
					<div class="col-lg-6 col-sm-1 p-0">	
						<a href="#">
							<img src="img/002.jpg" class="img-fluid" alt="Preimeiro Slide">
							
						</a>
					</div>			
				</div>
			</div>
			<div class="carousel-item">
				<div class="row">	
					<div class="col-lg-6 col-sm-1 p-0">	
						<a href="#">
							<img src="img/004.jpg" class="img-fluid" alt="Preimeiro Slide">
							
						</a>
					</div>			
					<div class="col-lg-6 col-sm-1 p-0">	
						<a href="#">
							<img src="img/005.jpg" class="img-fluid" alt="Preimeiro Slide">
							
						</a>
					</div>			
				</div>
			</div>


*/