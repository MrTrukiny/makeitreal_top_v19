import { Router } from 'express';

import {
  getIndex,
  getProducts,
  getProduct,
  getCart,
  postCart,
  getOrders,
  getCheckout,
} from '../controllers/shop.controller.js';

const router = Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/products/:productId', getProduct);

router.get('/cart', getCart);

router.post('/cart', postCart);

router.get('/orders', getOrders);

router.get('/checkout', getCheckout);

export default router;
