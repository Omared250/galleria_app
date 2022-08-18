class modalView {
    _parentEl = document.querySelector('.modal');
    _overlay = document.querySelector('.overlay');
    _data;

    renderModal(data) {
        this._data = data;

        this._clearModal();
        const markup = this._generateMarkupModal();
        this._parentEl.classList.remove('hidden');
        this._overlay.classList.remove('hidden');
        this._parentEl.insertAdjacentHTML('beforeend', markup);

        this._closeModal();
    }

    _closeModal() {
        this._overlay.addEventListener('click', (e) => {
            e.preventDefault();
            this._clearModal();
            this._parentEl.classList.add('hidden');
            this._overlay.classList.add('hidden');
        })
    }

    _clearModal() {
        this._parentEl.innerHTML = '';
    }

    _generateMarkupModal() {
        return `
        <img class="modal__image" src="${this._data.paintGalleryImg}" alt="galleria picture">`
    }
}

export default new modalView();