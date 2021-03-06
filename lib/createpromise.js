const fs = require('fs');

function readPromiseFile(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, 'utf8', (err, data) => {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

module.exports = readPromiseFile;
