$(document).ready(function () {

    if ($("#banner").length) {
        $("#banner").owlCarousel({
            items: 1,
            smartSpeed: 450,
            autoplay: true,
            autoplayTimeout: 4000,
            responsiveClass: true,
            nav: false,
            navText: ['', ''],
        });
    }


    if ($(".toggle").length) {
        $(".toggle").click(function () {
            if ($("body").hasClass("active")) {
                $("body").removeClass("active");
            }
            else {
                $("body").addClass("active");
            }
        });

        /*$("#sidebar .btn-close").click(function () {
            $("#sidebar").removeClass("active");
            $("body").removeClass("toggle");
        })*/
    }
});

function open_popup(popup) {
    $.fancybox.open({
        src: popup,
        type: 'inline',
        opts: {
            onComplete: function () {
                console.info('done!');
            }
        }
    });

    return false;
}

function close_popup() {
    $.fancybox.close();
    return false;
}