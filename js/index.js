// JavaScript Document

$(document).ready(function () {
    // setTimeout(function () {
    //         changeLiColor();
    //     }, 1000
    // );

    function changeLiColor() {
        TweenLite.to(".link--2, .link--3, .link--4, .link--5, .link--6, .link--7", 2, {
        	delay:1,
        	color: "#CCCBCD"
        });
    }


    function startAnimation() {
    	changeLiColor();

	    TweenLite.to(".slide__detail__news", 2, {
	    	delay:2,
	        onStart: onStartTween,
	        onStartParams: [".slide__detail__news"],
	        opacity: "1",
	        onComplete: function () {
	        	moveTextNews();
	        }
	    });
    }

    startAnimation();
    

    function moveTextNews() {

        TweenLite.to(".animation__news1", 2, {
            x: "-" + $('#id__heading__news1').width(),
            ease: "Power2.easeInOut"
        });
        TweenLite.to(".animation__news2", 2, {
            x: "-" + $('#id__heading__news2').width(),
            ease: "Power2.easeInOut"
        });
        TweenLite.to(".animation__news3", 2, {
            x: "-" + $('#id__heading__news3').width(),
            ease: "Power2.easeInOut",
            onComplete: changeBGNews2
        });
    }

    // function changeBGNews() {
    //     TweenLite.to(".color--1", 1, {
    //         backgroundColor: "#581F24"
    //     });
    //     TweenLite.to(".jumbotron", 1, {
    //         backgroundColor: "#581F24"
    //     });
    //     TweenLite.to(".slide__heading__news", 2, {
    //         color: "#A97977"
    //     });
    //     TweenLite.to(".link--2", 2, {
    //         color: "#581F24",
    //         onComplete: changeBGNews2
    //     });
    // }

    function changeBGNews2() {
        TweenLite.to(".color--1, .jumbotron", 2, {
            backgroundColor: "#B43934"
        });
        TweenLite.to(".link--2", 2, {
            color: "#B43934",
        });
        TweenLite.to(".slide__heading__news", 2, {
            opacity: "0",
            //onComplete: VideoOneNews
        });
    }

    // function VideoOneNews() {
    //     TweenLite.to(".jumbotron", 0, {
    //         css: {
    //             backgroundImage: "url(img/homepage/home-1.jpg)"
    //         }
    //     });
    //     TweenLite.to(".slide__detail__news", 2, {
    //         delay: 3,
    //         onComplete: VideoTwoNews
    //     });
    // }

    // function VideoTwoNews() {
    //     TweenLite.to(".jumbotron", 0, {
    //         css: {
    //             backgroundImage: "url(img/homepage/home-2.jpg)"
    //         }
    //     });
    //     TweenLite.to(".slide__detail__news", 2, {
    //         delay: 3,
    //         onComplete: VideoThreeNews
    //     });
    // }

    // function VideoThreeNews() {
    //     TweenLite.to(".jumbotron", 0, {
    //         css: {
    //             backgroundImage: "url(img/homepage/home-3.jpg)"
    //         }
    //     });
    //     TweenLite.to(".slide__detail__news", 2, {
    //         delay: 3,
    //         onComplete: changeTextTwoNews
    //     });
    // }

    // function changeTextTwoNews() {
    //     $(".animation__news1").css("transform", "matrix(1, 0, 0, 1, 0, 0");
    //     $(".animation__news2").css("transform", "matrix(1, 0, 0, 1, 0, 0");
    //     $(".animation__news3").css("transform", "matrix(1, 0, 0, 1, 0, 0");
    //     $("#id__heading__news1").css("display", "none");
    //     $("#id__heading__news2").css("display", "none");
    //     $("#id__heading__news3").css("display", "none");
    //     TweenLite.to(".jumbotron", 0, {
    //         onComplete: onCompleteTween,
    //         onCompleteParams: [".jumbotron"]
    //     });
    //     TweenLite.to(".slide__detail__news2", 2, {
    //         onStart: onStartTween,
    //         onStartParams: [".slide__detail__news2"],
    //         opacity: "1",
    //         onComplete: showCaseStudy
    //     });
    // }

    //---------casestudy
    // function showCaseStudy() {
    //     TweenLite.to(".slide__detail__news", 0, {
    //         opacity: "0",
    //         onComplete: onCompleteNone,
    //         onCompleteParams: [".slide__detail__news"]
    //     });
    //     TweenLite.to(".color--1", 0, {
    //         backgroundColor: "#666867"
    //     });
    //     TweenLite.to(".jumbotron", 0, {
    //         backgroundColor: "#666867"
    //     });
    //     TweenLite.to(".slide__heading__casestudy", 2, {
    //         onStart: onStartTween,
    //         onStartParams: [".slide__heading__casestudy"],
    //         opacity: "1"
    //     });
    //     TweenLite.to(".slide__detail__casestudy", 2, {
    //         onStart: onStartTween,
    //         onStartParams: [".slide__detail__casestudy"],
    //         opacity: "1",
    //         onComplete: moveTextCaseStudy
    //     });
    // }

    // function moveTextCaseStudy() {

    //     TweenLite.to(".animation__casestudy1", 2, {
    //         x: "-" + $('#id__heading__casestudy1').width(),
    //         ease: "Power2.easeInOut"
    //     });
    //     TweenLite.to(".animation__casestudy2", 2, {
    //         x: "-" + $('#id__heading__casestudy2').width(),
    //         ease: "Power2.easeInOut"
    //     });
    //     TweenLite.to(".animation__casestudy3", 2, {
    //         x: "-" + $('#id__heading__casestudy3').width(),
    //         ease: "Power2.easeInOut",
    //         onComplete: changeBGCaseStudy
    //     });
    // }

    // function changeBGCaseStudy() {
    //     TweenLite.to(".color--1", 1, {
    //         backgroundColor: "#581F24"
    //     });
    //     TweenLite.to(".jumbotron", 1, {
    //         backgroundColor: "#581F24"
    //     });
    //     TweenLite.to(".slide__heading__casestudy", 2, {
    //         color: "#A97977"
    //     });
    //     TweenLite.to(".link--2", 2, {
    //         color: "#CCCBCD",
    //     });
    //     TweenLite.to(".link--3", 2, {
    //         color: "#92672E",
    //         onComplete: changeBGCaseStudy2
    //     });
    // }

    // function changeBGCaseStudy2() {
    //     TweenLite.to(".color--1", 1, {
    //         backgroundColor: "#B43934"
    //     });
    //     TweenLite.to(".jumbotron", 1, {
    //         backgroundColor: "#B43934"
    //     });
    //     TweenLite.to(".link--3", 2, {
    //         color: "#92672E",
    //     });
    //     TweenLite.to(".slide__heading__casestudy", 2, {
    //         opacity: "0",
    //         onComplete: VideoOneCaseStudy
    //     });
    // }

    // function VideoOneCaseStudy() {
    //     TweenLite.to(".jumbotron", 0, {
    //         css: {
    //             backgroundImage: "url(img/homepage/home-1.jpg)"
    //         }
    //     });
    //     TweenLite.to(".slide__detail__casestudy", 2, {
    //         delay: 3,
    //         onComplete: VideoTwoCaseStudy
    //     });
    // }

    // function VideoTwoCaseStudy() {
    //     TweenLite.to(".jumbotron", 0, {
    //         css: {
    //             backgroundImage: "url(img/homepage/home-2.jpg)"
    //         }
    //     });
    //     TweenLite.to(".slide__detail__casestudy", 2, {
    //         delay: 3,
    //         onComplete: VideoThreeCaseStudy
    //     });
    // }

    // function VideoThreeCaseStudy() {
    //     TweenLite.to(".jumbotron", 0, {
    //         css: {
    //             backgroundImage: "url(img/homepage/home-3.jpg)"
    //         }
    //     });
    //     TweenLite.to(".slide__detail__casestudy", 2, {
    //         delay: 3,
    //         onComplete: changeTextTwoCaseStudy
    //     });
    // }

    // function changeTextTwoCaseStudy() {
    //     $(".animation__casestudy1").css("transform", "matrix(1, 0, 0, 1, 0, 0");
    //     $(".animation__casestudy2").css("transform", "matrix(1, 0, 0, 1, 0, 0");
    //     $(".animation__casestudy3").css("transform", "matrix(1, 0, 0, 1, 0, 0");
    //     $("#id__heading__casestudy1").css("display", "none");
    //     $("#id__heading__casestudy2").css("display", "none");
    //     $("#id__heading__casestudy3").css("display", "none");
    //     TweenLite.to(".jumbotron", 0, {
    //         onComplete: onCompleteTween,
    //         onCompleteParams: [".jumbotron"]
    //     });
    //     TweenLite.to(".slide__detail__casestudy2", 2, {
    //         onStart: onStartTween,
    //         onStartParams: [".slide__detail__casestudy2"],
    //         opacity: "1",
    //         onComplete: showProject
    //     });
    // }

//------------------projects
// 	function showProject(){
// 	TweenLite.to(".slide__detail__casestudy", 0, {
// 	opacity:"0",
// 	onComplete:onCompleteNone,
// 	onCompleteParams:[".slide__detail__casestudy"]
// 	});
// 	TweenLite.to(".color--1", 0, {
// 	backgroundColor:"#666867"
// 	});
// 	TweenLite.to(".jumbotron", 0, {
// 	backgroundColor:"#666867"
// 	});
//     TweenLite.to(".slide__heading__project", 2, {
// 	onStart:onStartTween,
// 	onStartParams:[".slide__heading__project"],
// 	opacity:"1"
// 	});
// 	TweenLite.to(".slide__detail__project", 2, {
// 	onStart:onStartTween,
// 	onStartParams:[".slide__detail__project"],
// 	opacity:"1",
// 	onComplete: moveTextProject
// 	});
// 	}
// 	function moveTextProject(){

// 	TweenLite.to(".animation__project1", 2, {
// 		x:"-" + $('#id__heading__project1').width(),
// 		ease: "Power2.easeInOut"
// 	});
// 	TweenLite.to(".animation__project2", 2, {
// 		x:"-" + $('#id__heading__project2').width(),
// 		ease: "Power2.easeInOut"
// 	});
// 	TweenLite.to(".animation__project3", 2, {
// 		x:"-" + $('#id__heading__project3').width(),
// 		ease: "Power2.easeInOut",
// 		onComplete: changeBGProject
// 	});
// 	}

// 	function changeBGProject(){
// 	TweenLite.to(".color--1", 1, {
// 	backgroundColor:"#581F24"
// 	});
// 	TweenLite.to(".jumbotron", 1, {
// 	backgroundColor:"#581F24"
// 	});
// 	TweenLite.to(".slide__heading__project", 2, {
// 	color:"#A97977"
// 	});
// 	TweenLite.to(".link--3", 2, {
// 	color:"#CCCBCD",
// 	});
// 	TweenLite.to(".link--4", 2, {
// 	color:"#92672E",
// 	onComplete: changeBGProject2
// 	});
// 	}

// 	function changeBGProject2(){
// 	TweenLite.to(".color--1", 1, {
// 	backgroundColor:"#B43934"
// 	});
// 	TweenLite.to(".jumbotron", 1, {
// 	backgroundColor:"#B43934"
// 	});
// 	TweenLite.to(".link--3", 2, {
// 	color:"#92672E",
// 	});
// 	TweenLite.to(".slide__heading__project", 2, {
// 	opacity: "0",
// 	onComplete: VideoOneProject
// 	});
// 	}

// 	function VideoOneProject(){
// 	TweenLite.to(".jumbotron", 0, {
// 	css:{backgroundImage:"url(img/homepage/home-1.jpg)"
//     }
// 	});
// 	TweenLite.to(".slide__detail__project", 2, {
// 	delay:3,
// 	onComplete: VideoTwoProject
// 	});
// 	}

// 	function VideoTwoProject(){
// 	TweenLite.to(".jumbotron", 0, {
// 	css:{backgroundImage:"url(img/homepage/home-2.jpg)"
//     }
// 	});
// 	TweenLite.to(".slide__detail__project", 2, {
// 	delay:3,
// 	onComplete: VideoThreeProject
// 	});
// 	}

// 	function VideoThreeProject(){
// 	TweenLite.to(".jumbotron", 0, {
// 	css:{backgroundImage:"url(img/homepage/home-3.jpg)"
//     }
// 	});
// 	TweenLite.to(".slide__detail__project", 2, {
// 	delay:3,
// 	onComplete: changeTextTwoProject
// 	});
// 	}

// 	function changeTextTwoProject(){
// 	$(".animation__project1").css("transform", "matrix(1, 0, 0, 1, 0, 0");
// 	$(".animation__project2").css("transform", "matrix(1, 0, 0, 1, 0, 0");
// 	$(".animation__project3").css("transform", "matrix(1, 0, 0, 1, 0, 0");
// 	$("#id__heading__project1").css("display","none");
// 	$("#id__heading__project2").css("display","none");
// 	$("#id__heading__project3").css("display","none");
// 	TweenLite.to(".jumbotron", 0, {
// 	onComplete:onCompleteTween,
// 	onCompleteParams:[".jumbotron"]
// 	});
// 	TweenLite.to(".slide__detail__project2", 2, {
// 	onStart:onStartTween,
// 	onStartParams:[".slide__detail__project2"],
// 	opacity:"1",
// 	onComplete: showPractice
// 	});
// 	}
// //------------------practice
// 	function showPractice(){
// 	TweenLite.to(".slide__detail__project", 0, {
// 	opacity:"0",
// 	onComplete:onCompleteNone,
// 	onCompleteParams:[".slide__detail__project"]
// 	});
// 	TweenLite.to(".color--1", 0, {
// 	backgroundColor:"#666867"
// 	});
// 	TweenLite.to(".jumbotron", 0, {
// 	backgroundColor:"#666867"
// 	});
//     TweenLite.to(".slide__heading__practice", 2, {
// 	onStart:onStartTween,
// 	onStartParams:[".slide__heading__practice"],
// 	opacity:"1"
// 	});
// 	TweenLite.to(".slide__detail__practice", 2, {
// 	onStart:onStartTween,
// 	onStartParams:[".slide__detail__practice"],
// 	opacity:"1",
// 	onComplete: moveTextPractice
// 	});
// 	}

// 	function moveTextPractice(){

// 	TweenLite.to(".animation__practice1", 2, {
// 		x:"-" + $('#id__heading__practice1').width(),
// 		ease: "Power2.easeInOut"
// 	});
// 	TweenLite.to(".animation__practice2", 2, {
// 		x:"-" + $('#id__heading__practice2').width(),
// 		ease: "Power2.easeInOut"
// 	});
// 	TweenLite.to(".animation__practice3", 2, {
// 		x:"-" + $('#id__heading__practice3').width(),
// 		ease: "Power2.easeInOut",
// 		onComplete: changeBGPractice
// 	});
// 	}

// 	function changeBGPractice(){
// 	TweenLite.to(".color--1", 1, {
// 	backgroundColor:"#581F24"
// 	});
// 	TweenLite.to(".jumbotron", 1, {
// 	backgroundColor:"#581F24"
// 	});
// 	TweenLite.to(".slide__heading__practice", 2, {
// 	color:"#A97977"
// 	});
// 	TweenLite.to(".link--4", 2, {
// 	color:"#CCCBCD",
// 	});
// 	TweenLite.to(".link--5", 2, {
// 	color:"#92672E",
// 	onComplete: changeBGPractice2
// 	});
// 	}

// 	function changeBGPractice2(){
// 	TweenLite.to(".color--1", 1, {
// 	backgroundColor:"#B43934"
// 	});
// 	TweenLite.to(".jumbotron", 1, {
// 	backgroundColor:"#B43934"
// 	});
// 	TweenLite.to(".link--3", 2, {
// 	color:"#92672E",
// 	});
// 	TweenLite.to(".slide__heading__practice", 2, {
// 	opacity: "0",
// 	onComplete: VideoOnePractice
// 	});
// 	}

// 	function VideoOnePractice(){
// 	TweenLite.to(".jumbotron", 0, {
// 	css:{backgroundImage:"url(img/homepage/home-1.jpg)"
//     }
// 	});
// 	TweenLite.to(".slide__detail__practice", 2, {
// 	delay:3,
// 	onComplete: VideoTwoPractice
// 	});
// 	}

// 	function VideoTwoPractice(){
// 	TweenLite.to(".jumbotron", 0, {
// 	css:{backgroundImage:"url(img/homepage/home-2.jpg)"
//     }
// 	});
// 	TweenLite.to(".slide__detail__practice", 2, {
// 	delay:3,
// 	onComplete: VideoThreePractice
// 	});
// 	}

// 	function VideoThreePractice(){
// 	TweenLite.to(".jumbotron", 0, {
// 	css:{backgroundImage:"url(img/homepage/home-3.jpg)"
//     }
// 	});
// 	TweenLite.to(".slide__detail__practice", 2, {
// 	delay:3,
// 	onComplete: changeTextTwoPractice
// 	});
// 	}

// 	function changeTextTwoPractice(){
// 	$(".animation__practice1").css("transform", "matrix(1, 0, 0, 1, 0, 0");
// 	$(".animation__practice2").css("transform", "matrix(1, 0, 0, 1, 0, 0");
// 	$(".animation__practice3").css("transform", "matrix(1, 0, 0, 1, 0, 0");
// 	$("#id__heading__practice1").css("display","none");
// 	$("#id__heading__practice2").css("display","none");
// 	$("#id__heading__practice3").css("display","none");
// 	TweenLite.to(".jumbotron", 0, {
// 	onComplete:onCompleteTween,
// 	onCompleteParams:[".jumbotron"]
// 	});
// 	TweenLite.to(".slide__detail__practice2", 2, {
// 	onStart:onStartTween,
// 	onStartParams:[".slide__detail__practice2"],
// 	opacity:"1",
// 	onComplete: showPeople
// 	});
// 	}

// //------------------people
// 	function showPeople(){
// 	TweenLite.to(".slide__detail__practice", 0, {
// 	opacity:"0",
// 	onComplete:onCompleteNone,
// 	onCompleteParams:[".slide__detail__practice"]
// 	});
// 	TweenLite.to(".color--1", 0, {
// 	backgroundColor:"#666867"
// 	});
// 	TweenLite.to(".jumbotron", 0, {
// 	backgroundColor:"#666867"
// 	});
//     TweenLite.to(".slide__heading__people", 2, {
// 	onStart:onStartTween,
// 	onStartParams:[".slide__heading__people"],
// 	opacity:"1"
// 	});
// 	TweenLite.to(".slide__detail__people", 2, {
// 	onStart:onStartTween,
// 	onStartParams:[".slide__detail__people"],
// 	opacity:"1",
// 	onComplete: moveTextPeople
// 	});
// 	}

// 	function moveTextPeople(){

// 	TweenLite.to(".animation__people1", 2, {
// 		x:"-" + $('#id__heading__people1').width(),
// 		ease: "Power2.easeInOut"
// 	});
// 	TweenLite.to(".animation__people2", 2, {
// 		x:"-" + $('#id__heading__people2').width(),
// 		ease: "Power2.easeInOut"
// 	});
// 	TweenLite.to(".animation__people3", 2, {
// 		x:"-" + $('#id__heading__people3').width(),
// 		ease: "Power2.easeInOut",
// 		onComplete: changeBGPeople
// 	});
// 	}

// 	function changeBGPeople(){
// 	TweenLite.to(".color--1", 1, {
// 	backgroundColor:"#581F24"
// 	});
// 	TweenLite.to(".jumbotron", 1, {
// 	backgroundColor:"#581F24"
// 	});
// 	TweenLite.to(".slide__heading__people", 2, {
// 	color:"#A97977"
// 	});
// 	TweenLite.to(".link--5", 2, {
// 	color:"#CCCBCD",
// 	});
// 	TweenLite.to(".link--6", 2, {
// 	color:"#92672E",
// 	onComplete: changeBGPeople2
// 	});
// 	}

// 	function changeBGPeople2(){
// 	TweenLite.to(".color--1", 1, {
// 	backgroundColor:"#B43934"
// 	});
// 	TweenLite.to(".jumbotron", 1, {
// 	backgroundColor:"#B43934"
// 	});
// 	TweenLite.to(".link--3", 2, {
// 	color:"#92672E",
// 	});
// 	TweenLite.to(".slide__heading__people", 2, {
// 	opacity: "0",
// 	onComplete: VideoOnePeople
// 	});
// 	}

// 	function VideoOnePeople(){
// 	TweenLite.to(".jumbotron", 0, {
// 	css:{backgroundImage:"url(img/homepage/home-1.jpg)"
//     }
// 	});
// 	TweenLite.to(".slide__detail__people", 2, {
// 	delay:3,
// 	onComplete: VideoTwoPeople
// 	});
// 	}

// 	function VideoTwoPeople(){
// 	TweenLite.to(".jumbotron", 0, {
// 	css:{backgroundImage:"url(img/homepage/home-2.jpg)"
//     }
// 	});
// 	TweenLite.to(".slide__detail__people", 2, {
// 	delay:3,
// 	onComplete: VideoThreePeople
// 	});
// 	}

// 	function VideoThreePeople(){
// 	TweenLite.to(".jumbotron", 0, {
// 	css:{backgroundImage:"url(img/homepage/home-3.jpg)"
//     }
// 	});
// 	TweenLite.to(".slide__detail__people", 2, {
// 	delay:3,
// 	onComplete: changeTextTwoPeople
// 	});
// 	}

// 	function changeTextTwoPeople(){
// 	$(".animation__people1").css("transform", "matrix(1, 0, 0, 1, 0, 0");
// 	$(".animation__people2").css("transform", "matrix(1, 0, 0, 1, 0, 0");
// 	$(".animation__people3").css("transform", "matrix(1, 0, 0, 1, 0, 0");
// 	$("#id__heading__people1").css("display","none");
// 	$("#id__heading__people2").css("display","none");
// 	$("#id__heading__people3").css("display","none");
// 	TweenLite.to(".jumbotron", 0, {
// 	onComplete:onCompleteTween,
// 	onCompleteParams:[".jumbotron"]
// 	});
// 	TweenLite.to(".slide__detail__people2", 2, {
// 	onStart:onStartTween,
// 	onStartParams:[".slide__detail__people2"],
// 	opacity:"1",
// 	onComplete: showContact
// 	});
// 	}

// //------------------contact
// 	function showContact(){
// 	TweenLite.to(".slide__detail__project", 0, {
// 	opacity:"0",
// 	onComplete:onCompleteNone,
// 	onCompleteParams:[".slide__detail__project"]
// 	});
// 	TweenLite.to(".color--1", 0, {
// 	backgroundColor:"#666867"
// 	});
// 	TweenLite.to(".jumbotron", 0, {
// 	backgroundColor:"#666867"
// 	});
//     TweenLite.to(".slide__heading__contact", 2, {
// 	onStart:onStartTween,
// 	onStartParams:[".slide__heading__contact"],
// 	opacity:"1"
// 	});
// 	TweenLite.to(".slide__detail__contact", 2, {
// 	onStart:onStartTween,
// 	onStartParams:[".slide__detail__contact"],
// 	opacity:"1",
// 	onComplete: moveTextContact
// 	});
// 	}

// 	function moveTextContact(){

// 	TweenLite.to(".animation__contact1", 2, {
// 		x:"-" + $('#id__heading__contact1').width(),
// 		ease: "Power2.easeInOut"
// 	});
// 	TweenLite.to(".animation__contact2", 2, {
// 		x:"-" + $('#id__heading__contact2').width(),
// 		ease: "Power2.easeInOut"
// 	});
// 	TweenLite.to(".animation__contact3", 2, {
// 		x:"-" + $('#id__heading__contact3').width(),
// 		ease: "Power2.easeInOut",
// 		onComplete: changeBGContact
// 	});
// 	}

// 	function changeBGContact(){
// 	TweenLite.to(".color--1", 1, {
// 	backgroundColor:"#581F24"
// 	});
// 	TweenLite.to(".jumbotron", 1, {
// 	backgroundColor:"#581F24"
// 	});
// 	TweenLite.to(".slide__heading__contact", 2, {
// 	color:"#A97977"
// 	});
// 	TweenLite.to(".link--6", 2, {
// 	color:"#CCCBCD",
// 	});
// 	TweenLite.to(".link--7", 2, {
// 	color:"#92672E",
// 	onComplete: changeBGContact2
// 	});
// 	}

// 	function changeBGContact2(){
// 	TweenLite.to(".color--1", 1, {
// 	backgroundColor:"#B43934"
// 	});
// 	TweenLite.to(".jumbotron", 1, {
// 	backgroundColor:"#B43934"
// 	});
// 	TweenLite.to(".link--3", 2, {
// 	color:"#92672E",
// 	});
// 	TweenLite.to(".slide__heading__contact", 2, {
// 	opacity: "0",
// 	onComplete: VideoOneContact
// 	});
// 	}

// 	function VideoOneContact(){
// 	TweenLite.to(".jumbotron", 0, {
// 	css:{backgroundImage:"url(img/homepage/home-1.jpg)"
//     }
// 	});
// 	TweenLite.to(".slide__detail__contact", 2, {
// 	delay:3,
// 	onComplete: VideoTwoContact
// 	});
// 	}

// 	function VideoTwoContact(){
// 	TweenLite.to(".jumbotron", 0, {
// 	css:{backgroundImage:"url(img/homepage/home-2.jpg)"
//     }
// 	});
// 	TweenLite.to(".slide__detail__contact", 2, {
// 	delay:3,
// 	onComplete: VideoThreeContact
// 	});
// 	}

// 	function VideoThreeContact(){
// 	TweenLite.to(".jumbotron", 0, {
// 	css:{backgroundImage:"url(img/homepage/home-3.jpg)"
//     }
// 	});
// 	TweenLite.to(".slide__detail__contact", 2, {
// 	delay:3,
// 	onComplete: changeTextTwoContact
// 	});
// 	}

// 	function changeTextTwoContact(){
// 	$(".animation__contact1").css("transform", "matrix(1, 0, 0, 1, 0, 0");
// 	$(".animation__contact2").css("transform", "matrix(1, 0, 0, 1, 0, 0");
// 	$(".animation__contact3").css("transform", "matrix(1, 0, 0, 1, 0, 0");
// 	$("#id__heading__contact1").css("display","none");
// 	$("#id__heading__contact2").css("display","none");
// 	$("#id__heading__contact3").css("display","none");
// 	TweenLite.to(".jumbotron", 0, {
// 	onComplete:onCompleteTween,
// 	onCompleteParams:[".jumbotron"]
// 	});
// 	TweenLite.to(".slide__detail__contact2", 2, {
// 	onStart:onStartTween,
// 	onStartParams:[".slide__detail__contact2"],
// 	opacity:"1"
// 	});
// 	}

});
//----------------------
    function onStartTween(mc) {
        $(mc).css('display', 'block');
    }

//----------------------
    function onCompleteTween(bg) {
        $(bg).css('background-image', 'url("")');
    }

//----------------------
    function onCompleteNone(dn) {
        $(dn).css('display', 'none');
    }