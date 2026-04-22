const { randomUUID } = require('crypto');
const { get } = require('http');

const products = [];

const getAll = (req, res) => {
  res.json(products);
};

const getById = (req, res) => {
  const { id } = req.params;

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      error: "Product not found"
    });
  }

  res.json(product);
};

const update = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      error: "Product not found"
    });
  }

  if (name) product.name = name;
  if (price) product.price = price;

  res.json(product);
};

const create = (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      error: "Name and price are required"
    });
  }

  const newProduct = {
    id: randomUUID(),
    name,
    price
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

const remove = (req, res) => {
  const { id } = req.params;

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Product not found"
    });
  }

  products.splice(index, 1);

  res.status(204).send();
};

module.exports = {
  getAll,
  create,
  getById,
  update,
  remove
};