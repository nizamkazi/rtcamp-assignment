// for clock using moment.js
function clock() {
    var d = moment().format('dddd DD MMMM.');
    var t = moment().format('HH:mm:ss');
    document.getElementById("date").innerHTML = d;
    document.getElementById("time").innerHTML = t;
}
setInterval(clock, 1);

$(document).ready(function () {
    var maxSlides,
            width = $(window).width();
    if (width < 440) {
        maxSlides = 1;
    }
    else if (width < 650) {
        maxSlides = 2;
    }
    else if (width < 992) {
        maxSlides = 3;
    } else {
        maxSlides = 5;
    }
    $('#carousel').bxSlider({
        pager: false,
        minSlides: 1,
        maxSlides: maxSlides,
        moveSlides: 1,
        nextSelector: '.next',
        prevSelector: '.prev',
        nextText: '<img src="images/carousel-arrow-right.png" alt="next">',
        prevText: '<img src="images/carousel-arrow-left.png" alt="next">',
        slideWidth: 170,
        slideMargin: 5
    });

    $('#client-slider').bxSlider({
        pager: false,
        minSlides: 1,
        maxSlides: maxSlides,
        moveSlides: 1,
        nextSelector: '.next-client',
        prevSelector: '.prev-client',
        nextText: '<img src="images/carousel-arrow-right.png" alt="next">',
        prevText: '<img src="images/carousel-arrow-left.png" alt="next">',
        slideWidth: 170
    });
});
$(document).ready(function () {
    $('#news').bxSlider({
        pager: false,
        nextSelector: '.next-news',
        prevSelector: '.prev-news',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>'
    });
    $('#home-slider').bxSlider({
        controls: false,
        auto: true
    });
});
$('.fancybox-thumbs').fancybox({
    prevEffect: 'none',
    nextEffect: 'none',
    closeBtn: true,
    arrows: true
});
$(document).ready(function () {
    $('#tweecool').tweecool({
        //settings
        username: 'rtCamp',
        limit: 4,
        profile_image: false,
        show_time: false
    });
});
