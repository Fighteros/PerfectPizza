!(function($) {
    "use strict";
    // typed
    if ($('.typed').length) {
        var typed_strings = $(".typed").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

    // nav colored
    var navbar = document.getElementById('navbar');
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > $('#header').offset().top) {
            $(navbar).addClass('nav-colored');
            $(navbar).reomveClass('nav-transparent')
        } else {
            $(navbar).removeClass('nav-colored');
            $(navbar).addClass('nav-transparent')
        }
    });

    // toggle button icon for mobile navbar
    var navBtn = document.getElementsByClassName('navbar-toggler');
    var iIcon = document.getElementById("navicon");
    var navMobile = document.getElementById('navbarSupportedContent');

    $(navBtn).on('click', function(e) {
        if (!($(navMobile).hasClass('collapsed'))) {
            $(iIcon).toggleClass('icofont-navigation-menu');
        }
    });


})(jQuery)