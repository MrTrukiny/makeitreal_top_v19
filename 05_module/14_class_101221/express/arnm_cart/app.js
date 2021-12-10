import express from 'express';

// Import Routes
import adminRoutes from './routes/admin.routes.js';
import shopRoutes from './routes/shop.routes.js';

// Import Controllers
import { get404 } from './controllers/error.controller.js';

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;
const { pathname: publicFolder } = new URL('./public', import.meta.url);

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Body parser
app.use(express.urlencoded({ extended: true }));
// Serving public files
app.use(express.static(publicFolder));

// Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(get404);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
