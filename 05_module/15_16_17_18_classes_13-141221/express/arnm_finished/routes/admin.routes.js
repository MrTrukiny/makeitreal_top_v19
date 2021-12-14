import { Router } from 'express';

import {
  getProducts,
  getAddProduct,
  postAddProduct,
  getEditProduct,
  postEditProduct,
  postDeleteProduct,
} from '../controllers/admin.controller.js';

const router = Router();

router.get('/products', getProducts);
router.route('/add-product').get(getAddProduct).post(postAddProduct);
router.get('/edit-product/:productId', getEditProduct);
router.post('/edit-product', postEditProduct);
router.post('/delete-product', postDeleteProduct);

export default router;
