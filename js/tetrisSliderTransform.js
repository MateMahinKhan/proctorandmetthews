/////////////////////////////////////////////////////
// TetrisSLider slideshow
/////////////////////////////////////////////////////

var $window = $(window),
    $home = $('.home'),
    $header = $('.header');

(function($) {
    $.fn.slideTexting = function(options) {
        return this.each(function() {

            //Plugin settings
            var settings = $.extend({
                wrapper: '.wrapper',
                container: '.slides',
                slide: '.slide',
                slideText: '.slide__text',
                isActive: 'slide--is-active',
                isShowing: 'slide--showing',
                jumbotronMedia: '.jumbotron__media',
                overlay: '.jumbotron__media--showing',
                changeBgColor: true,
                changeMedia: true,
                selMenuColor: '.menu__link',
                menuPrefix: 'link--',
                selBgColor: 'html',
                bgPrefix: 'color--',
                speed: 1200,
                timer: true,
                showSlideT: 6000,
                fadeTime: 1550,
                translateSlide: 2000,
                nextMediaTime: 3000
            }, options);

            //check if transform is supported, thx @nicrizzo
            var transforms = ['webkitTransform', 'MozTransform', 'OTransform'],
                transform = '';
            for (var i = 0, l = transforms.length; i < l; i++) {
                (transforms[i] in document.body.style) && (transform = transforms[i]);
            }
            transform = transform || 'transform';

            //DOM cache
            /////////////////////////////////////////////////
            var $slideContainer = $(settings.container),
                $slideActive = $('.' + settings.isActive);

            //Configuration
            /////////////////////////////////////////////////
            var containerWidth = 0, //set total width of container/slides
                wrapperW = Math.ceil($(settings.wrapper).outerWidth()), //get width of the wrapper
                nSlides = $(settings.slide).length, // get how many slide have
                textsW = $(settings.slideText).each(function() { //get all width for each text
                    var w = Math.ceil($(this).outerWidth());
                    $(this).attr('data-textwidth', w); //set attr data-textwidth to the element text
                }),
                textWSmallest = 0,
                slidesW = $(settings.slide).each(function() {
                    var w = Math.ceil($(this).outerWidth());
                    containerWidth += parseInt($(this).outerWidth(), 10); //calculate the width of container
                    $(this).attr('data-slidewidth', w); //set attr data-textwidth to the element text
                }),
                speed2 = Math.floor(settings.speed / 2),
                TextSmaller = null,
                currentSlide = 1, // current Slide
                currentBgColor = 0, // current background color
                oldBgColor = 1, // active background color
                classNameBgColor = [], // array of class in the elBg
                videoClass = 'jumbotron__video bg__video wistia_embed  videoFoam=true',
                hasCSS3 = Modernizr.csstransforms && Modernizr.cssanimations; // get all classes of video cotnainer





            //#0 START
            //////////////////////////////////////////////////////////////////////////////

            if (!hasCSS3) {
                $(settings.container).css('min-width', containerWidth + 100); //set the width of container based on the slide elements
            }


            //#1 Next slide coming
            //////////////////////////////////////////////////////////////////////////////
            var showSlide = function(callback) {
                //console.log('#1');
                var $slideActive = $('.' + settings.isActive),
                    slideActiveW = Math.ceil($slideActive.outerWidth());


                if (hasCSS3) {
                    $(settings.jumbotronMedia).addClass('is--hide'); //hide media content
                } else {
                    $(settings.jumbotronMedia).animate({
                        'opacity': 0
                    });
                }
                callback();
            };

            //#2 Next slide coming (text tetris)
            //////////////////////////////////////////////////////////////////////////////
            var animationTextTetris = function() {
                //console.log('#2');
                var $slideActive = $('.' + settings.isActive),
                    $slideActiveNext = $($slideActive.next()),
                    activeSlideW = Math.ceil($slideActive.width()),
                    nText = $slideActiveNext.find(settings.slideText).length;


                if (hasCSS3) {
                    for (var p = 0; p < nText; p++) {
                        var pix = ($slideActive.find('.slide__text__' + p).attr('data-textwidth'));
                        $slideActiveNext.find('.slide__text__' + p)[0].style[transform] = 'translateX(' + pix + 'px)';
                        console.log('pix ' + pix);
                        // $this.find('.slide__text__' + p).css({
                        //     '-webkit-transform': 'translateX(' + pix + 'px)',
                        //     '-moz-transform': 'translateX(' + pix + 'px)',
                        //     '-ms-transform': 'translateX(' + pix + 'px)',
                        //     '-o-transform': 'translateX(' + pix + 'px)',
                        //     'transform': 'translateX(' + pix + 'px)',
                        // });
                    }
                } else {
                    //NO css3
                    $slideActiveNext.animate({
                        'opacity': 1
                    }, settings.fadeTime);

                    for (var n = 0; n < nText; n++) {

                        var val2 = (activeSlideW - $slideActive.find('.slide__text__' + n).attr('data-textwidth'));
                        $slideActiveNext.find('.slide__text__' + n).css({
                            'margin-left': val2
                        });

                    }
                }


                //set current slide number,
                if (currentSlide < nSlides) {
                    currentSlide++; //set counter of currentSlide
                } else {
                    currentSlide = 0; //reset the counter of currentSlide
                    resetSlides();
                }
                $slideActiveNext.addClass(settings.isShowing);

                //TODO: add class after transition has done

            };







            //#3 slideActive go out, next slide take position as slideActive
            //////////////////////////////////////////////////////////////////////////////
            var animationSlideActive = function() {
                //console.log('#3');

                var $slideActive = $('.' + settings.isActive),
                    slideActiveW = Math.ceil($slideActive.width()),
                    slideActiveOutW = Math.ceil($slideActive.outerWidth()),
                    nText = $slideActive.find(settings.slideText).length;

                //#A Hide prev active slide before it translate to left
                //#B slide active
                if (hasCSS3) {
                    //move slide out the content part
                    $slideActive[0].style[transform] = 'translateX(' + (-1 * slideActiveOutW) + 'px)';

                    for (var aT = 0; aT < nText; aT++) {
                        //align slide out the content part to right
                        var $sel = $slideActive.find('.slide__text__' + aT),
                            selWidth = $sel.attr('data-textwidth'),
                            $selNext = $slideActive.next();
                        console.log(' slideActiveOutW selWidth' + selWidth);
                        $sel[0].style[transform] = 'translateX(' + (slideActiveOutW - selWidth) + 'px)';
                        $selNext.addClass(settings.isActive).find('.slide__text__' + aT)[0].style[transform] = 'translateX(' + 0 + 'px)';
                    }
                } else {
                    $slideActive.prev().animate({
                        'opacity': 0
                    }, settings.fadeTime);

                    $slideActive.animate({
                        'margin-left': -1 * slideActiveOutW,
                        'opacity': 0
                    }, settings.fadeTime);
                    //Align Right Active Slide
                    for (var pi = 0; pi < nText; pi++) {
                        $slideActive.find('.slide__text__' + pi).animate({
                            'margin-left': (slideActiveW - $slideActive.find('.slide__text__' + pi).attr('data-textwidth'))
                        }, speed2);
                    }
                }
                /*        if (hasCSS3) {
                            $slideActive.prev().css({
                                'opacity': 0
                            });
                            $slideActive.css({
                                //'margin-left': -1 * slideActiveOutW,
                                'opacity': 1,
                                'color': 'red',
                                '-webkit-transform': 'translateX(' + (-1 * slideActiveOutW) + 'px)',
                                '-moz-transform': 'translateX(' + (-1 * slideActiveOutW) + 'px)',
                                '-ms-transform': 'translateX(' + (-1 * slideActiveOutW) + 'px)',
                                '-o-transform': 'translateX(' + (-1 * slideActiveOutW) + 'px)',
                                'transform': 'translateX(' + (-1 * slideActiveOutW) + 'px)'
                            });
                            //Align Right Active Slide
                            for (var i = 0; i < nText; i++) {

                                //$this.find('.slide__text__' + p)[0].style[transform] = 'translateX(' + pix + 'px)';

                                var activeTextWidth = slideActiveW - $slideActive.find('.slide__text__' + i).attr('data-textwidth');

                                $slideActive.find('.slide__text__' + i)[0].style[transform] = 'translateX(' + activeTextWidth + 'px)';

                            }

                        } else {
                            $slideActive.prev().animate({
                                'opacity': 0
                            }, settings.fadeTime);

                            $slideActive.animate({
                                'margin-left': -1 * slideActiveOutW,
                                'opacity': 0
                            }, settings.fadeTime);
                            //Align Right Active Slide
                            for (var pi = 0; pi < nText; pi++) {
                                $slideActive.find('.slide__text__' + pi).animate({
                                    'margin-left': (slideActiveW - $slideActive.find('.slide__text__' + pi).attr('data-textwidth'))
                                }, speed2);
                            }
                            */

            }

            /*



                //#C slide active margin left
                // $slideActive.css({
                //     //'margin-left': -1 * ($(this).attr('data-slidewith')),
                //     'color':'blue',
                //     '-webkit-transform': 'translateX(' + ($(this).attr('data-slidewith')) + 'px)',
                //     '-moz-transform': 'translateX(' + ($(this).attr('data-slidewith')) + 'px)',
                //     '-ms-transform': 'translateX(' + ($(this).attr('data-slidewith')) + 'px)',
                //     '-o-transform': 'translateX(' + ($(this).attr('data-slidewith')) + 'px)',
                //     'transform': 'translateX(' + ($(this).attr('data-slidewith')) + 'px)'
                //
                // });

                //Align Right Active Slide
                for (var mi = 0; mi < nText; mi++) {
                    $slideActive.find('.slide__text__' + mi).animate({
                        'margin-left': (slideActiveW - $slideActive.find('.slide__text__' + mi).attr('data-textwidth'))
                    }, speed2);
                }

                // re-align all text of next element
                $slideActive.next()
                    .find(settings.slideText).animate({
                        'margin-left': 0
                    }, speed2);

                //get and set bg color
                if (settings.changeBgColor === true) {
                    oldBgColor = $slideActive.attr('data-bgcolor');
                    currentBgColor = $slideActive.next().attr('data-bgcolor');
                    currentMenuColor = currentBgColor;
                }

                if ($slideActive.next('.slide').length === 0) {
                    console.log('Reset');
                    resetSlides();
                }





                var showHideMedia = function(e) {
                    var $jumbotronImg = $('.jumbotron__img'),
                        $jumbotronVideo = $('.jumbotron__video');


                    if (hasCSS3) {
                        $jumbotronImg.removeClass('hidden');
                        $jumbotronVideo.addClass('hidden');
                        $jumbotronImg.attr('src', e);
                    } else {
                        $jumbotronImg.removeClass('hidden');
                        $jumbotronVideo.addClass('hidden');
                        $jumbotronImg.attr('src', e);
                    }
                    console.log('showHideNewMedia');
                };

                //get next video or image

                var showNextMedia = function() {

                    if (settings.changeMedia === true) {

                        if ($slideActive.next().attr('data-img')) {
                            newMedia = $slideActive.next().attr('data-img'); //get new attr
                            console.log('get next img');

                            showHideMedia(newMedia);

                            setTimeout(function() {
                                $('.slideTexting').slideTexting();
                            }, settings.nextMediaTime);



                        } else if ($slideActive.next().attr('data-video')) {
                            newMedia = $slideActive.next().attr('data-video'); // get ID video


                            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //if mobile get new attr placehold img

                                newMedia = $slideActive.next().attr('data-video-thumb');

                                showHideMedia(newMedia);

                                setTimeout(function() {
                                    $('.slideTexting').slideTexting();
                                }, settings.nextMediaTime);

                            } else {

                                console.log(newMedia);
                                var $videoContainer = $('#' + newMedia);

                                $videoContainer.addClass('video--is-active');

                                var video = Wistia.api(newMedia);
                                console.log("I got a handle to the video!", video);

                                video.bind("end", function() {

                                    $('.slideTexting').slideTexting({
                                        showSlideT: 0 // start when wideo end
                                    });
                                    $videoContainer.removeClass('video--is-active');

                                });

                                video.play();
                            }
                        }

                        setTimeout(function() {
                            if (hasCSS3) {
                                $(settings.jumbotronMedia).removeClass('is--hide'); //show media
                            } else {
                                $(settings.jumbotronMedia).animate({
                                    'opacity': 1
                                }); //show media
                            }

                        }, settings.speed * 2);

                    }
                };


                //add active class to active.next()
                $slideActive
                    .removeClass(settings.isActive)
                    .next()
                    .addClass(settings.isActive)
                    .removeClass(settings.isShowing)
                    .queue(function() {
                        setTimeout(function() { //important to have a good cross fade effect
                            if (!hasCSS3) {
                                $slideActive.prev().css({
                                    'opacity': 0
                                });
                            } else {
                                $slideActive.prev().animate({
                                    'opacity': 0
                                }, settings.fadeTime);
                            }

                            showNextMedia();

                            if (settings.changeBgColor === true) {

                                $(settings.selBgColor)
                                    .addClass(settings.bgPrefix + currentBgColor)
                                    .removeClass(settings.bgPrefix + oldBgColor);

                                //change sel color menu
                                $(settings.selMenuColor).parents('.menu').addClass('is-active');
                                $(settings.selMenuColor).removeClass('is-active');
                                $(settings.selMenuColor + '.' + settings.menuPrefix + currentMenuColor)
                                    .addClass('is-active');

                                console.log(settings.selMenuColor + '.' + settings.menuPrefix + currentMenuColor);
                            }
                        }, settings.speed);
                    });
            };

*/
            //#5 Reset
            //////////////////////////////////////////////////////////////////////////////

            /*var resetSlides = function() {
                $(settings.slide).removeAttr('style').removeClass(settings.isActive);
                $(settings.slideText).removeAttr('style');
                $(settings.slide + ':first-child').addClass(settings.isActive);

                currentSlide = 1;

                if (settings.changeBgColor === true) {

                    var firstSlideBgColor = $(settings.slide + ':first-child').attr('data-bgcolor'),
                        lastSlideBgColor = $(settings.slide + ':last-child').attr('data-bgcolor');

                    $(settings.selMenuColor).removeClass('is-active');

                    $(settings.selBgColor)
                        .removeClass(settings.bgPrefix + lastSlideBgColor)
                        .addClass(settings.bgPrefix + firstSlideBgColor);
                }

                if (settings.changeMedia === true) {
                    var dataVideo = $(settings.slide + ':first-child').attr('data-video');
                    var dataImg = $(settings.slide + ':first-child').attr('data-img');

                    if (typeof dataImg !== typeof undefined && dataImg !== false) {
                        $('.jumbotron__img').attr('src', dataImg);
                    }
                    if (typeof dataVideo !== typeof undefined && dataVideo !== false) {
                        $('.jumbotron__video').attr('src', dataVideo);
                    }
                }

                //$('.slideTexting').slideTexting();
            };
*/

            //#6 TIMING
            //////////////////////////////////////////////////////////////////////////////

            if (settings.timer === true) {
                setTimeout(function() {
                    showSlide(function() {
                        animationTextTetris();
                    });
                }, settings.showSlideT);
                setTimeout(function() {
                    animationSlideActive();
                }, settings.showSlideT + settings.translateSlide);
            }
        });
    };
}(jQuery));

(function($) {
    var $window = $(window),
        $home = $('.home'),
        $header = $('.header');

    var homeHeaderHeight = function() {
        var headerH = $header.outerHeight();

        $('.home .header').css({
            'margin-top': (-1 * headerH)
        });
    };

    /////////////////////////////////////////////////////
    // Home page
    /////////////////////////////////////////////////////
    $(window).on('load', function() {
        $(document).ready(function() {
            homeHeaderHeight();
            $('.slideTexting').slideTexting();

            var videoID = [];
            $('.slide[data-video]').each(function() {

                var dataVideo = $(this).attr('data-video');

                videoID.push(dataVideo);
                console.log('datavideo: ' + videoID);
            });

        });
    });

    $window.resize(function() {
        homeHeaderHeight();
    });
}(jQuery));
