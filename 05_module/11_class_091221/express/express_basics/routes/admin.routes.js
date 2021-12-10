import { Router } from 'express';
// const { Router } = require('express');
// import express from 'express';
// const express = require('express');

const router = Router();
// const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

export default router;
// module.exports = router;
