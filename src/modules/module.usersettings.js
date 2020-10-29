const { app, electron, remote } = require('electron');
const path = require('path');
const fs = require('fs');

class UserSettings {
  constructor() {
    let defaults = {
    };

    let userDataPath = "";
    if(remote == undefined) {
      userDataPath = app.getPath('userData');
    } else {
      userDataPath = remote.app.getPath('userData');
    }

    this.path = path.join(userDataPath, 'UserSettings.json');
    this.data = parseDataFile(this.path, defaults);
  }
  
  get(key) {
    return this.data[key];
  }
  
  set(key, val) {
    this.data[key] = val;
    this.write();
  }

  clear(key) {
    this.data[key] = null;
    this.write();
  }

  write() {
    fs.writeFileSync(this.path, JSON.stringify(this.data));
  }
}

function parseDataFile(filePath, defaults) {
  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch(error) {
    return defaults;
  }
}

module.exports = UserSettings;