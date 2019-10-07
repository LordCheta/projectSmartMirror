const dom = require('../views/base');

let display = (() => {
  dom.images.forEach(item => item.addEventListener('click', (e)=> {
    //click on open image to close
    if (dom.overlay.classList.contains('open')){
      dom.overlay.classList.remove('open')
    }else {
      const src = e.target.src;
      dom.overlayImage.src = src;
      dom.overlay.classList.add('open');
    }
  }))
})();

dom.overlayClose.addEventListener('click', () => {
  dom.overlay.classList.remove('open')
})
