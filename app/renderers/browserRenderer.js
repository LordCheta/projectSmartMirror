const { ipcRenderer } = require('electron')
const dom = require('../views/base')


  dom.body.addEventListener('click', (e)=> {
    if (e.target.id === 'urlInput') { 
      ipcRenderer.send('create-keyboard-app', 'browserAppWindow');
  }});
  
  ipcRenderer.on('type', function(event, arg){
    if (arg === "backspace") {
      document.querySelector('#urlInput').value = 
      document.querySelector('#urlInput').value.slice(0, document.querySelector('#urlInput').value.length - 1);
    }
    else document.querySelector('#urlInput').value += arg;
  });

