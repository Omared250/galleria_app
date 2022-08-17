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

        parentEl.addEventListener('click', (e) => {
            e.preventDefault();
            const paint = e.target.closest('.paint__preview').innerHTML;

            const newDom = document.createRange().createContextualFragment(paint);
            const paintName = newDom.querySelector('.paint__name').innerHTML;
            detailPaint(paintName);
        })
    } catch (err) {
        console.error();
    }
}

const slider = function(numSlide) {
    const slides = document.querySelectorAll('.slide');

    // let curSlide = numSlide;
    // const maxSlide = slides.length;

    const goToSlide = function(slide) {
        slides.forEach((s, i) =>
        s.style.transform = `translateX(${100 * (i - slide)}%)`)
    }
    goToSlide(numSlide);
    // // Next Slide
    // const nextSlide = function() {
    //     if(curSlide === maxSLide - 1) {
    //         curSlide = 0;
    //     } else {
    //         curSlide++;
    //     }

    //     goToSlide(curSlide);
    // }

    // // Prev Slide
    // const prevSlide = function() {
    //     if (curSlide === 0) {
    //         curSlide = maxSLide - 1;
    //     } else {
    //         curSlide--;
    //     }

    //     goToSlide(curSlide);
    // }
}

const detailPaint = function(paName) {
    try {
        const homeSection = document.querySelector('.paints__container')
        homeSection.style.display = 'none';

        controlRenderDetails(model.artState.art)
        footerView.renderFooter();

        const paintIndex = model.artState.art.findIndex(p => p.paintName === paName);
        console.log(paintIndex);
        slider(paintIndex);
    } catch (err) {
        console.error(err);
    }
}

const footerSlide = function() {
    try {
        
    } catch (err) {
        console.error(err);
    }
}

const init = function() {
    paintView.addHandlerPage(homePage);
};

init();