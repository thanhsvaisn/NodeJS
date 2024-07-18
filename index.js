const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Initialize database connection
require('./models/database');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Routes
const productRoutes = require('./routes/products.route');
app.use('/products', productRoutes);

// Home route

app.get('/', (req, res) => {
  res.redirect('/products');
});

const port = process.env.PORT || 4261;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
