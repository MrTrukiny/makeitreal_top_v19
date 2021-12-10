import express from 'express';

// Import Routes
import adminRoutes from './routes/admin.routes.js';
import shopRoutes from './routes/shop.routes.js';

// Initialize express app
const app = express();
const { pathname: notFoundView } = new URL('./views/404.html', import.meta.url);
// const { pathname: public } = new URL('./public', import.meta.url);
const { pathname: publicFolder } = new URL('./public', import.meta.url);

// Body parser
app.use(express.urlencoded({ extended: true }));
// Serving public files
app.use(express.static(publicFolder));

// Routes
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found!</h1>');
});

app.use((req, res, next) => {
  res.status(404).sendFile(notFoundView);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
