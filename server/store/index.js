const path = require("path");
const fs = require("fs");

function parseDataFile(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch (err) {
    return err;
  }
}

class Store {
  constructor(options) {
    this.path = path.join(`${__dirname}/${options.storeName}.json`);
    this.data = parseDataFile(this.path);

    return this;
  }

  get(key) { return key ? this.data[key]: this.data; }

  set(key, val) {
    this.data[key] = val;
    fs.writeFileSync(this.path, JSON.stringify(this.data));
  }
}

module.exports = Store;
