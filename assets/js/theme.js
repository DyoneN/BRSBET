(function ($) {
    'use strict';

    /*---WOW active js ---- */
    new WOW().init();

    /*---- scrollUp----- */
    $.scrollUp({
        scrollText: '<i class="fa-solid fa-volleyball"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /*---- .scrollUp----- */

    /*---- Loader ----------*/
    $(window).on("load", function () {
        $('.loader').fadeOut('fast', function () {
            $(this).remove();
        });
    });
    /*---- .Loader ----------*/

    /* Slider Js */
    $(document).ready(function () {
        $('.upcoming-carousel').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            margin: 20,
            rewind: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
            autoplay: true,
            autoplayTimeout: 3000,
            items: 1,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        })

        $('.customer-carousel').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            margin: 20,
            rewind: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
            autoplay: true,
            autoplayTimeout: 5000,
            items: 1,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        })

        $('.blog-carousel').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            margin: 20,
            rewind: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
            autoplay: true,
            autoplayTimeout: 3000,
            items: 1,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        })

    })
    /* .Slider Js */

    /* Counter */
    $.fn.jQuerySimpleCounter = function (options) {
        var settings = $.extend({
            start: 0,
            end: 100,
            easing: 'swing',
            duration: 400,
            complete: ''
        }, options);

        var thisElement = $(this);

        $({ count: settings.start }).animate({ count: settings.end }, {
            duration: settings.duration,
            easing: settings.easing,
            step: function () {
                var mathCount = Math.ceil(this.count);
                thisElement.text(mathCount);
            },
            complete: settings.complete
        });
    };

    $('#number1').jQuerySimpleCounter({ end: 1600, duration: 3000 });
    $('#number2').jQuerySimpleCounter({ end: 1000, duration: 3000 });
    $('#number3').jQuerySimpleCounter({ end: 100, duration: 3000 });
    $('#number4').jQuerySimpleCounter({ end: 2500, duration: 3000 });
    /* .Counter */

    /* Equal height */
    var item_max_height;
    function set_equal_height(class_id_name) {
        if (class_id_name != "") {
            item_max_height = 0;
            $(class_id_name).each(function () {
                if ($(this).height() > item_max_height) { item_max_height = $(this).height(); }
            });
            // console.log(class_id_name + ' ' + item_max_height);
            $(class_id_name).height(item_max_height);
        }
    }
    function resize_item() {
        set_equal_height(".blog_description");
    }
    $(document).ready(function () {
        resize_item();
    });
    $(window).resize(function () {
        resize_item();
    });
    /* .Equal height */

    /* Responsive Menu */
    $("#show-themability_megamenu").click(function () {
        $('.cryptco_menu .main-menu-outer').toggleClass('main-menu-active');
        $('body').addClass('active');
    });

    $(".cryptco_menu .menu_title i").click(function () {
        $('.cryptco_menu .main-menu-outer').removeClass('main-menu-active');
        $('body').removeClass('active');
    });
    /* .Responsive Menu */

    /* Contact Form */
    if (window.location.href.indexOf('submitted=true') !== -1) {
        $('.submitted').show();
    }
    /* .Contact Form */

    /* Slider Image */
    function move_image(e, t, a, x, y, s) {
        s = 50; // This is the speed. Higher means slower
        x = e.pageX;
        y = e.pageY;
        t = jQuery(this);
        t.find('.movable-image').css('bottom', '-' + Math.ceil(y / s) + 'px').css('left', '-' + Math.ceil(x / s) + 'px');
    }
    function restart_image(e, a, t) {
        t = jQuery(this);
        t.find('.movable-image').css('bottom', '0px').css('left', '0px');
    }
    (function ($) {
        $('.moving-image').mousemove(move_image).mouseout(restart_image);
    })(jQuery);
    /* .Slider Image */

    /* Score board Tab*/
    $(document).ready(function () {
        $(".nav-link").click(function (event) {
            var this_has = $(this).attr("data-bs-target");
            var this_height = $(this).height() + 50;
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: $(this_has).offset().top - this_height
                }, 50);
            }, 300);
        });
    });
    /* .Score board Tab*/

})(jQuery);