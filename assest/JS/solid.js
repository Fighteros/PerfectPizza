!(function($) {
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