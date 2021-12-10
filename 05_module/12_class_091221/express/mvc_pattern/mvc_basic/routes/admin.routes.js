import { Router } from 'express';

const router = Router();

const products = [];

router
  .route('/admin/add-product')
  .get((req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  })
  .post((req, res, next) => {
    const { body: product } = req;
    products.push(product);
    res.redirect('/');
  });

export { products };
export default router;
