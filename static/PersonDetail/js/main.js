(function ($) {
    "use strict";


    var $body = $("body"),
            $window = $(window);


    

    /*============================= Navigation Section ==============================*/


    $(".menu-button").on('click', 'a', function () {
        $(".hidemenu").toggleClass("open-menu");
    });
    $(".menulist").on('click', 'a', function () {
        $(".hidemenu").toggleClass("open-menu");
    });
    $(".menu-button").on('click', 'a', function () {
        $(".toggle-menu").toggleClass("toggle-menu-after");
    });
    $(".menulist").on('click', 'a', function () {
        $(".toggle-menu").toggleClass("toggle-menu-after");
    });

    hoverMenu();
    imgMenu();
    function hoverMenu() {
        $("#menu li a").on("mouseenter", function() {
            var ref = $(this).data("ref"),
                menuImg = $('.menu-img[data-ref="' + ref + '"]');
            $("#menu li a").removeClass("active");
            $(this).addClass("active");
            $(".menu-img").removeClass("active");
            menuImg.addClass("active");
        });
    }
    function imgMenu() {
        $("[data-bg]").each(function() {
            var bg = $(this).data("bg");
            $(this).css({
                "background-image": 'url(' + bg + ')',
                "background-position": "center center",
                "background-size": "cover"
            });
        });
    }

    /*============================= Navigation Section ==============================*/

    $window.on('scroll', function () {
        if ($(".navbar").offset().top > 25) {
            $(".navbar-default").addClass("small");
        } else {
            $(".navbar-default").removeClass("small");
        }
    });
    
    /*============================= Smoothscroll js ==============================*/

    $('.navbar-default').on('click', 'a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 1
        }, 1000);
        event.preventDefault();
    });

    /*====================================== jquery scroll spy ========================================*/

    $body.scrollspy({
        target: ".navbar-collapse",
        offset: 15

    });




    /*====================================== Fancybox ========================================*/

    $('.fancybox-buttons').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        prevSpeed: 550,
        nextEffect: 'fade',
        nextSpeed: 550,
        closeBtn: true,
        helpers: {
            title: {
                type: 'inside'
            },
            buttons: {}
        }
    });

    /*============================= Go top button ==============================*/

    $(window).scroll(function () {
        "use strict";
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });

    $('.scroll').on('click', 'a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 1
        }, 1000);
        event.preventDefault();
    });

    /*====================================== Fancybox-script ========================================*/

    $(".fancybox").fancybox();

    /*====================================== Mixit-up ========================================*/

    var filterList = {
        init: function () {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.web, .graphics, .development, .photography'
                }
            });

        }

    };

    // Run the show!
    filterList.init();

    /*====================================== Parallex ========================================*/

    $('.parallax').scrolly({bgParallax: true});


})(jQuery);


/*============================= Testimonial ==============================*/



$(window).on('load', function () {
    "use strict";
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[990,1],
        itemsTablet:[768,1],
        itemsMobile:[650,1],
        pagination:true,
        navigation:false,
        autoPlay:true
    });

});


/*============================= testimonial==============================*/

$(window).on('load', function () {
    "use strict";
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,1],
        itemsTablet:[768,1],
        pagination:true,
        autoPlay:true
    });
});


/*============================= Preload==============================*/

$(window).on('load', function () {
    "use strict";
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
    ;
});
/*======================================counter-up ========================================*/

$('.Count').each(function () {
    "use strict";
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });


});

