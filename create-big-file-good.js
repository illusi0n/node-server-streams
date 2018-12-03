const fs = require('fs');
const file = fs.createWriteStream('./big.file');
const { Readable } = require('stream');

const MAX_LINES = 2e6;
let currentLines = 0;

const readStream = new Readable({
  read(size) {
    this.push(`test, test, test, test,test, test, test, test,test, test, test, test,test, test, test, test,`);
    if (++currentLines > MAX_LINES) {
      this.push(null);
    }
  }
});

// Writeable stream will read only when it has space in buffer
// which will result in low memory usage for storing data when buffer is full
readStream.pipe(file);