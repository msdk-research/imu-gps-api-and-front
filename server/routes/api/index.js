/*
api/index.js mounts all routes inside the api folder
these routes are mounted in ../server.js on the route '/api'
*/
const express = require('express');

const router = express.Router();

const parserClass = require('../../data/parser');
const Parser = parserClass.Parser;

const ParserIMU = new Parser('./server/data/local/dekart_16_gyro.csv');
const ParserGPS = new Parser('./server/data/local/dekart_16_gps.csv');

router.get('/', (req, res) => {
  res.json({
    message: 'API is working'
  });
});

router.get('/imu', (req, res) => {
  res.json({
    message: `Error: please query the following url '/imu/:id'`
  })
})

router.get('/gps', (req, res) => {
  res.json({
    message: `Error: please query the following url '/gps/:id'`
  })
})

router.post('/imu', (req, res) => {
  ParserIMU.readLines((data) => {
    res.json({
      message: data
    })
  })
})

router.post('/gps', (req, res) => {
  ParserGPS.readLines((data) => {
    res.json({
      message: data
    })
  })
})

router.get('/imu/:n', (req, res) => {
  let n = req.params.n;
  ParserIMU.readNLines(n, (data) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    res.end();
  });
})

router.get('/gps/:n', (req, res) => {
  let n = req.params.n
  ParserGPS.readNLines(n, (data) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    res.end();
  });
})

module.exports = router;
