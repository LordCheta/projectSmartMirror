const { ipcRenderer } = require('electron')
const dom = require('../views/base')


  dom.addTodoText.addEventListener('click', (e)=> {
    ipcRenderer.send('create-keyboard-app', 'calendarWindow');
  });
  
  ipcRenderer.on('type', function(event, arg){
    if (arg === "backspace") {
      dom.addTodoText.value = 
      dom.addTodoText.value.slice(0, dom.addTodoText.value.length - 1);
    }
    else dom.addTodoText.value += arg;
  });

  document.getElementById('close').addEventListener('click', ()=>{
    ipcRenderer.send('keyboard-closed');
  })
  document.getElementById('submit').addEventListener('click', ()=>{
    ipcRenderer.send('keyboard-closed');
  })