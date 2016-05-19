$(function(){

	var difference_three = 8;
	var $slides_three	= $(".slide_animate_three");
	var currentSlide_three = 0;
	
	//var $menuArray = $(".menu__link");
	//var $colors  = ['#424242','#962524','#926834','#1f3957','#cd7e00','#0e391d','#381b1a'];
	
	//$(".menu__link").css("color","#CCCBCD");
	//$($menuArray.eq(currentSlide_three)).css("color",$colors[currentSlide_three]);
	
	var widthMoved_three = 0;
	var leftWidth_three = 0;
	
	$($slides_three.eq(currentSlide_three)).css("opacity","1");
	
	TweenLite.delayedCall(2, nextSlide);				

	function nextSlide(){

			var minusWidth_three = 0;
			var next = (currentSlide_three+1);
			
			if(currentSlide_three > 1){
				minusWidth_three = $($slides_three.eq(currentSlide_three-2)).width()+difference_three;
			}
		
			leftWidth_three = $($slides_three.eq(currentSlide_three)).width()+difference_three;
			
			widthMoved_three = widthMoved_three + leftWidth_three - minusWidth_three;
			
			if(currentSlide_three == $slides_three.length-1){
				next = 0;
			}
			
			TweenLite.set($slides_three.eq(next), {left:leftWidth_three});
				
			TweenLite.to($slides_three.eq(next), 2, {opacity:"1"});
		
			TweenLite.to($slides_three.eq(currentSlide_three), 2, {
				x: "-"+widthMoved_three,delay:2,ease: "Power2.easeInOut"
			});		
			TweenLite.to($slides_three.eq(next), 2, {
				x: "-"+leftWidth_three,delay:2,ease: "Power2.easeInOut"
			});	
			
			TweenLite.to($slides_three.eq(currentSlide_three), 2, {
				opacity:"0",
				delay:4
				});
				
			if(currentSlide_three == $slides_three.length-1){
				TweenLite.to($(".slide_animate_three"), 0, {transform: "matrix(1, 0, 0, 1, 0, 0)",delay:6});
				TweenLite.to($(".slide_animate_three"), 0, {left: 0,delay:6});
			}
		
			if (currentSlide_three < $slides_three.length-1) {
				currentSlide_three++;
				
				if(currentSlide_three == $slides_three.length-1){
					TweenLite.to($slides_three.eq(0), 2, {transform:"matrix(1, 0, 0, 1, 0, 0)"});
				}
			}
			else {
				currentSlide_three = 0;
				widthMoved_three = 0;		
			}
			
			//$(".menu__link").css("color","#CCCBCD");
			//$($menuArray.eq(currentSlide_three)).css("color",$colors[currentSlide_three]);
			
			TweenLite.delayedCall(6, nextSlide);	
									
	}
	
	
});
