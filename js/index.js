// JavaScript Document
var widthMoved =0;
var navColors = ['#424242','#B43934','#666867','#1f3957',]
$( document ).ready(function() {
	
	// //instantiate a TimelineLite    
	// var tl = new TimelineLite();

	// //add a from() tween at the beginning of the timline
	// tl.from(head, 0.5, {left:100, opacity:0});

	// //add another tween immediately after
	// tl.from(subhead, 0.5, {left:-100, opacity:0});

	// //use position parameter "+=0.5" to schedule next tween 0.5 seconds after previous tweens end
	// tl.from(feature, 0.5, {scale:.5, autoAlpha:0}, "+=0.5");
	


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
		 	).to([".color--1",".jumbotron"], 2, {
				backgroundColor:"#B43934"
			}, "-=2");
		 	

			
			if (currentSlide>0) {
				$(".menu__link").css("color","#CCCBCD");
				$($menuArray.eq(currentSlide-1)).css("color",$colors[currentSlide-1]);

			} else {
				$(".menu__link").css("color","#CCCBCD");
				$($menuArray.eq(currentSlide)).css("color",$colors[currentSlide]);				
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
	 //.to;
	   // .set($panel2, {top:0}, "+=2")
	   // .from($panel2, 0.2, {autoAlpha:0, scale:1.5})
	   // .from($panel2Text, 0.2, {top:250}, "+=0.5")
	   // .to($panel2Text, 0.2, {top:250}, "+=2")
	   // .set($panel3, {top:0}, "final")
	   // .from($info, 0.5, {top:250}, "final")
	   // .to($panel2, 0.5, {top:-60}, "final")
	   // .staggerFrom($list, 0.3, {autoAlpha:0, left:50}, 0.1, "+=0.2")
	   // .from($orderNow, 0.5, {scale:0, autoAlpha:0, ease:Back.easeOut});


	//----------news
	// TweenLite.to(".slide__heading__news", 2, {
	// 	onStart:onStartTween,
	// 	onStartParams:[".slide__heading__news"]
	// });
	
	// var $sub_slides = $(".sub_slide");
	// var currentSlide = 0;
	
	// showNextItem(currentSlide);
	
	// function showNextItem(currentSlide){
	// 	TweenLite.to($sub_slides.eq(currentSlide), 2, {
	// 	onStart:onStartTween,
	// 	onStartParams:[$sub_slides.eq(currentSlide)],
	// 	opacity:"1",
	// 	onComplete: moveTextNews,
	// 	onCompleteParams:[$sub_slides.eq(currentSlide)]
	// 	});
	// }
	
 //    function changeLiColor() {
 //        TweenLite.to(".link--2, .link--3, .link--4, .link--5, .link--6, .link--7", 2, {
 //        	delay:1,
 //        	color: "#CCCBCD"
 //        });
 //    }
	
	// function moveTextNews(slide){
	// 	widthMoved = widthMoved + slide.prev().width();
	// 	TweenLite.to(".slide__header", 2, {
	// 		x:"-" + widthMoved,
	// 		ease: "Power2.easeInOut",
	// 		onComplete: changeBGNews2,
	// 		onCompleteParams:[slide]
	// 	});
	
	// }
	
	// function changeBGNews2(slide){
	// TweenLite.to(".color--1", 1, {
	// backgroundColor:"#B43934"
	// });
	// TweenLite.to(".jumbotron", 1, {
	// backgroundColor:"#B43934"
	// });
	// TweenLite.to(".link--2", 2, {
	// color:"#B43934",
	// });
	// TweenLite.to(slide.prev(), 2, {
	// opacity: "0",
	// onComplete: changeTextTwoNews
	// });
	// }
	
 //  function changeTextTwoNews(){
	// //$(".width").css("display","none");
	// //$(".slide__header").css("transform", "matrix(1, 0, 0, 1, 0, 0)");
	// //$(".slide__header").css("left", $(".width").width());
	
	
	// $(".width").removeClass("to_move width");
	// $(".to_move").addClass("width");
	// $(".width").removeClass("to_show");
	
	// currentSlide++;
	
	// $($sub_slides.eq(currentSlide)).addClass("to_show to_move");
	
	// showNextItem(currentSlide);
	// }
});
//----------------------
function onStartTween(mc) {
	$(mc).css('display', 'block');
}
//----------------------
function onCompleteTween(bg){
	$(bg).css('background-image', 'url("")');
}
//----------------------
function onCompleteNone(dn){
	$(dn).css('display','none');
}