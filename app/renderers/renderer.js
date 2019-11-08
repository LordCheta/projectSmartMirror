// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')
const dom = require('../views/base')
const menuExtrasController = require('../controllers/menuExtrasController');

dom.musicApp.addEventListener('click', () => {
  ipcRenderer.send('create-music-app')
  menuExtrasController.toggleMenu();
})

dom.galleryApp.addEventListener('click', () => {
  ipcRenderer.send('create-gallery-app')
  menuExtrasController.toggleMenu();
})

dom.browserApp.addEventListener('click', () => {
  ipcRenderer.send('create-browser-app')
  menuExtrasController.toggleMenu();
})

dom.videoApp.addEventListener('click', () => {
  ipcRenderer.send('create-video-app')
  menuExtrasController.toggleMenu();
})

dom.calendarApp.addEventListener('click', () => {
  ipcRenderer.send('create-calendar-app')
  menuExtrasController.toggleMenu();
})

// for mainWindow
dom.addTodoText.addEventListener('click', ()=> {
  ipcRenderer.send('create-keyboard-app', 'mainWindow');
})

ipcRenderer.on('type', function(event, arg){
  if (arg === "backspace") dom.addTodoText.value = dom.addTodoText.value.slice(0, dom.addTodoText.value.length - 1);
  else dom.addTodoText.value += arg;
})



