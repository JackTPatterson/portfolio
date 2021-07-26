$(document).ready(function () {

    var scroller = setInterval(scroll, 5);

    var wel = document.getElementById('welcome-lnk2')
    var abt = document.getElementById('abt-lnk2')
    var port = document.getElementById('port-lnk2')
    var cont = document.getElementById('contact-lnk2')
    var test = document.getElementById('test-lnk2')




    wel.onclick = function (){
            $('html, body').animate({
                scrollTop: window.pageYOffset + document.getElementById('main').offsetTop - 40
            }, 1300);
        }

    
    abt.onclick = function (){
            $('html, body').animate({
                scrollTop: window.pageYOffset + document.getElementById('about').offsetTop + 30
            }, 1300);
    }
    port.onclick = function (){


            $('html, body').animate({
                scrollTop: window.pageYOffset + document.getElementById('portfolio').offsetTop - 40
            }, 1300);
        
    }
    cont.onclick = function (){


            $('html, body').animate({
                scrollTop: window.pageYOffset + document.getElementById('contact').offsetTop - 40
            }, 1300);
        
    }
    test.onclick = function (){


            $('html, body').animate({
                scrollTop: 2270
            }, 1300);
        
    
    }

   

        

    setTimeout(function () {
        clearInterval(scroller);
    }, 500)

    let height = $(window).height();

    var el = $('#default'); //this would just be your selector
    var bottom = el.position().top + el.outerHeight(true);

    $('#about').css({
        "margin-top": height - bottom - 500
    });
});




jQuery.easing.def = 'easeInOutQuad';

function scrollToContact() {
    $('html, body').animate({
        scrollTop: $(document).height() - $(window).height() - 100
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

