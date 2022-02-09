const {
  csv
} = require('csv-parse');
const logger = require('../middlewares/logger');

class Parser {
  constructor(path) {
    this.path = path;
    this.parser = csv(
      {columns: true},
      {separator: ','},
    );
    logger.log(`Parser created for file ${this.path}`);
  }
}

module.exports = new Parser(path);
