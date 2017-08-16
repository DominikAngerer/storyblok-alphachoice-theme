import Swiper from 'swiper';

let selector = '.featured_products';

export default class FeaturedProductsSwiper {

  constructor(element) {
    this._element = element;
    this._swiper = new Swiper(element.querySelector('.swiper-container'), {
      // nextButton: element.querySelector('.'),
      spaceBetween: 0,
      slidesPerView: 1,
      speed: 800,
      loop: true,
      lazyLoading: true,
      autoplay: 2000
    });

  }

  static init() {
    let elements = document.querySelectorAll(selector)
    for (let index = 0, max = elements.length; index < max ; index++) {
      new this(elements[index]);
    }
  }
}