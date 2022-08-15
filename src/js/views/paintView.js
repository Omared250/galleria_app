class paint {
    _parentEl = document.querySelector('.paints__container');

    renderPaint() {
        const markup = this._generateMarkupPaint();
        this._parentEl.insertAdjacentHTML('beforeend', markup);
    }

    _generateMarkupPaint() {
        return `
        <div class="paint__preview grid_cell_1">
            <img class="paint__image" src="/src/images/art/starry-night/thumbnail.jpg" alt="thumbnail paint">
            <div class="paint__info">
                <h2 class="paint__name">Starry Night</h2>
                <h3 class="paint__artist">Vincent Van Gogh</h3>
            </div>
        </div>
        <div class="paint__preview grid_cell_2">
            <img class="paint__image" src="/src/images/art/girl-with-pearl-earring/thumbnail.jpg" alt="thumbnail paint">
            <div class="paint__info">
                <h2 class="paint__name">Girl with a Pearl Earring</h2>
                <h3 class="paint__artist">Johannes Vermeer</h3>
            </div>
        </div>
        <div class="paint__preview grid_cell_3">
            <img class="paint__image" src="/src/images/art/guernica/thumbnail.jpg" alt="thumbnail paint">
            <div class="paint__info">
                <h2 class="paint__name">Guernica</h2>
                <h3 class="paint__artist">Pablo Picasso</h3>
            </div>
        </div>
        <div class="paint__preview grid_cell_4">
            <img class="paint__image" src="/src/images/art/penitent-magdalene/thumbnail.jpg" alt="thumbnail paint">
            <div class="paint__info">
                <h2 class="paint__name">Penitent Magdalene</h2>
                <h3 class="paint__artist">Artemisa Gentileschi</h3>
            </div>
        </div>
        <div class="paint__preview grid_cell_5">
            <img class="paint__image" src="/src/images/art/the-storm-on-the-sea-of-galilee/thumbnail.jpg" alt="thumbnail paint">
            <div class="paint__info">
                <h2 class="paint__name">The Storm on the Sea of Galilee</h2>
                <h3 class="paint__artist">Rembrandt</h3>
            </div>
        </div>
        <div class="paint__preview grid_cell_6">
            <img class="paint__image" src="/src/images/art/the-great-wave-off-kanagawa/thumbnail.jpg" alt="thumbnail paint">
            <div class="paint__info">
                <h2 class="paint__name">The Great Wave off Kanagawa</h2>
                <h3 class="paint__artist">Hokusai</h3>
            </div>
        </div>
        <div class="paint__preview grid_cell_7">
            <img class="paint__image" src="/src/images/art/van-gogh-self-portrait/thumbnail.jpg" alt="thumbnail paint">
            <div class="paint__info">
                <h2 class="paint__name">Van Gogh self-portrait</h2>
                <h3 class="paint__artist">Vincent Van Gogh</h3>
            </div>
        </div>
        <div class="paint__preview grid_cell_8">
            <img class="paint__image" src="/src/images/art/the-sleeping-gypsy/thumbnail.jpg" alt="thumbnail paint">
            <div class="paint__info">
                <h2 class="paint__name">The Sleeping Gypsy</h2>
                <h3 class="paint__artist">Henri Rousseau</h3>
            </div>
        </div>
        <div class="paint__preview grid_cell_9">
            <img class="paint__image" src="/src/images/art/lady-with-an-ermine/thumbnail.jpg" alt="thumbnail paint">
            <div class="paint__info">
                <h2 class="paint__name">Lady with an Ermine</h2>
                <h3 class="paint__artist">Leonardo da Vinci</h3>
            </div>
        </div>
        <div class="paint__preview grid_cell_10">
            <img class="paint__image" src="/src/images/art/the-night-cafe/thumbnail.jpg" alt="thumbnail paint">
            <div class="paint__info">
                <h2 class="paint__name">The Night Café</h2>
                <h3 class="paint__artist">Vincent Van Gogh</h3>
            </div>
        </div>
        <div class="paint__preview grid_cell_11">
            <img class="paint__image" src="/src/images/art/the-basket-of-apples/thumbnail.jpg" alt="thumbnail paint">
            <div class="paint__info">
                <h2 class="paint__name">The Basket of Apples</h2>
                <h3 class="paint__artist">Paul Cézanne</h3>
            </div>
        </div>
        <div class="paint__preview grid_cell_12">
            <img class="paint__image" src="/src/images/art/the-boy-in-the-red-vest/thumbnail.jpg" alt="thumbnail paint">
            <div class="paint__info">
                <h2 class="paint__name">The Boy in the Red Vest</h2>
                <h3 class="paint__artist">Paul Cézanne</h3>
            </div>
        </div>
        <div class="paint__preview grid_cell_13">
            <img class="paint__image" src="/src/images/art/arnolfini-portrait/thumbnail.jpg" alt="thumbnail paint">
            <div class="paint__info">
                <h2 class="paint__name">Arnolfini Portrait</h2>
                <h3 class="paint__artist">Jan Van Eyck</h3>
            </div>
        </div>
        <div class="paint__preview grid_cell_14">
            <img class="paint__image" src="/src/images/art/mona-lisa/thumbnail.jpg" alt="thumbnail paint">
            <div class="paint__info">
                <h2 class="paint__name">Mona Lisa</h2>
                <h3 class="paint__artist">Leonardo da Vinci</h3>
            </div>
        </div>
        <div class="paint__preview grid_cell_15">
            <img class="paint__image" src="/src/images/art/the-swing/thumbnail.jpg" alt="thumbnail paint">
            <div class="paint__info">
                <h2 class="paint__name">The Swing</h2>
                <h3 class="paint__artist">Jean-Honoré Fragonard</h3>
            </div>
        </div>`
    }
}

export default new paint();