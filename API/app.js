const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const productController = require('./controllers/productController');
const restrictedProducts = require('./controllers/restrictedProducts');

app.use('/api/products', productController);

module.exports = app;
