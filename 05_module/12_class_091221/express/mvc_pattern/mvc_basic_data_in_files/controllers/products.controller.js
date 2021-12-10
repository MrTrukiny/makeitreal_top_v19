// import { Product } from '../models/products.model.js';
import { Product } from '../models/products.model.promise.js';

const getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

const postAddProduct = (req, res, next) => {
  const { title } = req.body;
  const product = new Product(title);
  product.save();
  res.redirect('/');
};

const getProducts = (req, res, next) => {
  /* Product.fetchAll((products) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  }); */

  Product.fetchAll().then((products) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

export { getAddProduct, postAddProduct, getProducts };
