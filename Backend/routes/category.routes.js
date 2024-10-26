const express = require('express');
const router = express.Router();
const { createCategory, getCategories } = require('../controllers/categoryController');

router.post('/categories', createCategory);

router.get('/categories', getCategories);

module.exports = router;
