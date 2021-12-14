import mongoose from 'mongoose';

import Product from './models/Product.model.js';

// const uri =
//   "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
const dbName = 'mongoose_products';
const localUri = `mongodb://localhost:27017/${dbName}`;

mongoose
  .connect(localUri)
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

const createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const createdProduct = new Product({
    name,
    price,
  });

  const result = await createdProduct.save();
  console.log(typeof createdProduct._id);
  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find();
  res.json(products);
};

export { createProduct, getProducts };
