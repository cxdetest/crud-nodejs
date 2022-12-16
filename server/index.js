const express = require('express');
const productRouter = require('../routes/products');
const usersRouter = require('../routes/users');

function apiRouter(app) {
  const common = express.Router();
  app.use('/api/v1', common);
  common.use('/products', productRouter);
  common.use('/users', usersRouter);
}

module.exports = apiRouter;
