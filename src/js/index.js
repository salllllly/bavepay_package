var cardSwiper = new Swiper(".cardSwiper", {
    pagination: {
        el: ".cardSwiper-pagination",
        clickable: true
    },
    breakpoints: {
        // when window width is <= 320px     
        320: {
            slidesPerView: 1.5,
            spaceBetween: 5,
            centeredSlides: true,
            loop: true
        },
        // when window width is <= 480px     
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
            loop: true
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        // when window width is <= 640px     
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});
var numSwiper = new Swiper(".numSwiper", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        // when window width is <= 320px     
        320: {
            slidesPerView: 1,
            spaceBetween: 5,
            loop: true
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 10
        }
    }
});
var phoneSwiper = new Swiper(".phoneSwiper", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 6000,
    },
    thumbs: {
        swiper: numSwiper,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    breakpoints: {
        // when window width is <= 320px     
        320: {
            navigation: {
                nextEl: ".phoneSwiper-button-next.mobile",
                prevEl: ".phoneSwiper-button-prev.mobile",
            },
        },
        992: {
            navigation: {
                nextEl: ".phoneSwiper-button-next.desk",
                prevEl: ".phoneSwiper-button-prev.desk",
            },
        }
    }
});
$(window).on('scroll', function () {
    const scrollBottom = $(this).scrollTop() + $(this).height()
    const triggerApply = $('.apply-section').offset().top + 300
    const triggerPlan = $('.plan-section').offset().top + 300
    if (scrollBottom > triggerApply) {
        phoneSwiper.autoplay.start();
    } else {
        phoneSwiper.autoplay.stop();
    }
    if (scrollBottom > triggerPlan) {
        $('.plan-section .icon-wrap').addClass('active')
    }
})

var init = false;

function swiperCard() {
    if (window.innerWidth <= 992) {
        if (!init) {
            init = true;
            supportSwiper = new Swiper(".supportSwiper", {
                slidesPerView: 4,
                spaceBetween: 10,
                breakpoints: {
                    // when window width is <= 320px     
                    320: {
                        slidesPerView: 2.5,
                        spaceBetween: 8,
                        centeredSlides: true,
                        loop: true
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    }
                }
            });
        }
    } else if (init) {
        supportSwiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);

let containerH = $('.bavepay-text').outerHeight() + $('.support-section').outerHeight()
let txtH = $('#word').outerHeight()
let maxNum = (containerH - txtH) * 1.1
gsap.fromTo('#word', {
    x: 1600,
}, {
    x: 1600,
    y: maxNum,
    scrollTrigger: {
        trigger: ".apply-section",
        start: "top top",
        end: containerH,
        scrub: 10,
        // markers: true
    }
},)