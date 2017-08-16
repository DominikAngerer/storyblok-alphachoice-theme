import Swiper from 'swiper';

let selector = '.product';

export default class ProductDetailSwiper {

  constructor(element) {
    this._element = element;
    this._swiper = new Swiper(element.querySelector('.swiper-container'), {
      spaceBetween: 0,
      slidesPerView: 2,
      speed: 800,
      loop: true,
      lazyLoading: true,
      autoplay: 2000,
      breakpoints: {
      // when window width is <= 640px
      1780: {
        slidesPerView: 1
      }
    }
    });

  }

  static init() {
    let elements = document.querySelectorAll(selector)
    for (let index = 0, max = elements.length; index < max ; index++) {
      new this(elements[index]);
    }
  }
}