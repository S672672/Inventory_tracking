const express = require('express');
const { addProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const multer = require('../config/multer');

const router = express.Router();

router.post('/', auth, admin, multer.single('image'), addProduct); 
router.get('/', getProducts); 
router.put('/:id', auth, admin, multer.single('image'), updateProduct); 
router.delete('/:id', auth, admin, deleteProduct); 

module.exports = router;
