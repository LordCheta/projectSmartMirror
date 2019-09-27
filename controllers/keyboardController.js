const dom = require('../views/base') // Object containing all DOM queries

window.onload = () => {
  // Keyboard Funtionalities
  console.log(dom.kswitch, dom.kswitch2)
  let keyboardSwitch = () => {
    console.log('here')
    dom.letters.classList.toggle('hide');
    dom.symbols.classList.toggle('hide');
  }
  dom.kswitch.onclick = keyboardSwitch;
  dom.kswitch2.onclick = keyboardSwitch;
}