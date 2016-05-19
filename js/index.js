// JavaScript Document
var widthMoved =0;
var navColors = ['#424242','#B43934','#666867','#1f3957',]
$( document ).ready(function() {
	setTimeout(function(){
	changeLiColor();
	},1000
	);
	
	//----------news
	TweenLite.to(".slide__heading__news", 2, {
	onStart:onStartTween,
	onStartParams:[".slide__heading__news"]
	});
	
	var $sub_slides = $(".sub_slide");
	var currentSlide = 0;
	
	showNextItem(currentSlide);
	
	function showNextItem(currentSlide){
		TweenLite.to($sub_slides.eq(currentSlide), 2, {
		onStart:onStartTween,
		onStartParams:[$sub_slides.eq(currentSlide)],
		opacity:"1",
		onComplete: moveTextNews,
		onCompleteParams:[$sub_slides.eq(currentSlide)]
		});
	}
	
    function changeLiColor() {
        TweenLite.to(".link--2, .link--3, .link--4, .link--5, .link--6, .link--7", 2, {
        	delay:1,
        	color: "#CCCBCD"
        });
    }
	
	function moveTextNews(slide){
		widthMoved = widthMoved + slide.prev().width();
		TweenLite.to(".slide__header", 2, {
			x:"-" + widthMoved,
			ease: "Power2.easeInOut",
			onComplete: changeBGNews2,
			onCompleteParams:[slide]
		});
	
	}
	
	function changeBGNews2(slide){
	TweenLite.to(".color--1", 1, {
	backgroundColor:"#B43934"
	});
	TweenLite.to(".jumbotron", 1, {
	backgroundColor:"#B43934"
	});
	TweenLite.to(".link--2", 2, {
	color:"#B43934",
	});
	TweenLite.to(slide.prev(), 2, {
	opacity: "0",
	onComplete: changeTextTwoNews
	});
	}
	
  function changeTextTwoNews(){
	//$(".width").css("display","none");
	//$(".slide__header").css("transform", "matrix(1, 0, 0, 1, 0, 0)");
	//$(".slide__header").css("left", $(".width").width());
	
	
	$(".width").removeClass("to_move width");
	$(".to_move").addClass("width");
	$(".width").removeClass("to_show");
	
	currentSlide++;
	
	$($sub_slides.eq(currentSlide)).addClass("to_show to_move");
	
	showNextItem(currentSlide);
	}
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