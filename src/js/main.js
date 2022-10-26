//@prepros-prepend plugin/jquery_min.js
//@prepros-prepend plugin/animate.js

$(document).ready(function () {

    const page = $('main').data('page')
    $('.container__menu li').eq(page).addClass('active')

    //hash跳頁
    $('a[href*="#"]:not([href="#"])').click(function () {
        var target = $(this.hash);
        $('html,body').stop().animate({
            scrollTop: target.offset().top - 150
        }, 1100);
    });
    if (location.hash) {
        var id = $(location.hash);
    }
    $(window).load(function () {
        if (location.hash) {
            $('html,body').animate({ scrollTop: id.offset().top - 150 }, 600)
        };
    });

    $('#body-content').addClass('loading')

    //----------------------header scroll------------------//
    $('.container__burger').on('click', function () {
        $('header').toggleClass('open')
        if ($('header').hasClass('open')) {
            $('body,html').css('overflow-y', 'hidden')
        } else {
            $('body,html').css('overflow-y', 'auto')
        }
    })
    $(window).on('resize', function () {
        $('header').removeClass('open')
    })
    //----------------------header hover------------------//

    // 選單收合
    const isMobile = $(window).width() < 1025
    if (isMobile) {
        $('.container__menu .menu__title.mit').on('click', function (e) {
            // e.preventDefault();

            console.log(e.target)
            if ($(this).hasClass('active')) {
                console.log(1)
                $(this).removeClass('active')
                $(this).find('.menu__sub').slideUp()

            } else {
                console.log(2)
                $(this).addClass('active').siblings().removeClass('active');
                $(this).find('.menu__sub').slideToggle();
                $(this).siblings().find('.menu__sub').slideUp()
            }
        })
    } else {
        $('.container__menu .menu__title.mit').on('mouseenter', function () {
            $(this).addClass('active')
        })
        $('.container__menu .menu__title.mit').on('mouseleave', function () {
            $(this).removeClass('active')
        })
    }

    $(window).on('resize', function () {
        $('header').removeClass('open')
        const isMobile = $(window).width() < 1025
        if (isMobile) {
            $('.menu__sub').slideUp()
        } else {
            $('.menu__sub').css('display', 'flex')
        }

    })

    //--------------------------minHeight----------------//
    var windowHeight = $(window).height();
    var miniHeight = windowHeight - $('footer').outerHeight() - $('header').outerHeight();
    $('main').css({
        "min-height": miniHeight + "px"
    });

    $(window).on('resize', function (event) {
        var windowHeight = $(this).height();
        var miniHeight = windowHeight - $('footer').outerHeight() - $('header').outerHeight();

        $('main').css({
            "min-height": miniHeight + "px"
        });

    });

    //----------------------top_btn------------------//
    $(window).on('scroll', function () {
        var footerscrolltop = $('footer').outerHeight()
        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if ($(this).scrollTop() > 170) {
            // $(".top_btn").css('display', 'block')
            $(".top_btn").addClass('show')
        } else {
            // $(".top_btn").css('display', 'none')
            $(".top_btn").removeClass('show')
        }
        if (scrollBottom < footerscrolltop) {
            $(".top_btn").addClass('nonfixed')
        } else {
            $(".top_btn").removeClass('nonfixed')
        }
    })
    $(".top_btn").on('click', function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
})

