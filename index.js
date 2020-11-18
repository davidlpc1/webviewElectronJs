const { app, BrowserWindow , globalShortcut} = require('electron')
const config = require('./config')

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle:'hidden',
    alwaysOnTop:true,
    webPreferences: {
      nodeIntegration: true
    },
  })

  win.loadURL(config.url)
  console.log(`Pay attention your aplication is running in ${config.url} ??`)
}

function toogleDevTools () {
  win.webContents.toggleDevTools();
}

function createShortcut(){
  globalShortcut.register('CmdOrCtrl+I',toogleDevTools);
}

app.whenReady()
  .then(createWindow)
  .then(createShortcut)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {    
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})