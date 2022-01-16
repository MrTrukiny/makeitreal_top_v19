import { Router } from 'express';
// const { Router } = require('express');
// import express from 'express';

const router = Router();
// const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

export default router;
// module.exports = router;
