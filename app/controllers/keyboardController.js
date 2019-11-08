const dom = require('../views/base') // Object containing all DOM queries


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
    let keyPressed = e.target.value
    switch (keyPressed) {
      case "shift":
        return "";
      case "close":
        return "";
      case "capslock":
        return "";
      case null:
        return "";
      case "?123":
        return "";
      case "abc":
        return "";
      case "spacebar":
        return " ";
      case "tab":
        return "    ";
      case "enter":
        return "\n";
      case "backspace":
        return "backspace";
      case "mic":
          return "";
      case "↑":
          return "";
      case "→":
          return "";
      case "↓":
          return "";
      case "←":
          return "";
      default:
        return keyPressed;
    }
  }

  module.exports = {
    keyClick
  }

