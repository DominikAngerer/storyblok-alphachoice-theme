// lazy loading images + background images
import lazysizes from 'lazysizes'
document.addEventListener('lazybeforeunveil', function(e){
    var bg = e.target.getAttribute('data-lazy-background-image');
    if(bg){
        e.target.style.backgroundImage = 'url(' + bg + ')';
    }
});