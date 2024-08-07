// routes/auth.js
const express = require('express');
const register = require('./Controllers/authControllers');
const login = require('./Controllers/authControllers');
const router = express.Router();

// Register Route
router.post('/register', register);

// Login Route
router.post('/login', login);

module.exports = router;
