import * as model from './model.js';
import paintView from './views/paintView.js';

const controlHomePage = async function() {
    try {
        await model.loadAllPaints();
        paintView.renderPaint();
    } catch (err) {
        console.error();
    }
}

const init = function() {
    paintView.addHandlerPage(controlHomePage);
};

init();