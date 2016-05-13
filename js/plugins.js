// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

(function($) {
    /////////////////////////////////////////////////////
    // Exists
    /////////////////////////////////////////////////////
    jQuery.fn.exists = function() {
        return this.length > 0;
    };
}(jQuery));

/////////////////////////////////////////////////////
// Hover slideshow
/////////////////////////////////////////////////////
(function($) {
    $.fn.slideshowHover = function(options) {
        //default options
        var settings = $.extend({
            item: '.gallery__link',
            speed: 1000,
            show: 'show',
            swipeOn: true
        }, options);

        return this.each(function() {
            //Variables
            var counter = 1, // to keep track of current slide
                $items = $(this).find(settings.item),
                numItems = $items.length, // total number of slides
                isPaused = true;
            // this function is what cycles the slides, showing the next or previous slide and hiding all the others
            var showCurrent = function() {
                if (counter == -1) {
                    counter = numItems - 1;
                } else if (counter == numItems) {
                    counter = 0;
                }
                var itemToShow = Math.abs(counter % numItems); // uses remainder (aka modulo) operator to get the actual index of the element to show

                $items.removeClass(settings.show); // remove .show from whichever element currently has it
                $items.eq(itemToShow).addClass(settings.show);

            };
            //setTimeout == Loop
            ///////////////////////////////////////////
            var t = window.setInterval(function() {
                if (!isPaused) {
                    $items.removeClass(settings.show);
                    $items.eq(counter % $items.length).addClass(settings.show);
                    counter++;
                }
            }, settings.speed);
            //Slideshow Hover == Play loop
            //////////////////////////////////////////
            $(this).hover(function(e) {
                e.preventDefault();
                isPaused = false;
            }, function(e) {
                e.preventDefault();
                isPaused = true;
            });
            // if touch events are supported then add swipe interactions using TouchSwipe https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
            if (settings.swipeOn === true && 'ontouchstart' in window) {
                $(this).swipe({
                    swipeLeft: function() {
                        counter++;
                        showCurrent();
                    },
                    swipeRight: function() {
                        counter--;
                        showCurrent();
                    }
                });
            }
        });
    };
}(jQuery));
