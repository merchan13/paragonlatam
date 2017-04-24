;
(function () {

    'use strict';



    // iPad and iPod detection	
    var isiPad = function () {
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function () {
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };

    // Parallax
    var parallax = function () {
        $(window).stellar();
    };



    // Burger Menu
    var burgerMenu = function () {

        $('body').on('click', '.js-fh5co-nav-toggle', function (event) {

            event.preventDefault();

            if ($('#navbar').is(':visible')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }



        });

    };


    var goToTop = function () {

        $('.js-gotop').on('click', function (event) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500);

            return false;
        });

    };


    // Reflect scrolling in navigation
    var navActive = function (section) {

        var $el = $('#navbar > ul');
        $el.find('li').removeClass('active');
        $el.each(function () {
            $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
        });

    };

    var navigationSection = function () {

        var $section = $('section[data-section]');

        $section.waypoint(function (direction) {

            if (direction === 'down') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: '150px'
        });

        $section.waypoint(function (direction) {
            if (direction === 'up') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: function () {
                return -$(this.element).height() + 155;
            }
        });

    };





    // Window Scroll
    var windowScroll = function () {
        var lastScrollTop = 0;

        $(window).scroll(function (event) {

            var header = $('#fh5co-header'),
                scrlTop = $(this).scrollTop();

            if (scrlTop > 500 && scrlTop <= 2000) {
                header.addClass('navbar-fixed-top fh5co-animated slideInDown');
            } else if (scrlTop <= 500) {
                if (header.hasClass('navbar-fixed-top')) {
                    header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
                    setTimeout(function () {
                        header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
                    }, 100);
                }
            }

        });
    };



    // Animations
    // Home

    var homeAnimate = function () {
        if ($('#fh5co-home').length > 0) {

            $('#fh5co-home').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        $('#fh5co-home .to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);


                    $(this.element).addClass('animated');

                }
            }, {
                offset: '80%'
            });

        }
    };

    var aboutAnimate = function () {
        var about = $('#fh5co-about');
        if (about.length > 0) {

            about.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        about.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);



                    $(this.element).addClass('animated');

                }
            }, {
                offset: '80%'
            });

        }
    };

    // Document on load.
    $(function () {

        parallax();

        burgerMenu();

        windowScroll();

        navigationSection();

        goToTop();

        // Animations
        homeAnimate();
        aboutAnimate();


    });


}());