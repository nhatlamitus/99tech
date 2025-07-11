const express = require('express');
const productService = require('../services/product.service');
const router = express.Router();

// POST /products - create a new product
router.post('/products', async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || typeof price !== 'number') {
      return res.status(400).json({ error: 'Name and price are required.' });
    }
    const id = await productService.createProduct(name, price);
    res.status(201).json({ id, name, price });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Can not create product.' });
  }
});

// GET /products - retrieve all products
router.get('/products', async (req, res) => {
  try {
    const filter = {};
    if (req.query.name) {
      filter.name = req.query.name;
    }
    const rows = await productService.getAllProducts(filter);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Can not get all products.' });
  }
});

// GET /products/:id - get product details
router.get('/products/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Can not get product.' });
  }
});

// PUT /products/:id - update a product
router.put('/products/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name, price } = req.body;
    if (!name || typeof price !== 'number') {
      return res.status(400).json({ error: 'Name and price are required.' });
    }
    await productService.updateProduct(id, name, price);
    res.json({ id, name, price });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Can not update product.' });
  }
});

// DELETE /products/:id - delete a product
router.delete('/products/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    await productService.deleteProduct(id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Can not delete product.' });
  }
});

module.exports = router;