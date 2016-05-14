// JavaScript Document

$( document ).ready(function() {
	setTimeout(function(){
	changeColor();
	},1000
	);
	
    TweenLite.to(".slide__text_detail", 2, {
	onStart:onStartTween,
	onStartParams:[".slide__text_detail"],
	opacity:"1",
	textalign:"right",
	onComplete: moveText
	});
	
	function changeColor(){
	TweenLite.to(".link--2", 2, {color:"#CCCBCD"});
	TweenLite.to(".link--3", 2, {color:"#CCCBCD"});
	TweenLite.to(".link--4", 2, {color:"#CCCBCD"});
	TweenLite.to(".link--5", 2, {color:"#CCCBCD"});
	TweenLite.to(".link--6", 2, {color:"#CCCBCD"});
	TweenLite.to(".link--7", 2, {color:"#CCCBCD"});
	}
	
	function moveText(){
	TweenLite.to(".slide__text__heading", 2, {
	x:"-317px",
	textAlign:"right",
	width:"36%",
	ease: "Power2.easeInOut"
	});
	TweenLite.to(".slide__text_detail", 2, {
	x:"-317px",
	textAlign:"left",
	ease: "Power2.easeInOut",
	onComplete: changeBG
	});
	}
	
	function changeBG(){
	TweenLite.to(".color--1", 1, {
	backgroundColor:"#581F24"
	});
	TweenLite.to(".jumbotron", 1, {
	backgroundColor:"#581F24"
	});
	TweenLite.to(".slide__text__heading", 2, {
	color:"#A97977"
	});
	TweenLite.to(".link--2", 2, {
	color:"#581F24",
	onComplete: changeBG_two
	});
	}
	
	function changeBG_two(){
	TweenLite.to(".color--1", 1, {
	backgroundColor:"#B43934"
	});
	TweenLite.to(".jumbotron", 1, {
	backgroundColor:"#B43934"
	});
	TweenLite.to(".link--2", 2, {
	color:"#B43934",
	});
	TweenLite.to(".slide__text__heading", 2, {
	opacity: "0",
	display: "none",
	onComplete: changeBG_three
	});
	}
	
	function changeBG_three(){
	TweenLite.to(".jumbotron", 1, {
	css:{backgroundImage:"url(img/homepage/home-1.jpg)"
	},
	onComplete: changeBG_four
	});
	}
	
	function changeBG_four(){
	/*TweenLite.to(".slide__text__detail2", 2, {
	onStart:onStartTween,
	onStartParams:[".slide__text__detail2"],
	opacity:"1",
	textalign:"left",
	});
	*/
	}
	
});
//----------------------
function onStartTween(mc) {
	$(mc).css('display', 'block');
}