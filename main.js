const electron = require('electron');
const path = require('path');
const url = require('url');


require('electron-reload')(__dirname)


const app = electron.app; //Module to create native browser window
// Inter-Process Communication (IPC)
const ipcMain = electron.ipcMain


let mainWindow; // Global reference to window object
let splashWindow;

let createSplashWindow = () => {
  splashWindow = new BrowserWindow({
    width: 420,
    height: 340,
    frame: false,
    resizable: false,
    backgroundColor: '#FFF',
    alwaysOnTop: true,
    show: false
  });

  splashWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/views/splash.html'),
    protocol: 'file',
    slashes: true
  }))
  splashWindow.on('closed', () => {
    splashWindow = null
  })
  splashWindow.once('ready-to-show', () => {
    splashWindow.show()
    createWindow();
  })
}




// Menu Template definition
// let template = [{
//   label: 'Power',
//   submenu: [{
//     label: 'Sleep'
//   }, 
//   {
//     label: 'Shut Down'
//   }]
// }, {
//   label: 'About',
//   submenu: [{
//     label: 'Version'
//   }, {
//     label: 'Check for Update'
//   }]
// }]
// // Snippet to take care of Mac menu behaviour
// if (process.platform === 'darwin') {
//   const name = electron.app.getName()
//   template.unshift({
//     label: name,
//     submenu: [{
//       label: 'Quit',
//       accelerator: 'Command+Q',
//       click: function () {
//         app.quit()
//       }
//     }]
//   })
// }

const BrowserWindow = electron.BrowserWindow;


let createWindow = () => {
    mainWindow = new BrowserWindow({ 
      show: false,
      backgroundColor: '#fff',
      width: 1000, 
      height: 650 
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/views/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // mainWindow.webContents.openDevTools();

  

    // Wait for 'ready-to-show' to display our window
    // mainWindow.once('ready-to-show', () => {
    // mainWindow.show()
    // })
    
    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  });
}

const Menu = electron.Menu

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', ()=> {
  // const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(null)
  createSplashWindow()
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      createSplashWindow()
    }
  })
  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here

  //SPLASH WINDOW: REQUEST FOR VERSION
ipcMain.on('get-version', event => {
  console.log('app version: ', app.getVersion())
  event.sender.send('set-version', app.getVersion())
})

// MAIN WINDOW: FINISHED LOADING
ipcMain.on('app-init', event => {
  if (splashWindow) {
    setTimeout(() => {
      splashWindow.close()
    }, 2000)
  }
  mainWindow.show()
})