// JavaScript Document
$(function(){
	var $slides	= $(".slide");
	var currentSlide = 0;
	
	var $menuArray = $(".menu__link");
	
	var $colors  = ['#424242','#962524','#926834','#1f3957','#cd7e00','#0e391d','#381b1a'];
	
	$(".menu__link").css("color","#CCCBCD");
	$($menuArray.eq(currentSlide)).css("color",$colors[currentSlide]);
	
	var widthMoved = 0;
	var leftWidth = 0;
	
	$($slides.eq(currentSlide)).css("opacity","1");
	
	TweenLite.delayedCall(2, nextSlide);
	
	var difference = 8;
	
	function nextSlide(){
		var minusWidth = 0;
		var next = (currentSlide+1);
		
		if(currentSlide > 1){
			minusWidth = $($slides.eq(currentSlide-2)).width()+difference;
		}
		
		TweenLite.to(".color--1, .jumbotron", 1, {backgroundColor:"#B43934",delay:4});
		
		leftWidth = $($slides.eq(currentSlide)).width()+difference;
		
		widthMoved = widthMoved + leftWidth - minusWidth;
		
		if(currentSlide == $slides.length-1){
			next = 0;
		}
		
		TweenLite.set($slides.eq(next), {left:leftWidth+32});
		
		TweenLite.to($slides.eq(next), 2, {opacity:"1",delay:1.5});
		
		TweenLite.to($slides.eq(currentSlide), 2, {
			x: "-"+widthMoved,delay:2,ease: "Power2.easeInOut"
		});
		
		TweenLite.to($slides.eq(next), 2, {
			x: "-"+leftWidth,delay:2,ease: "Power2.easeInOut"
		});
		
		TweenLite.to($slides.eq(currentSlide), 2, {
			opacity:"0",
			delay:4
		});
		
		if(currentSlide == $slides.length-1){
			TweenLite.to($(".slide"), 0, {transform: "matrix(1, 0, 0, 1, 0, 0)",delay:7});
			TweenLite.to($(".slide"), 0, {left: 0,delay:4});
		}
		
		if (currentSlide < $slides.length-1) {
			currentSlide++;
			
			if(currentSlide == $slides.length-1){
				TweenLite.to($slides.eq(0), 2, {transform:"matrix(1, 0, 0, 1, 0, 0)"});
			}
		}
		else {
			currentSlide = 0;
			widthMoved = 0;		
		}
		
		$(".menu__link").css("color","#CCCBCD");
		$($menuArray.eq(currentSlide)).css("color",$colors[currentSlide]);
		
		TweenLite.delayedCall(6, nextSlide);	
	}
});