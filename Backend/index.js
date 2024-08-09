// server.js
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const authRoutes = require('../routes/auth');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

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
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("An error occurred: " + error);
  }
});
