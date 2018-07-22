const Carousel = require('../src');
const test = require('ava');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM();
const window = dom.window;
const document = window.document;
global.document = document;

test('should be class', (t) => {
    t.truthy((/^class/).test(Carousel.toString()));
});

test('should accept 1 argument', (t) => {
    t.is(Carousel.length, 1);
});

test('should contain `position` prop in `options`', (t) => {
    const c = new Carousel({ $el: null });
    t.deepEqual(c.$el, null);
});

test('should be instance of HTMLElement', (t) => {
    const $el =  document.createElement('div');
    const c = new Carousel({ $el });
    t.true(c.$el instanceof window.HTMLElement);
});

test('should contain `images` prop in `options`', (t) => {
    const c = new Carousel({ images: [] });
    t.deepEqual(c.images, []);
});

test('should have render method', (t) => {
    const c = new Carousel({});
    t.is(typeof c.render, 'function');
});

test('should save active image index', (t) => {
    const c = new Carousel({ images: [] });

    t.is(c.activeImage, 1);
});

test('should render image', () => {

});



/*

[
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQrsFMM4KoSVhlCjT3S_v8eyHHrkRd1GImtU5eUysT24JsTxc',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlb_MMH2iUwPD9kCRTg5nUAlB2va6tjQimSr_BNFylMMWsO1ou',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8oFqRiz51wokFOGzv2PDpZ2VCWt9jajjNOc46KZNT6zUBsYf8g'
        ]

 */




