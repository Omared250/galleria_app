class footerView {
    _parentEl = document.querySelector('.footer__container');
    _data;

    renderFooter() {
        const markup = this._generateFooterMarkup();
        this._parentEl.style.display = 'flex';
        this._parentEl.insertAdjacentHTML('beforeend', markup);
    }

    _generateFooterMarkup() {
        return `
        <span class="footer__progress__bar"></span>
        <div class="footer__paint__details">
            <h2 class="footer_paint_name">Starry Night</h2>
            <h3 class="footer_paint_artist">Vincent Van Gogh</h3>
        </div>
        <div class="sliders">
            <img class="button__slider__left" src="./src/images/icons/icon-backward.png" alt="previews image button">
            <img class="button__slider__right" src="./src/images/icons/icon-forward.png" alt="next image button">
        </div>
        `
    }
}

export default new footerView();