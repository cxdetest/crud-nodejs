const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getOneProduct,
  createProduct,
  updatePartial,
  deleteProduct,
  fullUpdate,
} = require('../services/servicesProducts');
const { validatorHandler } = require('../middleware/validator.handler');
const {
  productCreateSchema,
  productUpdateSchema,
  getProductSchema,
} = require('../schema/schemaProduct');

router.get('/', async (req, res, next) => {
  try {
    const products = await getAllProducts(req, res);
    res.json(products);
  } catch (error) {
    next();
  }
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res) => {
    const product = await getOneProduct(req, res);
    res.json(product);
  }
);

router.post(
  '/',
  validatorHandler(productCreateSchema, 'body'),
  async (req, res) => {
    const create = await createProduct(req, res);
    res.json(create);
  }
);

router.put('/:id', async (req, res) => {
  const productUpdated = await fullUpdate(req, res);
  res.json(productUpdated);
});

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(productUpdateSchema, 'body'),
  async (req, res) => {
    const updatedProduct = await updatePartial(req, res);
    res.json(updatedProduct);
  }
);

router.delete('/:id', async (req, res) => {
  const deletedProduct = await deleteProduct(req, res);
  res.json(deletedProduct);
});

module.exports = router;
