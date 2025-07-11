require('dotenv').config();
const express = require('express');
const healthRoutes = require('./controllers/health');
const productRoutes = require('./controllers/product.controller');

const app = express();

app.use(express.json());
app.use('/', healthRoutes);
app.use('/', productRoutes);

module.exports = app;
