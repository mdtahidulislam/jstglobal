(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        /*======================================
                        menu js
        ======================================*/
        if ($('.js-menu-bar-lines').length) {
            $('.js-menu-bar-lines').on('click', function () {
                $(this).toggleClass('active');
                $('.js-mobile-menu-area').toggleClass('active');
                revealSpltTextAnim('.mobile-menu li a');
                if ($(this).hasClass('active')) {
                    $(this).removeClass('close');
                    $(this).parent('.menu-bar-btn').css({
                        'border': '1px solid rgba(255, 255, 255, 0.8)'
                    })
                } else {
                    $(this).addClass('close');
                    $(this).parent('.menu-bar-btn').css({
                        'border': '1px solid rgba(255, 255, 255, 0)'
                    })
                }
            });
        }

        /**
         * On Scroll Sticky Menu
        */
        // function stickyMenu() {
        //     if ($(window).scrollTop() > 300) {
        //         $('.js-header').addClass('!fixed');
        //         $('.js-header-nav').addClass('hidden');
        //         $('.js-menu-bar-btn').addClass('!block');
        //     } else {
        //         $('.js-header').removeClass('!fixed');
        //         $('.js-header-nav').removeClass('hidden');
        //         $('.js-menu-bar-btn').removeClass('!block');
        //     }
        // }
        // $(window).on('load', function () {
        //     stickyMenu();
        // });
        // $(window).scroll(function () {
        //     stickyMenu();
        // });



        /*======================================
                AOS animation
        ======================================*/
        AOS.init();

        /*======================================
                reveal text animation
        ======================================*/
        const revealSpltTextAnim = (thisElm) => {
            let revealText = document.querySelectorAll(thisElm);
            let results = Splitting({ target: thisElm, by: "lines" });

            results.forEach((splitResult) => {
                const wrappedLines = splitResult.lines.map(
                    (wordsArr) => `
                        <span class="mask block overflow-hidden">
                            <div class="words">
                                ${wordsArr.map(
                        (word) => `${word.outerHTML}<span class="whitespace"> </span>`
                    )
                            .join("")}
                            </div>
                        </span>`
                )
                    .join("");
                splitResult.el.innerHTML = wrappedLines;
            });

            let revealLines = revealText.forEach((element) => {
                const lines = element.querySelectorAll(".mask .words");

                let tl = gsap.timeline();
                tl.set(revealText, { autoAlpha: 1 });
                tl.from(lines, 0.5, {
                    yPercent: 90,
                    ease: Power4.out,
                    delay: 0.5
                });
            });
        }

        /*======================================
                fadeInUp text animation
        ======================================*/
        const fadeInUpAnim = (thisElm, duration, fromYoffset, toDelay) => {
            gsap.fromTo(thisElm, duration, { autoAlpha: 0, y: fromYoffset }, { autoAlpha: 1, y: 0, delay: toDelay });
        }
        /*======================================
                banner animation 
        ======================================*/
        if ($('.js-section').length) {
            // mousemove parallax bg & text
            // parallaxAnim();

            if ($('.js-section-title span').length) {
                revealSpltTextAnim('.js-section-title span');
            }
            if ($('.js-btn').length) {
                fadeInUpAnim('.js-section .js-btn', 0.8, 20, 0.8);
            }
            if ($('.js-line').length) {
                fadeInUpAnim('.js-section .js-line', 0.8, 20, 0.8);
            }
            if ($('.js-section-desc').length) {
                fadeInUpAnim('.js-section .js-section-desc', 0.8, 20, 1.1);
            }
        }


    });
}(jQuery));