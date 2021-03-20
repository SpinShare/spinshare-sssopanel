const { app, protocol, BrowserWindow, ipcMain, dialog, globalShortcut } = require('electron');
const isDevelopment = process.env.NODE_ENV !== 'production';
const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');
const UserSettings = require("@/modules/module.usersettings.js");
let userSettings = new UserSettings();

let winScreen;
let winControls;

function createWindow () {
    winScreen = new BrowserWindow({
        title: "Screen",
        width: 1286,
        height: 749,
        resizable: false,
        backgroundColor: '#191923',
        show: false,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        }
    });

    winControls = new BrowserWindow({
        title: "Controls",
        width: 456,
        height: 749,
        resizable: false,
        backgroundColor: '#121212',
        show: false,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        }
    });

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        winScreen.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
        winControls.loadURL(process.env.WEBPACK_DEV_SERVER_URL + "#/controls");

        if (!process.env.IS_TEST) {
            winScreen.webContents.openDevTools();
            winControls.webContents.openDevTools();
        }
    } else {
        createProtocol('app');

        winScreen.loadURL('app://./index.html');
        winControls.loadURL('app://./index.html#controls');
    }

    winScreen.setMenuBarVisibility(false);
    winControls.setMenuBarVisibility(false);

    winScreen.on('closed', () => {
        winScreen = null;
    });
    winControls.on('closed', () => {
        winControls = null;
    });

    winScreen.on('ready-to-show', () => {
        winScreen.show();
        winScreen.focus();
    });
    winControls.on('ready-to-show', () => {
        winControls.show();
        winControls.focus();
    });
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

app.on('ready', async () => {
    createWindow();

    globalShortcut.register('Alt+Enter', () => {
        winScreen.setFullScreen(!winScreen.isFullScreen());
    });

    startFilewatcher(userSettings.get('snipJsonLocation'));
});

if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', data => {
            if (data === 'graceful-exit') {
                app.quit();
            }
        });
    } else {
        process.on('SIGTERM', () => {
            app.quit();
        });
    }
}

// Events
ipcMain.on("change-state", (event, ipcData) => {
    winScreen.webContents.send("change-state", ipcData);
    winControls.webContents.send("change-state", ipcData);
});

// Countdown
ipcMain.on("update-countdownData", (event, ipcData) => {
    winScreen.webContents.send("update-countdownData", ipcData);
    winControls.webContents.send("update-countdownData", ipcData);
});

// Brackets
ipcMain.on("update-bracketsData", (event, ipcData) => {
    winScreen.webContents.send("update-bracketsData", ipcData);
    winControls.webContents.send("update-bracketsData", ipcData);
});

// PlayerData
let playerData = {};
ipcMain.on("update-playerData", (event, ipcData) => {
    playerData = ipcData;

    winScreen.webContents.send("update-playerData", ipcData);
    winControls.webContents.send("update-playerData", ipcData);
});
ipcMain.on("get-playerData", (event, ipcData) => {
    winScreen.webContents.send("update-playerData", playerData);
    winControls.webContents.send("update-playerData", playerData);
});

// OBS Remote
ipcMain.on("connect-obsremote", (event, ipcData) => {
    winScreen.webContents.send("connect-obsremote", ipcData);
    winControls.webContents.send("connect-obsremote", ipcData);
});
ipcMain.on("change-playerAudio", (event, ipcData) => {
    winScreen.webContents.send("change-playerAudio", ipcData);
    winControls.webContents.send("change-playerAudio", ipcData);
});

// Streams
ipcMain.on("start-streams", (event, ipcData) => {
    winScreen.webContents.send("start-streams");
    winControls.webContents.send("start-streams");
});
ipcMain.on("stop-streams", (event, ipcData) => {
    winScreen.webContents.send("stop-streams");
    winControls.webContents.send("stop-streams");
});

// End of Tournament
ipcMain.on("update-endoftournamentdata", (event, ipcData) => {
    winScreen.webContents.send("update-endoftournamentdata", ipcData);
    winControls.webContents.send("update-endoftournamentdata", ipcData);
});

// Snip Filewatcher
let snipFilewatcher = null;
let snipTitle = "";
let snipAuthor = "";
function startFilewatcher(snipFile) {
    if(snipFile != "" || snipFile != undefined) {
        loadSnipFile(snipFile);
        snipFilewatcher = fs.watchFile(snipFile, (curr, prev) => {
            loadSnipFile(snipFile);
        });
    }
}
function loadSnipFile(fileLocation) {
    if(fileLocation != "" || fileLocation != undefined) {
        console.log(fileLocation);
        let rawData = fs.readFileSync(fileLocation);
        let snipData = JSON.parse(rawData);

        snipTitle = snipData.name;
        snipAuthor = snipData.artists[0].name;

        winScreen.webContents.send("update-snipData", {
            title: snipTitle,
            author: snipAuthor
        });
        winControls.webContents.send("update-snipData", {
            title: snipTitle,
            author: snipAuthor
        });
    }
}
ipcMain.on('get-snipData', (event, data) => {
    winScreen.webContents.send("update-snipData", {
        title: snipTitle,
        author: snipAuthor
    });
    winControls.webContents.send("update-snipData", {
        title: snipTitle,
        author: snipAuthor
    });
});
ipcMain.on('reload-filewatcher', (event, data) => {
    startFilewatcher(data.path);
});