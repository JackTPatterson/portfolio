$(document).ready(function() {
    var cursor = $(".cursor");

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(window)
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
        });

    $(".link")
        .mouseenter(function() {
            cursor.css({
                transform: "scale(3.2)"
            });
        })
        .mouseleave(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });

    $(window)
        .mousedown(function() {
            cursor.css({
                transform: "scale(.2)"
            });
        })
        .mouseup(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });
});


$(document).ready(function () {

    year = new Date().getFullYear() - 2003;

    $('#year').text(" " + year + " ");

    var scroller = setInterval(scroll, 5);

    $('#top-btn').hide();


    function scroll() {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    setTimeout(function () {
        clearInterval(scroller);
    }, 500)

    let height = $(window).height();

    var el = $('#main-btn'); //this would just be your selector
    var bottom = el.position().top + el.outerHeight(true);



    $('#work').css({
        "margin-top": height - bottom
    });
    $('#skills').css({
        "margin-top": height - bottom
    });
    $('#about').css({
        "margin-top": height - bottom
    });
});

jQuery.easing.def = 'easeInOutQuad';

function scrollToContact() {
    $('html, body').animate({
        scrollTop: $(document).height() - $(window).height()
    }, 1300);
}


function scrollToTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 1300);
}


$(window).scroll(function () {

    if ($(document).scrollTop() > 200) {
        $('#top-btn').fadeIn();
    } else {
        $('#top-btn').fadeOut();
    }

});



AOS.init({
    // Global settings:
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});