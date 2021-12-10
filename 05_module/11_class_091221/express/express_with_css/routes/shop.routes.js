import { Router } from 'express';

const router = Router();
const { pathname: shopView } = new URL('../views/shop.html', import.meta.url);

router.get('/', (req, res, next) => {
  res.sendFile(shopView);
});

export default router;
