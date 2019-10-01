const { ipcRenderer } = require('electron')
const dom = require('../views/base');
const keyboardController = require('../controllers/keyboardController');

let closeKeyBoard = ()=> {
  ipcRenderer.send('keyboard-closed');
}
dom.closeKeyboard.addEventListener('click', closeKeyBoard)

ipcRenderer.on('reply', (event, args) => {
  console.log(args)
  dom.keyboard.addEventListener('click', (e) => {
    ipcRenderer.sendTo(Number(args), 'type', e.target.value);
  })
});

