!(function($) {
    "use strict";
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
            console.log("uncollapsed");
            $(iIcon).toggleClass('icofont-navigation-menu');
        }
    });


})(jQuery)