import { Product } from '../models/product.model.js';

const getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
  });
};

const postAddProduct = (req, res, next) => {
  const { title, imageUrl, description, price } = req.body;
  const product = new Product(null, title, imageUrl, description, price);
  // const { ...productData } = req.body;
  // const product = new Product({ ...productData });
  product.save();
  res.redirect('/');
};

const getEditProduct = (req, res, next) => {
  const { edit: editMode } = req.query;
  // console.log('Edit mode', editMode);
  // console.log(typeof editMode);
  if (!editMode) {
    return res.redirect('/');
  }
  const { productId } = req.params;
  Product.findById(productId).then((product) => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product,
    });
  });
};

const postEditProduct = (req, res, next) => {
  // const productId = req.body.productId;
  // const title = req.body.title;
  // const price = req.body.price;
  // const imageUrl = req.body.imageUrl;
  // const description = req.body.description;
  const { productId, title, price, imageUrl, description } = req.body;
  const updatedProduct = new Product(
    productId,
    title,
    price,
    imageUrl,
    description
  );
  updatedProduct.save();
  res.redirect('/admin/products');
};

const getProducts = (req, res, next) => {
  Product.fetchAll().then((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  });
};

export {
  getAddProduct,
  postAddProduct,
  getEditProduct,
  postEditProduct,
  getProducts,
};
