import { Router } from 'express';

const router = Router();
const { pathname: adminView } = new URL(
  '../views/add_product.html',
  import.meta.url
);

const products = [];

router
  .route('/admin/add-product')
  .get((req, res, next) => {
    res.sendFile(adminView);
  })
  .post((req, res, next) => {
    // console.log(req.body);
    // const body = req.body;
    const { body: product } = req;
    products.push(product);
    res.redirect('/');
  });

export { products };
export default router;
