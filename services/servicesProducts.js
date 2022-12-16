const faker = require('faker');
const boom = require('@hapi/boom');

const getAllProducts = async (req, res) => {
  try {
    const products = [];
    const { size } = await req.query;
    const limit = size || 5;
    for (let i = 0; i < limit; i++) {
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        Image: faker.image.imageUrl(),
      });
    }
    return products;
  } catch (error) {
    console.error(error);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const { id } = await req.params;
    return {
      id,
      name: 'teclado',
      price: 15,
      category: 'technology',
    };
  } catch (error) {
    console.error(error);
  }
};

const createProduct = async (req, res) => {
  try {
    const body = await req.body;
    return {
      ok: true,
      body,
    };
  } catch (error) {
    console.error(error);
  }
};

const updatePartial = async (req, res) => {
  try {
    const { id } = await req.params;
    const body = await req.body;
    return {
      id,
      message: 'success',
      product: body,
    };
  } catch (error) {
    console.error(error);
  }
};

const fullUpdate = async (req, res) => {
  try {
    const { id } = await req.params;
    const body = await req.body;

    if (id != 1) throw boom.notFound();

    return {
      id,
      message: 'success',
      product: body,
    };
  } catch (error) {
    console.error(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = await req.params;
    return {
      id,
      message: 'deleted ok',
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  fullUpdate,
  updatePartial,
  deleteProduct,
};
