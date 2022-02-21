$(function () {
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-arrow_next"><img src="img/next.svg" alt="next-arrow"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-arrow_prev"><img src="img/prev.svg" alt="prev-arrow"></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                }
            }
        ]
    })
    $('.reviews__slider').slick({
        dots: true,
        arrows: false
    })
})