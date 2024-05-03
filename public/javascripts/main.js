// Template structure
//
// --------------------------------------------------

$(document).ready(function () {

    // Page preloader
    // --------------------------------------------------

    (function () {
        $('.page-loader').fadeOut();
    })();

    // Scroll to top
    // --------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });

        // click event
        $('.scroll-to-top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    })();

    // Navigation
    // --------------------------------------------------

    (function () {
        $('a.scroll-to').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 70
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    })();

});
