import { Router } from 'express';
// const { Router } = require('express');
// import express from 'express';

const router = Router();
// const router = express.Router();

router
  .route('/admin')
  .get('/add-product', (req, res, next) => {
    res.send(
      '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    );
  })
  .post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  });

export default router;
// module.exports = router;
