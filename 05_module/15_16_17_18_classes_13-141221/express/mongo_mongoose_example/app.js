import express from 'express';

// import { createProduct, getProducts } from './mongo.js';
import { createProduct, getProducts } from './mongoose.js';

const app = express();

app.use(express.json());

app.post('/products', createProduct);

app.get('/products', getProducts);

app.listen(3001);
