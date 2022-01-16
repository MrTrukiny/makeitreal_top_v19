import { Product } from '../models/product.model.js';
import { Cart } from '../models/cart.model.js';

const getProducts = (req, res, next) => {
  Product.fetchAll().then((products) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};

const getProduct = (req, res, next) => {
  const { productId } = req.params;
  // Product.findById(productId).then((product) => console.log(product));
  // res.redirect('/');
  Product.findById(productId).then((product) => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('shop/product-detail', {
      product,
      pageTitle: product.title,
      path: '/products',
    });
  });
};

const getIndex = (req, res, next) => {
  Product.fetchAll().then((products) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

const getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
  });
};

const postCart = (req, res, next) => {
  const { productId } = req.body;
  // Find Product First for Getting Price
  Product.findById(productId).then((product) => {
    Cart.addProduct(productId, product.price);
  });
  res.redirect('/');
};

const getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders',
  });
};

const getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout',
  });
};

export {
  getProducts,
  getProduct,
  getIndex,
  getCart,
  postCart,
  getOrders,
  getCheckout,
};
