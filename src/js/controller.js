import * as model from './model.js';
import detailPaintView from './views/detailPaintView.js';
import paintView from './views/paintView.js';

const controlRenderDetails = function(arr) {
    arr.forEach(paint => detailPaintView.renderSlide(paint))
}

const controlHomePage = async function() {
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

const detailPaint = function(paName) {
    try {
        const homeSection = document.querySelector('.paints__container')
        homeSection.style.display = 'none';
        controlRenderDetails(model.artState.art)
    } catch (err) {
        console.error(err);
    }
}

const init = function() {
    paintView.addHandlerPage(controlHomePage);
};

init();