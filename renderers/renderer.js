// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')
const dom = require('../views/base')

setTimeout(() => {
    ipcRenderer.send('app-init')
  }, 2000)

