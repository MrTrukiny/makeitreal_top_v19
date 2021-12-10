import express from 'express';

// Import Routes
import adminRoutes from './routes/admin.routes.js';
import shopRoutes from './routes/shop.routes.js';

// Initialize express app
const app = express();

// Body parser
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found!</h1>');
});

// app.use((req, res, next) => {
//   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });

app.listen(3000, () => console.log('Server is running on port 3000'));
