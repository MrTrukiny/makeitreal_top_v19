import { Router } from 'express';

import {
  getAddProduct,
  postAddProduct,
} from '../controllers/products.controller.js';

const router = Router();

router.route('/admin/add-product').get(getAddProduct).post(postAddProduct);

export default router;
