const { app, BrowserWindow, screen } = require('electron');


function createWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    
    const win = new BrowserWindow({
        width: 150,
        height: 70,
        frame: false,
        resizable: false,
        transparent: true,
        alwaysOnTop: false,
        skipTaskbar: true,
        x: width - 170, // Position at top right
        y: 10, // Position near top
        hasShadow: false,
        backgroundColor: '#00000000',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    
    // Load the HTML file
    win.loadFile('popup.html');
    
    // Make the window click-through
    win.setIgnoreMouseEvents(true);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
