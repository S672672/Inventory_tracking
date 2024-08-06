// server.js
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth')

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Welcome Route
app.get('/', (req, res) => {
  res.send('Welcome to Inventory Tracking App Backend');
});

// Start Server
const PORT = 5000;
app.listen(PORT,async() => {
  console.log(`Server is running on port ${PORT}`);
   try {
    await  mongoose.connect('mongodb+srv://bsmith672:smith12@cluster1.pbr1des.mongodb.net/inventory/inventorytracking');
    console.log("Connected to mongodb");
   } catch (error){
    console.log("An error occured "+error);
   }
});