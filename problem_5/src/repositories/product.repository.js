const { Op } = require('sequelize');
const Product = require('../models/product.model');

async function createProduct(name, price) {
  try {
    const product = await Product.create({ name, price });
    return product.id;
  } catch (error) {
    throw new Error(`Failed to create product: ${error.message}`);
  }
}

async function getProductById(id) {
  try {
    const product = await Product.findByPk(id);
    return product;
  } catch (error) {
    throw new Error(`Failed to get product: ${error.message}`);
  }
}

async function getAllProducts(filter = {}) {
  try {
    const whereClause = {};
    
    if (filter.name) {
      whereClause.name = {
        [Op.like]: `%${filter.name}%`
      };
    }
    
    const products = await Product.findAll({
      where: whereClause,
      order: [['createdAt', 'DESC']]
    });
    
    return products;
  } catch (error) {
    throw new Error(`Failed to get products: ${error.message}`);
  }
}

async function updateProduct(id, name, price) {
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    
    await product.update({ name, price });
    return product;
  } catch (error) {
    throw new Error(`Failed to update product: ${error.message}`);
  }
}

async function deleteProduct(id) {
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    
    await product.destroy();
    return true;
  } catch (error) {
    throw new Error(`Failed to delete product: ${error.message}`);
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductById,
};
