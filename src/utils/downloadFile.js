const fs = require('fs');

function createFile(data) {
  fs.writeFileSync('./downloadedData.json', JSON.stringify(data));
}

module.exports = createFile;
