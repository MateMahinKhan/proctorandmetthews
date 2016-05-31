// JavaScript Document
var slides = $(".slide");
var jumbotron_img = $(".jumbotron__img");
var $colors  = ['#424242','#962524','#926834','#1f3957','#cd7e00','#0e391d','#381b1a'];
function createMenu(){
	
	for(var i=1; i<slides.length; i++){
	var navLinkText = $(".slide").eq(i).attr('data-navLinks');
	
	$("#menu").append('<li class="menu__item col--1">'+
	'<a href="#" class="box menu__link link--'+(i+1)+'">'+navLinkText+'</a>'+
	'</li>');
	}
}
createMenu();
$( document ).ready(function() {
	
	var currentSlide = 1;
	var spaceDifference = 8;
	
	var $menuArray = $(".menu__link");
	$(".menu__link").css("color","#CCCBCD");
	$($menuArray.eq(currentSlide-1)).css("color",$(".slide").eq(currentSlide-1).attr('data-bgcolor'));

	function nextSlide() {
		
		var image = false;
		if ($(".slide").eq(currentSlide).attr('data-img')) {
		    newMedia = $(".slide").eq(currentSlide).attr('data-img');
		    image = true;
		}else if($(".slide").eq(currentSlide).attr('data-video')){
			newMedia = $(".slide").eq(currentSlide).attr('data-video');
		}
		var tl = new TimelineMax(
			{
				delay:2,
				onStart:changemedia,
				onStartParams:[newMedia,image]
			});//onUpdate:updateStats, onRepeat:updateReps, onComplete:restart

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
			
			.to([".color--1",".jumbotron"], 2,{ backgroundColor:$(".slide").eq(currentSlide).attr('data-bgcolor')},"-=2")
			.to($(".menu__link"), 2, {css:{color:"#CCCBCD"}},"-=2")
			.to($($menuArray.eq(currentSlide)), 2,{ color:$(".slide").eq(currentSlide).attr('data-bgcolor')},"-=2")
			.addLabel("labelmedia");
			

				if ($(".slide").eq(currentSlide).attr('data-img')) {
				    
				    tl.to($('.jumbotron__img'),2,
						{
							opacity:1
						},
						"labelmedia-=2"
					)
					.addSpace("+=9")
					.to($('.jumbotron__img'),2,
						{
							opacity:0
						}
					)


				} else if ($(".slide").eq(currentSlide).attr('data-video')) {
				  //   newMedia = $(".slide").eq(currentSlide).attr('data-video'); // get ID video


				  //   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //if mobile get new attr placehold img

				  //       newMedia = $slideActive.next().attr('data-video-thumb');
				  //       tl.to($('.jumbotron__img'),2,
						// 	{
						// 		opacity:1,
						// 		onStart:changemedia,
						// 		onStartParams:[newMedia]
						// 	},
						// 	"labelmedia-=2"
						// );
				        

				  //   } else {

				  //   	'<div class="jumbotron__video bg__video is--hide wistia_embed wistia_async_uwx6afxdle videoFoam=true" id="uwx6afxdle">&nbsp;</div>'

				  //       // console.log(newMedia);
				  //       // var $videoContainer = $('#' + newMedia);

				  //       // $videoContainer.addClass('video--is-active');

				  //       // var video = Wistia.api(newMedia);
				  //       // console.log("I got a handle to the video!", video);

				  //       // video.bind("end", function() {

				  //       //     $('.slideTexting').slideTexting({
				  //       //         showSlide: 0 // start when wideo end
				  //       //     });
				  //       //     $videoContainer.removeClass('video--is-active');

				  //       // });

				  //       // video.play();
				  //   }
				}
				
			//.call(changemedia,[$(".slide").eq(currentSlide).attr('data-img')])
			//.to([".jumbotron"],1,{alpha:0})
			//.to([".jumbotron"],2,{alpha:1});
			//.call(addClass, "+=2");
			//.call(changemedia,[$(".slide").eq(currentSlide).attr('data-img')]);
			
		 	if (currentSlide < slides.length-1) {
				currentSlide++;
			}
			else {
				currentSlide = 0;		
			}
		 	TweenLite.delayedCall(18, nextSlide);
	}
	TweenLite.delayedCall(2, nextSlide);
			
			$( ".menu__link" )
			  .on( "mouseenter", function() {
				var index =$(".menu__link").index(this);
				$(this).css("color", $colors[index]);
			  })
			  .on( "mouseleave", function() {
				$(this).css("color", "#CCCBCD");
			 });
});

function changemedia(newsrc, image){
	if(image){
		$(".jumbotron__img").attr('src',newsrc);
	}else{
		console.log('its a video');
		$('.jumbotron__media')[0].innerHTML = '<div class="jumbotron__video bg__video wistia_embed '+
		'wistia_async_'+newsrc+' videoFoam=true"'+
		' id="'+newsrc+'">&nbsp;</div>';

		window._wq = window._wq || [];
		_wq.push({ ""+newsrc: function(video) {
		  console.log("I got a handle to the video!", video);
		}});
	}
	
	//removeClass();
}
function removeClass(){
	$('.jumbotron__media').removeClass('is--hide');
}
function addClass(){
	$('.jumbotron__media').addClass('is--hide');
}
TimelineLite.prototype.addSpace = function (position) {
  return this.set({}, {}, position);
};