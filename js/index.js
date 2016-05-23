// JavaScript Document
$( document ).ready(function() {

	var slides = $(".slide");
	var currentSlide = 1;
	var spaceDifference =8;

	var $menuArray = $(".menu__link");
	var $colors  = ['#424242','#962524','#926834','#1f3957','#cd7e00','#0e391d','#381b1a'];
	
	$(".menu__link").css("color","#CCCBCD");
	$($menuArray.eq(currentSlide-1)).css("color",$colors[currentSlide-1]);

	function nextSlide() {
		var tl = new TimelineMax({delay:2 });//onUpdate:updateStats, onRepeat:updateReps, onComplete:restart

		var widthToTransformLine1 = (slides.eq(currentSlide-1).children().eq(0).width()+spaceDifference);
		var widthToTransformLine2 = (slides.eq(currentSlide-1).children().eq(1).width()+spaceDifference);
		var widthToTransformLine3 = (slides.eq(currentSlide-1).children().eq(2).width()+spaceDifference);

		 tl.set(slides.eq(currentSlide).children().eq(0), {transform: 'translate3d('+widthToTransformLine1+'px, 0px, 0px)' , ease: "Power2.easeInOut"})
		 	.set(slides.eq(currentSlide).children().eq(1), {transform: 'translate3d('+widthToTransformLine2+'px, 0px, 0px)', ease: "Power2.easeInOut"})
		 	.set(slides.eq(currentSlide).children().eq(2), {transform: 'translate3d('+widthToTransformLine3+'px, 0px, 0px)', ease: "Power2.easeInOut"})
		 	
		 	.to(
		 		[slides.eq(currentSlide).children().eq(0),
		 		slides.eq(currentSlide).children().eq(1),
		 		slides.eq(currentSlide).children().eq(2)],
		 		2,
		 		{ opacity:1}
		 	)

		 	.to(
		 		[slides.eq(currentSlide).children().eq(0),
		 		slides.eq(currentSlide).children().eq(1),
		 		slides.eq(currentSlide).children().eq(2)], 
		 		2,
		 		{transform: 'translate3d(0px, 0px, 0px)', ease: "Power2.easeInOut"}
		 	)
		 	
		 	.to(slides.eq(currentSlide-1).children().eq(0), 2, {transform: 'translate3d(-'+widthToTransformLine1+'px, 0px, 0px)', ease: "Power2.easeInOut"}, "-=2")
		 	.to(slides.eq(currentSlide-1).children().eq(1), 2, {transform: 'translate3d(-'+widthToTransformLine2+'px, 0px, 0px)', ease: "Power2.easeInOut"}, "-=2")
		 	.to(slides.eq(currentSlide-1).children().eq(2), 2, {transform: 'translate3d(-'+widthToTransformLine3+'px, 0px, 0px)', ease: "Power2.easeInOut"}, "-=2")
		 	
		 	.to(
		 		[slides.eq(currentSlide-1).children().eq(0),
		 		slides.eq(currentSlide-1).children().eq(1),
		 		slides.eq(currentSlide-1).children().eq(2)],
		 		 2,
		 		{ opacity:0}
		 	)
			.to([".color--1",".jumbotron"], 2,{ backgroundColor:$colors[currentSlide]});
			
			if (currentSlide>0) {
				tl.to($(".menu__link"), 1, {css:{color:"#CCCBCD"}})
				.to($($menuArray.eq(currentSlide)), 0,{ color:$colors[currentSlide]});

			} else {
				 tl.to($(".menu__link"), 1, {css:{color:"#CCCBCD"}})
			  	 .to($($menuArray.eq(0)), 1, {css:{color:"#381b1a"}});				
			}
			
		 	if (currentSlide < slides.length-1) {
				currentSlide++;
			}
			else {
				currentSlide = 0;		
			}
		 	TweenLite.delayedCall(8, nextSlide);
	}
	TweenLite.delayedCall(2, nextSlide);
			
		/*	$(".menu__link").hover(function(){
				$(this).css("color", "yellow");
			});*/
			$( ".menu__link" )
			  .on( "mouseenter", function() {
				var index =$(".menu__link").index(this);
				$(this).css("color", $colors[index]);
			  })
			  .on( "mouseleave", function() {
				$(this).css("color", "#CCCBCD");
			 });
});
