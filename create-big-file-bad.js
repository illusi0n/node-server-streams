const fs = require('fs');
const file = fs.createWriteStream('./big.file');

// ~ 450MB file size
const MAX_LINES = 5e6;

for(let i=0;i<=MAX_LINES;i++) {
  // write() is returning status if the buffer is full
  // since here status is ignored, everything is being stored in memory
  // until buffer frees up
  // https://nodejs.org/api/stream.html#stream_event_drain
  file.write('test, test, test, test, test test test test test test test test test');
}

file.end();