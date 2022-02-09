/*
api/index.js mounts all routes inside the api folder
these routes are mounted in ../server.js on the route '/api'
*/
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API is working'
  });
});

router.get('/imu:n', (req, res) => {
  let n = req.params.n
  res.json({
    message: `IMU ${n}`
  })
})

router.get('/gps:n', (req, res) => {
  let n = req.params.n
  res.json({
    message: `GPS ${n}`
  })
})

module.exports = router;
