const express = require('express');
const router = express.Router();
const { getData } = require('../services/servicesUsers');

router.get('/', async (req, res) => {
  const data = await getData(req, res);
  res.json(data);
});

module.exports = router;
