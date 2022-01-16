import express from 'express';
// const express = require('express');

// Import Routes
import adminRoutes from './routes/admin.routes.js';
import shopRoutes from './routes/shop.routes.js';
// const adminRoutes = require('./routes/admin');
// const shopRoutes = requrie('./routes/shop');

// Initialize express app
const app = express();

// Body parser
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use(adminRoutes);
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found!</h1>');
});

app.listen(3000, () => console.log('Server is running on port 3000'));
