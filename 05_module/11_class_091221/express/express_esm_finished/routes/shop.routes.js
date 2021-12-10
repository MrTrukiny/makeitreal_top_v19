import { Router } from 'express';

import { products } from './admin.routes.js';

const router = Router();
const { pathname: shopView } = new URL('../views/shop.html', import.meta.url);

router.get('/', (req, res, next) => {
  console.log('shop.js', products);
  // How to pass products data to shop.html?
  res.sendFile(shopView);
});

export default router;
