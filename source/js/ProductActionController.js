import { updateQueryStringParam } from './Utils'

let selector = '.product__actions';

export default class ProductDetailSwiper {

  constructor(element) {
    this._element = element;
    
    let sizesSelect = this._element.querySelector('#sizes');
    let amazonAnchor = this._element.querySelector('[data-amazon-link]');

    sizesSelect.addEventListener('change', (event) => {
      amazonAnchor.setAttribute('href', event.currentTarget.value);
      let size = document.querySelector('[value="' + event.currentTarget.value + '"]').innerText.trim();
      if(size == 'small' || size == 'large') {
        updateQueryStringParam('size', size);
      } else {
        updateQueryStringParam('size');
      }
    })
  }

  static init() {
    let elements = document.querySelectorAll(selector)
    for (let index = 0, max = elements.length; index < max ; index++) {
      new this(elements[index]);
    }
  }
}