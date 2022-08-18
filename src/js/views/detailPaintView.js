class detailPaint {
    _paintParentEl = document.querySelector('.slides__container');
    _homeSection = document.querySelector('.paints__container')
    _slidesPage = document.querySelector('.slides__container');
    _data;

    renderSlide(data) {
        this._data = data;

        this._homeSection.style.display = 'none';
        this._slidesPage.style.display = 'flex'

        const markup = this._generateSlideMarkup();
        this._paintParentEl.insertAdjacentHTML('beforeend', markup);        
    }

    _generateSlideMarkup() {
        return `
        <section class="slide">
            <div class="paint__view">
                <img class="slide_large_img" src="${this._data.paintLargeImg}" alt="${this._data.paintName} large">
                <img class="slide_small_img" src="${this._data.paintSmallImg}" alt="${this._data.paintName} large">
                <div class="icon__link">
                    <img class="icon__img" src="./src/images/icons/icon-view.png" alt="icon view">
                    <p class="view_link">VIEW IMAGE</p>
                </div>
            </div>
            <div class="paint_title">
                <div class="paint__details">
                    <h2 class="detail_paint_name">${this._data.paintName}</h2>
                    <h3 class="detail_paint_artist">${this._data.artistName}</h3>
                </div>
                <img class="artist__img" src="${this._data.artistPicture}" alt="artist">
            </div>
            <div class="paint__description_container">
                <h4 class="paint__year">${this._data.paintYear}</h4>
                <p class="paint__description">${this._data.paintDescription}</p>
                <a class="paint_description_link" href="${this._data.paintSource}">GO TO SOURCE</a>
            </div>
        </section>`
    }
}

export default new detailPaint();