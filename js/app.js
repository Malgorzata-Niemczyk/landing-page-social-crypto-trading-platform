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

// displaying team information in a modal
$(".card-1").click(function () {
    let title = $(this).parents("div").find("#title-1").text();
    let subtitle = $(this).parents("div").find("#subtitle-1").text();

    let stringTitle = title;
    $(".modal-title").html(stringTitle);

    let stringSubtitle = subtitle;
    $(".modal-subtitle").html(stringSubtitle);
});

$(".card-2").click(function () {
    let title = $(this).parents("div").find("#title-2").text();
    let subtitle = $(this).parents("div").find("#subtitle-2").text();

    let stringTitle = title;
    $(".modal-title").html(stringTitle);

    let stringSubtitle = subtitle;
    $(".modal-subtitle").html(stringSubtitle);
});

$(".card-3").click(function () {
    let title = $(this).parents("div").find("#title-3").text();
    let subtitle = $(this).parents("div").find("#subtitle-3").text();

    let stringTitle = title;
    $(".modal-title").html(stringTitle);

    let stringSubtitle = subtitle;
    $(".modal-subtitle").html(stringSubtitle);
});

$(".card-4").click(function () {
    let title = $(this).parents("div").find("#title-4").text();
    let subtitle = $(this).parents("div").find("#subtitle-4").text();

    let stringTitle = title;
    $(".modal-title").html(stringTitle);

    let stringSubtitle = subtitle;
    $(".modal-subtitle").html(stringSubtitle);
});