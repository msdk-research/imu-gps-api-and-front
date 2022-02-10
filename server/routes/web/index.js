/*
web/index.js mounts all routes inside the web folder
these routes are mounted in ../server.js on the route '/'
*/
const express = require('express');
const path = require('path');

const router = express.Router();
// const path2static = path.join(__dirname, '../../../app/example/');

router.get('/', (req, res, next) => {
  res.json({
    message: 'Web server is working'
  });
});

router.get('/gps', (req, res, next) => {
  res.sendFile(path.resolve(__dirname + '../../../../pages/gps/gps.html'));
});

router.get('/imu', (req, res, next) => {
  res.sendFile(path.resolve(__dirname + '../../../../pages/imu/imu.html'));
});

module.exports = router;

