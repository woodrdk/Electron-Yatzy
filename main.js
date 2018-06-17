// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

let mainWindow // global reference of the window object this prevents it from being auto closed

function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 600}) // creates and defines my browser window
    mainWindow.loadFile('index.html') // load the index.html in the app.

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// This method will be called when Electron has finished initialization and is ready to create browser windows.
app.on('ready', createWindow)

      // This allows the app to quit when all windows are closed.
app.on('window-all-closed', function () { // to close in windows
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () { // to close in ios
  if (mainWindow === null) {
    createWindow()
  }
})

