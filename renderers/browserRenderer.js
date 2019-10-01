const { ipcRenderer } = require('electron')
const dom = require('../views/base')


  dom.body.addEventListener('click', (e)=> {
    if (e.target.id === 'urlInput') { 
      ipcRenderer.send('create-keyboard-app', 'browserAppWindow');
  }});
  
  ipcRenderer.on('type', function(event, arg){
    console.log(arg,'hgghg')
    document.querySelector('#urlInput').value += arg;
  })

