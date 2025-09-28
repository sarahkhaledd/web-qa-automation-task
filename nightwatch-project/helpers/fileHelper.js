const path = require('path');
const fs = require('fs');

module.exports = {
  getFilePath: (fileName) => {
    const filePath = path.resolve(__dirname, '../test-data', fileName);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Test file not found: ${filePath}`);
    }
    return filePath;
  }
};