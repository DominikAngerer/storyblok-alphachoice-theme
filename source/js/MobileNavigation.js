let selector = '.header__open_mobile';

export default class MobileNavigation {

  constructor(element) {
    this._element = element;
    this._header = document.querySelector('.header')
    this._mobile_header = document.querySelector('.mobile_header')
    this._element.addEventListener('click', () => {
      this._mobile_header.classList.toggle('uk-hidden')
      this._header.classList.toggle('header--mobile-open')
    })
    
    window.onresize = (event) => {
      if(!this._mobile_header.classList.contains('uk-hidden')) {
        this._mobile_header.classList.add('uk-hidden')
        this._header.classList.remove('header--mobile-open')
      }
    }
  }

  static init() {
    let elements = document.querySelectorAll(selector)
    for (let index = 0, max = elements.length; index < max ; index++) {
      new this(elements[index]);
    }
  }
}


