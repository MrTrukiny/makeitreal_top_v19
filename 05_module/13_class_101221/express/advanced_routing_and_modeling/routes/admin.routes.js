import { Router } from 'express';

import {
  getAddProduct,
  postAddProduct,
  getProducts,
} from '../controllers/admin.controller.js';

const router = Router();

router.route('/add-product').get(getAddProduct).post(postAddProduct);
router.get('/products', getProducts);

export default router;
