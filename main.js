// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const Menu = electron.Menu;
let mainWindow // global reference of the window object this prevents it from being auto closed
app.on('ready', function () {
  new BrowserWindow();
   const menuTemplate = [
       {
           label: 'Electron'
       }
   ];
   const menu = Menu.buildFromTemplate(menuTemplate);
   Menu.setApplicationMenu(menu);
});
function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 800, icon: 'images/dice.ico'}) // creates and defines my browser window
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


const Menu = app.Menu;
const menuTemplate = [
  {
      label: 'File',
      submenu: [
          {
              label: 'About ...',
              click: () => {
                  console.log('About Clicked');
              }
          }, {
              type: 'separator'
          }, {
              label: 'Quit',
              click: () => {
                  app.quit();
              }
          }
      ]
  }
];
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
});