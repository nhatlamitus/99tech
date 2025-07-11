const productRepo = require('../repositories/product.repository');

async function createProduct(name, price) {
  return productRepo.createProduct(name, price);
}

async function getAllProducts(filter) {
  return productRepo.getAllProducts(filter);
}

async function updateProduct(id, name, price) {
  return productRepo.updateProduct(id, name, price);
}

async function deleteProduct(id) {
  return productRepo.deleteProduct(id);
}

async function getProductById(id) {
  return productRepo.getProductById(id);
}

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductById,
}; 