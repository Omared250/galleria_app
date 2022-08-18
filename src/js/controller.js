import * as model from './model.js';
import detailPaintView from './views/detailPaintView.js';
import footerView from './views/footerView.js';
import paintView from './views/paintView.js';

const controlRenderDetails = function(arr) {
    arr.forEach(paint => detailPaintView.renderSlide(paint))
}

const homePage = async function() {
    try {
        paintView.renderPaint();
        await model.loadAllPaints();

        const parentEl = document.querySelector('.paints__container');
        const slideShow = document.querySelector('.header__button');
        const footerContain = document.querySelector('.footer__container');
        const slidesContain = document.querySelector('.slides__container');

        parentEl.addEventListener('click', (e) => {
            e.preventDefault();
            const paint = e.target.closest('.paint__preview').innerHTML;

            const newDom = document.createRange().createContextualFragment(paint);
            const paintName = newDom.querySelector('.paint__name').innerHTML;
            detailPaint(paintName);
            slideShow.innerHTML = 'stop slideshow';
        })

        slideShow.addEventListener('click', (e) => {
            e.preventDefault();
            const slideShowValue = slideShow.innerHTML;

            if (slideShowValue === 'start slideshow') {
                detailPaint('Starry Night');
                slideShow.innerHTML = 'stop slideshow';

            } else if (slideShowValue === 'stop slideshow') {
                parentEl.style.display = 'grid';
                slidesContain.style.display = 'none';
                slidesContain.innerHTML = ''
                footerContain.style.display = 'none';
                footerContain.innerHTML = ''
                slideShow.innerHTML = 'start slideshow'
            }
        })
    } catch (err) {
        console.error();
    }
}

const slider = function(numSlide) {
    const slides = document.querySelectorAll('.slide');

    const goToSlide = function(slide) {
        slides.forEach((s, i) =>
        s.style.transform = `translateX(${100 * (i - slide)}%)`)
    }
    goToSlide(numSlide);
}

const detailPaint = function(paName) {
    try {
        controlRenderDetails(model.artState.art)
        const showGalleryPicture = document.querySelector('.icon__link');
        const paintIndex = model.artState.art.findIndex(p => p.paintName === paName);
        
        const filterPaint = model.artState.art.filter((p, i) => {
            if (i === paintIndex) {
                return p;
            }
        })
        footerView.renderFooter(filterPaint[0]);

        slider(paintIndex);
        footerSlide(paintIndex);
    } catch (err) {
        console.error(err);
    }
}

const footerSlide = function(slidePosition) {
    try {
        const slides = document.querySelectorAll('.slide');
        const backwardSlide = document.querySelector('.button__slider__left');
        const forwardSlide = document.querySelector('.button__slider__right');
        const progressBar = document.querySelector('.footer__progress__bar');

        let curSlide = slidePosition;
        const maxSlide = slides.length;

        progressBar.style.width = `${((curSlide + 1) / maxSlide) * 100}%`

        // Next Slide
        const nextSlide = function() {
            if(curSlide === maxSlide - 1) {
                curSlide = 0;
            } else {
                curSlide++;
            }
            slider(curSlide);
        }
        
        // Prev Slide
        const prevSlide = function() {
            if (curSlide === 0) {
                curSlide = maxSlide - 1;
            } else {
                curSlide--;
            }
            slider(curSlide);
        }

        forwardSlide.addEventListener('click', e => {
            e.preventDefault();
            nextSlide();
            const paintFilter = model.artState.art.filter((p, i) => i === curSlide ? p : null)
            footerView.renderFooter(paintFilter[0]);
            footerSlide(curSlide);
        });

        backwardSlide.addEventListener('click', e => {
            e.preventDefault();
            prevSlide();
            const paintFilter = model.artState.art.filter((p, i) => i === curSlide ? p : null)
            footerView.renderFooter(paintFilter[0]);
            footerSlide(curSlide);
        });
        
    } catch (err) {
        console.error(err);
    }
}

const init = function() {
    paintView.addHandlerPage(homePage);
};

init();