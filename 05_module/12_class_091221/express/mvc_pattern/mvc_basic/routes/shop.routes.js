import { Router } from 'express';

import { products } from './admin.routes.js';

const router = Router();

router.get('/', (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

export default router;
