// const http = require('http');
// import http from 'http';

// const express = require('express');
import express from 'express';

// const bodyParser = require('body-parser');
// import bodyParser from 'body-parser';

// Initialize express app
const app = express();

// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.urlencoded({ extended: true }));

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});


app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log('In the next middleware');
  res.send('<h1>Hello from Express!</h1>');
});

// const server = http.createServer(app);
// server.listen(3000, () => console.log('Server is running in port 3000'));

app.listen(3000, () => console.log('Server is running in port 3000'));
