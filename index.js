
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
app.on('ready', function () {
   new BrowserWindow();
    const menuTemplate = [
        {
            label: 'Electron',
            
            submenu: [
                {
                    label: 'About ...',
                    click: () => {
                        console.log('About Clicked');
                    }
                }
            ]
        }
    ];
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
});

