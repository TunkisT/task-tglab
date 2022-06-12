const folder = './files';
const fs = require('fs/promises');

async function readFiles() {
  let files = [];
  const dir = await fs.readdir(folder);
  for (const filename of dir) {
    files.push({ name: filename, active: true });
  }
  return files;
}

module.exports = readFiles;
