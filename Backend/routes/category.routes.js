const express = require('express');
const router = express.Router();
const { createCategory, getCategories } = require('../controllers/categoryController');

// Route to create a new category (Admin only)
router.post('/categories', createCategory);

// Route to get all categories (Accessible by anyone)
router.get('/categories', getCategories);

module.exports = router;
