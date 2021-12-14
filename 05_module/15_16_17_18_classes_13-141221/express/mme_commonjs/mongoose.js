const mongoose = require('mongoose');

const Product = require('./models/Product');

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
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  const result = await createdProduct.save();
  console.log(typeof createdProduct._id);
  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
