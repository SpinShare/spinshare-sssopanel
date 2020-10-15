const { app, protocol, BrowserWindow, ipcMain, dialog, globalShortcut } = require('electron');
const isDevelopment = process.env.NODE_ENV !== 'production';
const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');

let winScreen;
let winControls;

function createWindow () {
    winScreen = new BrowserWindow({
        title: "Screen",
        width: 1286,
        height: 749,
        resizable: false,
        backgroundColor: '#121212',
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