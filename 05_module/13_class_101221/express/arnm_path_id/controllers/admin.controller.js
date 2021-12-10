import { Product } from '../models/products.model.js';

const getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

const postAddProduct = (req, res, next) => {
  const { title, imageUrl, description, price } = req.body;
  const product = new Product(title, imageUrl, description, price);
  // const { ...productData } = req.body;
  // const product = new Product({ ...productData });
  product.save();
  res.redirect('/');
};

const getProducts = (req, res, next) => {
  Product.fetchAll().then((products) => {
    console.log(products);
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  });
};

export { getAddProduct, postAddProduct, getProducts };
