const joi = require('joi');

const name = joi.string().alphanum().min(3).max(10);
const price = joi.number().integer().min(10);
const id = joi.string().uuid();

const productCreateSchema = joi.object({
  name: name.required(),
  price: price.required(),
});

const productUpdateSchema = joi.object({
  name,
  price,
});

const getProductSchema = joi.object({
  id: id.required(),
});

module.exports = { productCreateSchema, productUpdateSchema, getProductSchema };
