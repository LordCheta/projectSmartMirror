const electron = require('electron');
const path = require('path');
const url = require('url');


require('electron-reload')(__dirname)


const app = electron.app; //Module to create native browser window
// Inter-Process Communication (IPC)
const ipcMain = electron.ipcMain


let mainWindow // Global reference to window object
let splashWindow
let musicPlayerAppWindow
let galleryAppWindow
let browserAppWindow
let videoAppWindow
let keyboardWindow
let calendarWindow


const BrowserWindow = electron.BrowserWindow;

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

    mainWindow.webContents.openDevTools();

  

    // Wait for 'ready-to-show' to display our window, should not be included when splah screen logic is active
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

let createMusicPlayerAppWindow = () => {
  musicPlayerAppWindow = new BrowserWindow({ 
    show: false,
    backgroundColor: 'cyan',
    width: 600,
    height: 200,
    resizable: false
  }); 

  musicPlayerAppWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/views/musicPlayer.html'),
    protocol: 'file:',
    slashes: true
  }));

  musicPlayerAppWindow.webContents.openDevTools();



// Wait for 'ready-to-show' to display our window, should not be included when splah screen logic is active
  musicPlayerAppWindow.once('ready-to-show', () => {
  musicPlayerAppWindow.show()
  
})

// Emitted when the window is closed.
  musicPlayerAppWindow.on('closed', function () {
// Dereference the window object, usually you would store windows
// in an array if your app supports multi windows, this is the time
// when you should delete the corresponding element.
  musicPlayerAppWindow = null
  });
}

let createGalleryAppWindow = () => {
  galleryAppWindow = new BrowserWindow({ 
    show: false,
    backgroundColor: 'cyan',
    width: 800, 
    height: 450,
  }); 

  galleryAppWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/views/gallery.html'),
    protocol: 'file:',
    slashes: true
  }));

  // galleryAppWindow.webContents.openDevTools();



// Wait for 'ready-to-show' to display our window, should not be included when splah screen logic is active
  galleryAppWindow.once('ready-to-show', () => {
  galleryAppWindow.show()
})

// Emitted when the window is closed.
  galleryAppWindow.on('closed', function () {
// Dereference the window object, usually you would store windows
// in an array if your app supports multi windows, this is the time
// when you should delete the corresponding element.
  galleryAppWindow = null
  });
  galleryAppWindow.webContents.openDevTools();
}

let createBrowserAppWindow = () => {
  browserAppWindow = new BrowserWindow({ 
    show: false,
    backgroundColor: 'cyan',
    width: 800, 
    height: 450,
  }); 

    // remove 'x-frame-options' header to allow embedding external pages into an 'iframe'
    browserAppWindow.webContents.session.webRequest.onHeadersReceived({}, (details, callback) => {
      if(details.responseHeaders['x-frame-options']) {
          delete details.responseHeaders['x-frame-options']
      }

      if(details.responseHeaders['X-Frame-Options']) {
        delete details.responseHeaders['X-Frame-Options']
    }
      callback({ cancel: false, responseHeaders: details.responseHeaders });
    });

  browserAppWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/views/browser.html'),
    protocol: 'file:',
    slashes: true
  }));

  browserAppWindow.webContents.openDevTools();

// Wait for 'ready-to-show' to display our window, should not be included when splah screen logic is active
  browserAppWindow.once('ready-to-show', () => {
  browserAppWindow.show()
})

// Emitted when the window is closed.
  browserAppWindow.on('closed', function () {
// Dereference the window object, usually you would store windows
// in an array if your app supports multi windows, this is the time
// when you should delete the corresponding element.
  browserAppWindow = null
  });
}

let createVideoAppWindow = () => {
  videoAppWindow = new BrowserWindow({ 
    show: false,
    backgroundColor: 'cyan',
    width: 800, 
    height: 500, 
  }); 

  videoAppWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/views/video.html'),
    protocol: 'file:',
    slashes: true
  }));

  // videoAppWindow.webContents.openDevTools();



// Wait for 'ready-to-show' to display our window, should not be included when splah screen logic is active
  videoAppWindow.once('ready-to-show', () => {
  videoAppWindow.show()
})

// Emitted when the window is closed.
  videoAppWindow.on('closed', function () {
// Dereference the window object, usually you would store windows
// in an array if your app supports multi windows, this is the time
// when you should delete the corresponding element.
  videoAppWindow = null
  });
}

let createKeyboardWindow = () => {
  keyboardWindow = new BrowserWindow({
    width: 850,
    height: 400,
    frame: false,
    resizable: false,
    
    alwaysOnTop: true,
    show: false,
    transparent: true
  });

  keyboardWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/views/keyboard.html'),
    protocol: 'file',
    slashes: true
  }))
  keyboardWindow.on('closed', () => {
    keyboardWindow = null
  })
  keyboardWindow.once('ready-to-show', () => {
    keyboardWindow.show()
    
  })
  keyboardWindow.webContents.openDevTools();
}

let createCalendarWindow = () => {
  calendarWindow = new BrowserWindow({ 
    show: false,
    backgroundColor: 'cyan',
    width: 1200, 
    height: 550,
  }); 

  calendarWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/views/calendar.html'),
    protocol: 'file:',
    slashes: true
  }));

  // calendarWindow.webContents.openDevTools();



// Wait for 'ready-to-show' to display our window, should not be included when splah screen logic is active
  calendarWindow.once('ready-to-show', () => {
  calendarWindow.show()
})

// Emitted when the window is closed.
  calendarWindow.on('closed', function () {
// Dereference the window object, usually you would store windows
// in an array if your app supports multi windows, this is the time
// when you should delete the corresponding element.
  calendarWindow = null
  });
}

// ---------------------END OF WINDOW CREATION INITIALIZATION---------------------------------->

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

// MUSIC PLAYER
ipcMain.on('create-music-app', event => {
  if (musicPlayerAppWindow) return;
  createMusicPlayerAppWindow();
})

// GALLERY APP
ipcMain.on('create-gallery-app', event => {
  if (galleryAppWindow) return;
  createGalleryAppWindow();
})

// BROWSER APP
ipcMain.on('create-browser-app', event => {
  if (browserAppWindow) return;
  createBrowserAppWindow();
})

// TIMER APP
ipcMain.on('create-timer-app', event => {
  if (timerAppWindow) return;
  createTimerAppWindow();
})

// CALENDAR 
ipcMain.on('create-calendar-app', event => {
  if (calendarWindow) return;
  createCalendarWindow();
})

// VIDEO APP
ipcMain.on('create-video-app', event => {
  if (videoAppWindow) return;
  createVideoAppWindow();
})

// KEYBOARD APP
ipcMain.on('create-keyboard-app', (event, args) => {
  if(keyboardWindow) return;
  createKeyboardWindow()
  let mainWid = eval(args).webContents.id;
  keyboardWindow.webContents.on('did-finish-load', ()=> {
    keyboardWindow.webContents.send('reply', mainWid);
  })
})

ipcMain.on('keyboard-closed', event => {
  keyboardWindow.close()
})