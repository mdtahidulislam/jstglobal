(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        /*======================================
                        menu js
        ======================================*/
        if ($('.js-menu-bar-lines').length) {
            $('.js-menu-bar-lines').on('click', function () {
                $(this).toggleClass('active');
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

        /*======================================
                AOS animation
        ======================================*/
        AOS.init();
        /*======================================
                reveal text animation
        ======================================*/
        // const revealTextAnim = (thisElm) => {
        //     const tl = gsap.timeline();

        //     tl.from(thisElm, 1, {

        //         y: 100,
        //         ease: "power4.out",
        //         delay: 0.5,
        //         // skewY: 7,
        //         // stagger: {
        //         //     amount: 0.3
        //         // }
        //     });
        // }

        const revealSpltTextAnim = (thisElm) => {
            let revealText = document.querySelectorAll(thisElm);
            console.log(revealText)
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
                banner animation before
                start scrolling
        ======================================*/
        if ($('.js-section').length) {
            revealSpltTextAnim('.js-section .js-section-title span');
            fadeInUpAnim('.js-section .js-line', 0.8, 20, 0.8);
            fadeInUpAnim('.js-section .js-section-desc', 0.8, 20, 1.1);
        }
        /*======================================
                    scrollify section js
        ======================================*/
        

    });
}(jQuery));