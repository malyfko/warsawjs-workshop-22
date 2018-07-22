class Carousel {
    constructor(options) {
        this.$el = options.$el;
        this.images = options.images;
        this.activeImage = 1;
    }

    render() {
        const $image = document.createElement('img');
        $image.src = this.images[this.activeImage];

        this.$el.appendChild($image);
    }
}

module.exports = Carousel;
