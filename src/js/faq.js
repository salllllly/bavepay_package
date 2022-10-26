//@prepros-prepend template/top_menu.js

$(document).ready(function () {
    window.setTimeout(function () {
        slider_ul_list("top-menu-ul");
    }, 600);

    $('.faq-section li').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            $(this).find('.answer-wrap').slideUp();
        } else {
            $(this).addClass('active').siblings().removeClass('active')
            $(this).find('.answer-wrap').slideDown();
            $(this).siblings().find('.answer-wrap').slideUp();
        }
    })
});


