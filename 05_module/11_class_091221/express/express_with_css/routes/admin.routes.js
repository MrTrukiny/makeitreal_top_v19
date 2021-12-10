import { Router } from 'express';

const router = Router();
const { pathname: adminView } = new URL('../views/add_product.html', import.meta.url);

router
  .route('/admin/add-product')
  .get((req, res, next) => {
    res.sendFile(adminView)
  })
  .post((req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  });

export default router;
