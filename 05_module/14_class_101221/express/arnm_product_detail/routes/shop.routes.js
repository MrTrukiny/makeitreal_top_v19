import { Router } from 'express';

import {
  getIndex,
  getProducts,
  getProduct,
  getCart,
  getOrders,
  getCheckout,
} from '../controllers/shop.controller.js';

const router = Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/products/:productId', getProduct);

router.get('/cart', getCart);

router.get('/orders', getOrders);

router.get('/checkout', getCheckout);

export default router;
