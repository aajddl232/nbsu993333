$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 2500,

        dots: true,
    });

    $('.main_visual_slide').on('afterChange', function () {
        const current = $('.main_visual_slide .slick-active')
        current.addClass('on').siblings().removeClass('on')
    })


    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });
    $('.main_content .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });





});