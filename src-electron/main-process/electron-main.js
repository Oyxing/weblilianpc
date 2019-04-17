import { app, BrowserWindow, Menu } from 'electron'


/**
 * Set `__statics` path to static files in production;
 * The reason we are setting it here is that the path needs to be evaluated at runtime
 */
if (process.env.PROD) {
    global.__statics = require('path').join(__dirname, 'statics').replace(/\\/g, '\\\\')
}

let mainWindow

function createWindow() {
    /**
     * Initial window options
     */
    Menu.setApplicationMenu(null)
    mainWindow = new BrowserWindow({
        width: 1298,
        height: 700,
        useContentSize: true,
        webPreferences: {
            webSecurity: false
        }
        //边框显示
        // frame: false,
    })
    mainWindow.loadURL(process.env.APP_URL)

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})