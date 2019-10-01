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

dom.uberApp.addEventListener('click', () => {
  ipcRenderer.send('create-uber-app')
  menuExtrasController.toggleMenu();
})

dom.browserApp.addEventListener('click', () => {
  ipcRenderer.send('create-browser-app')
  menuExtrasController.toggleMenu();
})

dom.timerApp.addEventListener('click', () => {
  ipcRenderer.send('create-timer-app')
  menuExtrasController.toggleMenu();
})

dom.videoApp.addEventListener('click', () => {
  ipcRenderer.send('create-video-app')
  menuExtrasController.toggleMenu();
})

dom.addTodoText.addEventListener('click', ()=> {
  ipcRenderer.send('create-keyboard-app', 'mainWindow');
})

ipcRenderer.on('reply', (event, arg) => {
  console.log(arg)
})

ipcRenderer.on('type', function(event, arg){
  dom.addTodoText.value += arg;
})