// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')
const dom = require('../views/base')

setTimeout(() => {
    ipcRenderer.send('app-init')
  }, 2000)

dom.musicApp.addEventListener('click', () => {
  ipcRenderer.send('create-music-app')
})

dom.galleryApp.addEventListener('click', () => {
  ipcRenderer.send('create-gallery-app')
})

dom.uberApp.addEventListener('click', () => {
  ipcRenderer.send('create-uber-app')
})

dom.browserApp.addEventListener('click', () => {
  ipcRenderer.send('create-browser-app')
})

dom.timerApp.addEventListener('click', () => {
  ipcRenderer.send('create-timer-app')
})

dom.videoApp.addEventListener('click', () => {
  ipcRenderer.send('create-video-app')
})