// slickJS
$(document).ready(function(){
    $('.team__cards__slideshow').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        mobileFirst: true,
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 200,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 506,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
        ]
    });
});