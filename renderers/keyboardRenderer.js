const { ipcRenderer } = require('electron')
const dom = require('../views/base');
const keyboardController = require('../controllers/keyboardController');

//get all input fields
let closeKeyBoard = ()=> {
  console.log('close')
  // ipcRenderer.send('closed');
}
dom.closeKeyboard.onclick = closeKeyBoard;

console.log('atta')
