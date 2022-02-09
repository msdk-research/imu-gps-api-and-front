/*
api/index.js mounts all routes inside the api folder
these routes are mounted in ../server.js on the route '/api'
*/
const express = require('express');

const router = express.Router();

const parserClass = require('../../data/parser');
const Parser = parserClass.Parser;

const ParserGPS = new Parser('./server/data/local/dekart_16_gps.csv');
const ParserIMU = new Parser('./server/data/local/dekart_16_gyro.csv');


router.get('/', (req, res) => {
  res.json({
    message: 'API is working'
  });
});

router.get('/imu/:n', (req, res) => {
  let n = req.params.n;
  let lines = ParserIMU.readNLines(n);
  res.json({
    message: `${lines}`
  })
})

router.get('/gps/:n', (req, res) => {
  let n = req.params.n
  let lines = ParserGPS.readNLines(n);
  res.json({
    message: `${lines}`
  })
})

module.exports = router;
