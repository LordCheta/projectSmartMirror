const dom = require('../views/base') // Object containing all DOM queries

window.onload = () => {
  // Keyboard Funtionalities
  let keyboardSwitch = () => {
    dom.letters.classList.toggle('hide');
    dom.symbols.classList.toggle('hide');
  };
  dom.kswitch.onclick = keyboardSwitch;
  dom.kswitch2.onclick = keyboardSwitch;

  let capsLock = () => {
    dom.capsLock.classList.toggle('activeCapsLock');
    dom.capitalLetters.forEach(element => {
      element.classList.toggle('hide');
    });
    dom.smallLetters.forEach(element => {
      element.classList.toggle('hide');
    });
  }
  dom.capsLock.onclick = capsLock;

  let keyClick = (e) => {
    console.log(e.target.value || '');
    return e.target.value;
  }
  dom.keyboard.onclick = keyClick;
}
