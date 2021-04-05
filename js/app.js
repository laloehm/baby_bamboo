$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 15000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            dots: false,
        },
        767: {
            items: 3,
            nav: true,
            dots: false,
        },
        1000: {
            items: 3,
            nav: true,
            dots: false,
        },
    },
});
/* Smooth scrolling para anclas */
$("a.smooth").on("click", function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr("href");
    $("html, body")
        .stop()
        .animate(
            {
                scrollTop: $(anchor).offset().top - 100 + "px",
            },
            1000
        );
});

// Funcion para barra de Menu
$(window).scroll(function () {
    let header = $("#menu");
    if ($("#menu").offset().top > 300) {
        $(header).css("background", "#fff");
    } else {
        $(header).css("background", "transparent");
    }
});
$("body").scrollspy({ target: ".navbar", offset: 170 });

(function ($) {
    "use strict";
    $('[data-icon="hamburguer"]').on("click", function () {
        if (!$('[data-icon="hamburguer-bar"]').hasClass("bar-on")) {
            $('[data-icon="hamburguer-bar"]').addClass("bar-on");
        } else {
            $('[data-icon="hamburguer-bar"]').removeClass("bar-on");
        }
    });
})(jQuery);

/* git remote add origin https://github.com/laloehm/baby_bamboo.git */
