import { Router } from 'express';

import {
  getAddProduct,
  postAddProduct,
  getEditProduct,
  postEditProduct,
  getProducts,
} from '../controllers/admin.controller.js';

const router = Router();

router.route('/add-product').get(getAddProduct).post(postAddProduct);
router.get('/edit-product/:productId', getEditProduct);
router.post('/edit-product', postEditProduct);
router.get('/products', getProducts);

export default router;
