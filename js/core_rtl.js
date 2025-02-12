$(document).ready(function () {

    'use strict';

    // ---------------------
    // :: Navbar Link
    // ---------------------

    var linkArray = $(".js-dropdown-links .dropdown-link")
    if (linkArray.length >= 1) {
        linkArray.each(function (i) {
            $(linkArray[i]).hover(function () {
                var linkPosition = $(linkArray[i]).position();
                var linkHeight = $(linkArray[i]).outerHeight();
                var hoverState = $('.js-hover-state');

                hoverState.css({
                    'opacity': 1,
                    'top': linkPosition.top + 'px',
                    'height': linkHeight + 'px'
                })
            })

            $(linkArray[i]).mouseleave(function () {
                var hoverState = $('.js-hover-state');

                hoverState.css({
                    'opacity': 0,
                    'top': 0
                })
            })
        })
    }

    $('.dropdown-toggle').on('mouseover mouseleave', function () {
        $('.dropdown-menu').toggleClass('in');

        if ($('.dropdown-menu').hasClass('in')) {
            $(this).parent().addClass('dropdown-in')
        } else {
            $(this).parent().removeClass('dropdown-in')
        }
    });

    $('.dropdown-menu').on('mouseenter mouseleave', function () {
        $('.dropdown-menu').toggleClass('in');

        if ($('.dropdown-menu').hasClass('in')) {
            $(this).parent().addClass('dropdown-in')
        } else {
            $(this).parent().removeClass('dropdown-in')
        }
    });

    // ---------------------
    // :: Parallax
    // ---------------------

    $('.parallax').parallax("0%", 0.4);

    // ---------------------
    // :: Navigation Bar
    // ---------------------

    $(window).on('scroll', function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar").addClass("top-nav-collapse");
        } else {
            $(".navbar").removeClass("top-nav-collapse");
        }
    });

    // ---------------------
    // :: Statistics Counter
    // ---------------------

    $('.counter-value').each(function () {
        $(this).appear(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }, {
            accX: 0,
            accY: 0
        });
    });


    // ---------------------
    // :: Testimonials Slider
    // ---------------------

    $('.testimonial-slider').owlCarousel({
        loop: true,
        autoplay: true,
        navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
        nav: true,
        dots: false,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            700: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    // ---------------------
    // :: Scroll To Top
    // ---------------------

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 800) {
            $("#scroll-top").addClass("show");
        } else {
            $("#scroll-top").removeClass("show");
        }
    });
    $("#scroll-top").on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    // End
});

// ---------------------
// :: Preloader
// ---------------------

$(window).on("load", function () {
    $('body').css('overflow-y', 'visible');
    $(".loader-wrapper").fadeOut(function () {
        $("#loading-mask").fadeOut("slow");
    });
});