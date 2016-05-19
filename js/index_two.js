$(function(){

	var difference_two = 8;
	var $slides_two	= $(".slide_animate_two");
	var currentSlide_two = 0;
	
	//var $menuArray = $(".menu__link");
	//var $colors  = ['#424242','#962524','#926834','#1f3957','#cd7e00','#0e391d','#381b1a'];
	
	//$(".menu__link").css("color","#CCCBCD");
	//$($menuArray.eq(currentSlide_two)).css("color",$colors[currentSlide_two]);
	
	var widthMoved_two = 0;
	var leftWidth_two = 0;
	
	$($slides_two.eq(currentSlide_two)).css("opacity","1");
	
	TweenLite.delayedCall(2, nextSlide);				
    
	function nextSlide(){

			var minusWidth_two = 0;
			var next = (currentSlide_two+1);
			
			if(currentSlide_two > 1){
				minusWidth_two = $($slides_two.eq(currentSlide_two-2)).width()+difference_two;
			}
		
			leftWidth_two = $($slides_two.eq(currentSlide_two)).width()+difference_two;
			
			widthMoved_two = widthMoved_two + leftWidth_two - minusWidth_two;
			
			if(currentSlide_two == $slides_two.length-1){
				next = 0;
			}
			
			TweenLite.set($slides_two.eq(next), {left:leftWidth_two});
				
			TweenLite.to($slides_two.eq(next), 2, {opacity:"1"});
		
			TweenLite.to($slides_two.eq(currentSlide_two), 2, {
				x: "-"+widthMoved_two,delay:2,ease: "Power2.easeInOut"
			});		
			TweenLite.to($slides_two.eq(next), 2, {
				x: "-"+leftWidth_two,delay:2,ease: "Power2.easeInOut"
			});	
			
			TweenLite.to($slides_two.eq(currentSlide_two), 2, {
				opacity:"0",
				delay:4
				});
				
			if(currentSlide_two == $slides_two.length-1){
				TweenLite.to($(".slide_animate_two"), 0, {transform: "matrix(1, 0, 0, 1, 0, 0)",delay:6});
				TweenLite.to($(".slide_animate_two"), 0, {left: 0,delay:6});
			}
		
			if (currentSlide_two < $slides_two.length-1) {
				currentSlide_two++;
				
				if(currentSlide_two == $slides_two.length-1){
					TweenLite.to($slides_two.eq(0), 2, {transform:"matrix(1, 0, 0, 1, 0, 0)"});
				}
			}
			else {
				currentSlide_two = 0;
				widthMoved_two = 0;		
			}
			
			//$(".menu__link").css("color","#CCCBCD");
			//$($menuArray.eq(currentSlide_two)).css("color",$colors[currentSlide_two]);
			
			TweenLite.delayedCall(6, nextSlide);	
									
	}
	
	
});
