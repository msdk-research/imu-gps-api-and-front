const readline = require('n-readlines');
const logger = require('../middlewares/logger');

class Parser {
  
  constructor(path) {
    this.path = path;
    this.parser = new readline(path);
    logger.log(`Parser created for file ${this.path}`);
  }

  readNLines(n) {
    this.parser.reset() // go to top
    let lines = [];
    let counter = 0;

    while (counter < n) {
      lines.push(this.parser.next().toString('utf8'));
      counter++;
     }

    return lines;
  }

}

module.exports = {Parser: Parser};