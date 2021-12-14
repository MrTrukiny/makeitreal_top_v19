import { Router } from 'express';

import {
  getIndex,
  getProducts,
  getProduct,
  getCart,
  postCart,
  postCartDeleteProduct,
  getOrders,
  getCheckout,
} from '../controllers/shop.controller.js';

const router = Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/products/:productId', getProduct);

router.route('/cart').get(getCart).post(postCart);

router.post('/cart-delete-product', postCartDeleteProduct);

router.get('/orders', getOrders);

router.get('/checkout', getCheckout);

export default router;
