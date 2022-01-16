import { Router } from 'express';

// import path from 'path';
// import { join } from 'path';

// -- Using CommonJS and ESModules in same file -- //
// These lines make "require" available
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const path = require('path');
// const data = require('./require.cjs');
// const data2 = require('./require2.json');
// console.log('Data: ', data);
// console.log('Data2: ', data2);
// -- End -- //

const { pathname: shopView } = new URL('../views/shop.html', import.meta.url);

const router = Router();

router.get('/', (req, res, next) => {
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html')); 
  // res.sendFile(join(__dirname, '..','views', 'shop.html'));
  res.sendFile(shopView);
});

export default router;
