const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');
const categoryRoutes = require('./routes/category.routes');
const cartRoutes = require('./routes/cart.routes');
const { PORT } = require('./config/config');
const {seedCategories} = require('./seeds/seed')


const app = express();
connectDB();
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json()); 
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api/cart', cartRoutes);
app.use(errorHandler); 

seedCategories();

app.get('/', (req, res) => {
  res.send('Welcome to the Grocery Management API!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
