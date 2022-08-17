class footerView {
    _parentEl = document.querySelector('.footer__container');
    _data;

    renderFooter() {

    }

    _generateFooterMarkup() {
        return `
        <div class="footer__paint__details">
            <h2 class="footer_paint_name">Omar</h2>
            <h3 class="footer_paint_artist">Ascanio</h3>
        </div>
        <div class="sliders">
            
        </div>
        `
    }
}

export default new footerView();