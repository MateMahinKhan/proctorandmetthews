$(function(){
	var $slides	= $(".slide_animate");
	var $slides_two	= $(".slide_animate_two");
	var $slides_three	= $(".slide_animate_three");
	var currentSlide = 0;
	var currentSlide_two = 0;
	var currentSlide_three = 0;
	
	var $menuArray = $(".menu__link");
	var $colors  = ['#424242','#962524','#926834','#1f3957','#cd7e00','#0e391d','#381b1a'];
	
	$(".menu__link").css("color","#CCCBCD");
	$($menuArray.eq(currentSlide)).css("color",$colors[currentSlide]);
	
	var widthMoved = [0,0,0];
	var leftWidth = [0,0,0];
	
	$($slides.eq(currentSlide)).css("opacity","1");
	$($slides_two.eq(currentSlide_two)).css("opacity","1");
	$($slides_three.eq(currentSlide_two)).css("opacity","1");
	
	TweenLite.delayedCall(2, nextSlide,[[8,8,8]]);				
   
	function nextSlide(param1){

			var minusWidth = [0,0,0];
			var next = (currentSlide+1);
			var next_two = (currentSlide_two+1);
			var next_three = (currentSlide_three+1);
			
			if(currentSlide > 1){
				minusWidth[0] = $($slides.eq(currentSlide-2)).width()+param1[0];
				minusWidth[1] = $($slides_two.eq(currentSlide_two-2)).width()+param1[1];
				minusWidth[2] = $($slides_three.eq(currentSlide_three-2)).width()+param1[2];
			}
			TweenLite.to(".color--1, .jumbotron", 1, {backgroundColor:"#B43934",delay:4});

			leftWidth[0] = $($slides.eq(currentSlide)).width()+param1[0];
			leftWidth[1] = $($slides_two.eq(currentSlide_two)).width()+param1[1];
			leftWidth[2] = $($slides_three.eq(currentSlide_three)).width()+param1[2];
			
			widthMoved[0] = widthMoved[0] + leftWidth[0] - minusWidth[0];
			widthMoved[1] = widthMoved[1] + leftWidth[1] - minusWidth[1];
			widthMoved[2] = widthMoved[2] + leftWidth[2] - minusWidth[2];
			
			if(currentSlide == $slides.length-1){
				next = 0;
			}
			if(currentSlide_two == $slides_two.length-1){
				next_two = 0;
			}
			if(currentSlide_three == $slides_two.length-1){
				next_three = 0;
			}
			
			TweenLite.set($slides.eq(next), {left:leftWidth[0]});
			TweenLite.set($slides_two.eq(next), {left:leftWidth[1]});
			TweenLite.set($slides_three.eq(next), {left:leftWidth[2]});
				
			TweenLite.to($slides.eq(next), 2, {opacity:"1"});
			TweenLite.to($slides_two.eq(next), 2, {opacity:"1"});
			TweenLite.to($slides_three.eq(next), 2, {opacity:"1"});
		
			TweenLite.to($slides.eq(currentSlide), 2, {
				x: "-"+widthMoved[0],delay:2,ease: "Power2.easeInOut"
			});		
			TweenLite.to($slides.eq(next), 2, {
				x: "-"+leftWidth[0],delay:2,ease: "Power2.easeInOut"
			});
			
			TweenLite.to($slides_two.eq(currentSlide_two), 2, {
				x: "-"+widthMoved[1],delay:2,ease: "Power2.easeInOut"
			});		
			TweenLite.to($slides_two.eq(next_two), 2, {
				x: "-"+leftWidth[1],delay:2,ease: "Power2.easeInOut"
			});
				
			TweenLite.to($slides_three.eq(currentSlide_three), 2, {
				x: "-"+widthMoved[2],delay:2,ease: "Power2.easeInOut"
			});		
			TweenLite.to($slides_three.eq(next_three), 2, {
				x: "-"+leftWidth[2],delay:2,ease: "Power2.easeInOut"
			});	
			
			TweenLite.to($slides.eq(currentSlide), 2, {
				opacity:"0",
				delay:4
			});
			TweenLite.to($slides_two.eq(currentSlide_two), 2, {
				opacity:"0",
				delay:4
			});
			TweenLite.to($slides_three.eq(currentSlide_three), 2, {
				opacity:"0",
				delay:4
			});
				
			if(currentSlide == $slides.length-1){
				TweenLite.to($(".slide_animate"), 0, {transform: "matrix(1, 0, 0, 1, 0, 0)",delay:6});
				TweenLite.to($(".slide_animate"), 0, {left: 0,delay:6});
			}
			if(currentSlide_two == $slides_two.length-1){
				TweenLite.to($(".slide_animate_two"), 0, {transform: "matrix(1, 0, 0, 1, 0, 0)",delay:6});
				TweenLite.to($(".slide_animate_two"), 0, {left: 0,delay:6});
			}
			if(currentSlide_three == $slides_three.length-1){
				TweenLite.to($(".slide_animate_three"), 0, {transform: "matrix(1, 0, 0, 1, 0, 0)",delay:6});
				TweenLite.to($(".slide_animate_three"), 0, {left: 0,delay:6});
			}

		
			if (currentSlide < $slides.length-1) {
				currentSlide++;
				
				if(currentSlide == $slides.length-1){
					TweenLite.to($slides.eq(0), 2, {transform:"matrix(1, 0, 0, 1, 0, 0)"});
				}
			}
			else {
				currentSlide = 0;
				widthMoved[0] = 0;		
			}
			
			if (currentSlide_two < $slides_two.length-1) {
				currentSlide_two++;
				
				if(currentSlide_two == $slides_two.length-1){
					TweenLite.to($slides_two.eq(0), 2, {transform:"matrix(1, 0, 0, 1, 0, 0)"});
				}
			}
			else {
				currentSlide_two = 0;
				widthMoved[1] = 0;		
			}
			
			if (currentSlide_three < $slides_three.length-1) {
				currentSlide_three++;
				
				if(currentSlide_three == $slides_three.length-1){
					TweenLite.to($slides_three.eq(0), 2, {transform:"matrix(1, 0, 0, 1, 0, 0)"});
				}
			}
			else {
				currentSlide_three = 0;
				widthMoved[2] = 0;		
			}
			
			$(".menu__link").css("color","#CCCBCD");
			$($menuArray.eq(currentSlide)).css("color",$colors[currentSlide]);
			
			TweenLite.delayedCall(6, nextSlide,[[8,8,8]]);	
									
	}
	
	
});
