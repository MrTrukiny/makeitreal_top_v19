import { Product } from '../models/product.model.js';
import { Cart } from '../models/cart.model.js';

const cartInstance = new Cart();

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
  Cart.getCart().then((cart) => {
    Product.fetchAll().then((products) => {
      const cartProducts = [];
      products.forEach((product) => {
        console.log(typeof product.id, product.id);
        console.log(cart);
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      });
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts,
      });
    });
  });
};

const postCart = (req, res, next) => {
  const { productId } = req.body;
  // Find Product First for Getting Price
  Product.findById(productId).then((product) => {
    cartInstance.saveToCart(productId, product.price);
  });
  res.redirect('/');
};

const postCartDeleteProduct = (req, res, next) => {
  const { productId } = req.body;
  Product.findById(productId).then((product) => {
    cartInstance.deleteFromCart(productId, product.price);
  });
  res.redirect('/cart');
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
  postCartDeleteProduct,
  getOrders,
  getCheckout,
};
