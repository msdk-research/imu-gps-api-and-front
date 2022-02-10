const fs = require('fs');
const readline = require('../middlewares/readLines');
const logger = require('../middlewares/logger');

class Parser {
  
  constructor(path) {
    this.path = path;
    this.parser = new readline(path);
    logger.log(`Parser created for file ${this.path}`);
  }

  async readNLines(n, callback) {
    this.parser.reset() // go to top
    let lines = '';
    let counter = 0;

    do {
      lines += this.parser.next().toString('utf8');
      counter++;
    } while (counter < n) 

    lines.length > 0 ? callback(lines) : logger.error('readNLines buffer is empty');
  }

  async readLines(callback) {
    this.parser.reset() // go to top
    let fd = this.parser.fileDescriptor;
    let stats = this.parser.fileStats;
    let buffer = new Buffer.alloc(stats.size);

    fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes, buffer) => {
      if (err) logger.error(err);
      var data = buffer.toString('utf8');
      callback(data);
    });
  }

}

module.exports = {Parser: Parser};