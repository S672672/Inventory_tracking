const express = require('express');
const { addProduct, getProducts, updateProduct, deleteProduct,getProductDetails } = require('../controllers/productController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const multer = require('../config/multer');

const router = express.Router();

router.post('/create', auth, admin, multer.single('image'), addProduct); 
router.get('/', getProducts); 
router.put('/:id', auth, admin, multer.single('image'), updateProduct); 
router.delete('/:id', auth, admin, deleteProduct); 
router.get('/:id', getProductDetails);

module.exports = router;
