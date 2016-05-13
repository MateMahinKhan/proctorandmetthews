(function($) {
    var $window = $(window),
        $home = $('.home'),
        $btnMenu = $('.nav__toggle'),
        $menu = $('#menu'),
        $header = $('.header'),
        $headerFix = $('.header--fix'),
        fixClass = 'header--top',
        $homeContainer = $('.home__container'),
        headerH = $header.height(),
        spaceBottom = 16,
        mdMin = 765,
        headerFixH = $headerFix.height() + spaceBottom,
        hasCSS3 = Modernizr.csstransforms && Modernizr.cssanimations;

    /////////////////////////////////////////////////////
    // TOGGLE ARIA EXPANDED
    /////////////////////////////////////////////////////
    $btnMenu.on('click', function() {
        var $this = $(this);
        //toggle attr aria-expanded
        if ($this.attr('aria-expanded') == 'false') {
            $this.attr('aria-expanded', 'true');
        } else {
            $this.attr('aria-expanded', 'false');
        }
        $('.nav').toggleClass('nav--collapsed');
    });

    /////////////////////////////////////////////////////
    // FUNCTIONS
    /////////////////////////////////////////////////////
    var negativeTop = function() {
        if ($('.big__img').has('figcaption')) {

            if ($(window).width() >= mdMin) {
                var bigImgCaptionH = $('.big__img figcaption').outerHeight();

                $('.big__img').has('figcaption').next().addClass('negative--top');
                $('.negative--top .col--6').css('margin-top', (-1 * bigImgCaptionH) - 4);

            } else {
                $('.negative--top').find('.box__content').removeAttr('style');
            }
        }
    };

    /////////////////////////////////////////////////////
    // STICKY MENU
    /////////////////////////////////////////////////////
    var stickyMenu = function() {
        var headerTop = $header.offset().top,
            headerFixH = $headerFix.height() + spaceBottom;

        $window.scroll(function() {
            $this = $(this);
            //TO FIX ON TOP
            if ($this.scrollTop() > headerFixH) {
                $headerFix.removeClass('header--top--negative');

            } else {
                $headerFix.addClass('header--top--negative');
            }
            //TO FIX ON bottom
            if ($this.scrollTop() > headerTop) {
                $headerFix.addClass(fixClass);
                $headerFix.removeClass('header--top--negative');
            } else if ($this.scrollTop() === 0) {
                $headerFix.addClass('header--top--negative');
            } else {
                $headerFix.removeClass(fixClass);
            }
        });
    };

    /////////////////////////////////////////////////////
    // SCROLL TO TOP
    /////////////////////////////////////////////////////
    var scrollTop = function() {
        //show/hide btn
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
        //Click event to scroll to content
        $('.scrollToTop').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    };

    var scrollNavTop = function() {
        if ($window.width() <= mdMin) {
            var contentPosTop = $header.offset().top;

            $('#nav__btn[aria-expanded=false]').on('click', function() {
                $('html, body').animate({
                    scrollTop: contentPosTop
                }, 800);

                return false;
            });
        }
    };

    /////////////////////////////////////////////////////
    //JUMBOTRON: With multitext
    /////////////////////////////////////////////////////
    var showVideoText = function() {
        var $sel = $('.jumbotron--with-multitext .jumbotron__text');
        $sel.each(function() {
            var that = this,
                timeIn = $(that).attr('data-time-in'),
                timeOut = $(that).attr('data-time-out'),
                timeDelay = timeOut - timeIn;

            var t = setTimeout(function() {
                if (hasCSS3) {
                    $(that).addClass('.jumbotron__text--showing').delay(timeDelay).queue(function(next) {
                        $(this).removeClass('.jumbotron__text--showing').dequeue();
                    });
                } else {
                    $(that).animate({
                            'opacity': 1
                        }, 1000)
                        .delay(timeDelay)
                        .animate({
                            'opacity': 0
                        }, 1000);
                }
            }, timeIn);
        });
    };

    if ($('.jumbotron--with-multitext').exists) {
        showVideoText();
    }



    /////////////////////////////////////////////////////
    // Hover slideshow
    /////////////////////////////////////////////////////
    if ($.slideshowHover) {
        $('.gallery--slideshow').slideshowHover({
            item: '.gallery__link',
            speed: 2000,
            show: 'show',
            swipeOn: false
        });
    }


    /////////////////////////////////////////////////////
    // PLAY
    /////////////////////////////////////////////////////
    $headerFix.addClass('header--top--negative');
    stickyMenu(); // STICKY MENU
    scrollNavTop();

    $window.resize(function() {
        stickyMenu();
        scrollNavTop();
    });



    /////////////////////////////////////////////////////
    // LIGHTBOX
    /////////////////////////////////////////////////////
    //Magnific Popup: http://dimsemenov.com/plugins/magnific-popup/documentation.html
    $('.gallery__thumbnails').each(function() {
        $(this).magnificPopup({
            delegate: '.gallery__link',
            type: 'image',
            preloader: true,
            image: {
                verticalFit: true,
                // titleSrc: function(item) {
                //     return item.el.parent().find('.figure__caption').html(); //get caption
                // },
            },
            gallery: {
                enabled: true,
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 500, // duration of the effect, in milliseconds
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    });
    //end each
    $('.gallery--imgs').each(function() {
        $(this).magnificPopup({
            delegate: '.gallery__link',
            type: 'image',
            preloader: true,
            image: {
                verticalFit: true
            },
            gallery: {
                enabled: true,
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 500, // duration of the effect, in milliseconds
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }); //end each


}(jQuery));

(function($) {
    /////////////////////////////////////////////////////
    //  MASONRY – http://masonry.desandro.com/
    /////////////////////////////////////////////////////
    // init Masonry
    if ($.fn.masonry && $.fn.imagesLoaded) {
        var $gridMasonry = $('.masonry-grid').masonry({
            // set itemSelector so .masonry-sizer is not used in layout
            itemSelector: '.list__item',
            // use element for option
            columnWidth: '.col--3',
            // gutter:0,
            percentPosition: true,
            isResizeBound: true
        });
        var $gridMasonry2 = $('.masonry-grid--2').masonry({
            // set itemSelector so .masonry-sizer is not used in layout
            itemSelector: '.list__item',
            // use element for option
            columnWidth: '.list__item',
            // gutter:0,
            percentPosition: true,
            isResizeBound: true
        });
        // layout Masonry after each image loads

        $gridMasonry.imagesLoaded().progress(function() {
            //console.log('ciao');
            $gridMasonry.masonry('layout');
            $gridMasonry2.masonry('layout');
        });



        $(window).resize(function() {


            console.log('resize');

            $gridMasonry.masonry('bindResize');
            $gridMasonry2.masonry('bindResize');

        });

    }
}(jQuery));
