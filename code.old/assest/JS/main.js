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
            $(navbar).addClass('nav-colored').show();
            $(navbar).removeClass('nav-transparent');
        } else {
            $(navbar).removeClass('nav-colored');
            $(navbar).addClass('nav-transparent').show();
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

    // menu button

    var menuBtn = document.getElementById('menu-btn');
    var menuSec = document.getElementById('menu');
    $(menuBtn).on('click', function(e) {
        $(menuSec).get(0).scrollIntoView();
        console.log('event happend')
    });


    // stop animations on small devices
    var isMobile = false;
    var isTablet = false;
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
        isTablet = true;
    }
    if (isMobile || isTablet) {
        $('.wow').addClass('wow-removed').removeClass('wow').show();
    } else {
        $('.wow-removed').addClass('wow').removeClass('wow-removed').show();
    }

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function() {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.navbar, #navbarSupportedContent');
    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function() {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (cur_pos < 300) {
                $(".nav-menu ul:first li:first").addClass('active');
            }
        });
    });


    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out-back",
            once: true
        });
    }
    $(window).on('load', function() {
        aos_init();
    });

    /* form[name='order'] validation */

    var forms = document.getElementsByClassName('needs-validation');
    const email = document.getElementById('email');
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const phone = document.getElementById('phone');
    const addr = document.getElementById('address');

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validate() {
        if (email.value != "" && fname.value != "" && lname.value != "" && phone.value != "" && addr.value != "") {
            alert('going to check valdity of email');
            if (validateEmail(email.val())) {
                return 0;
            } else {
                return 1;
            }
            return 1;
        }
    }

    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(e) {
            if (form.checkValidity() === false) {
                e.preventDefault;
                e.stopPropagation;
            } else {
                if (validate() == 0) {
                    swal({
                        title: "Thanks!",
                        text: "Your  order has been sent!",
                        icon: "success",
                        button: "Aww yass!",
                    });
                    form.classList.add('was-validated');
                } else {
                    swal({
                        title: "Failed",
                        text: "fields are required!",
                        icon: "error",
                        button: "Try Again",
                    });
                }
            }
        });
    }, false);

})(jQuery)