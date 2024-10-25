const express = require('express');
const { getCartByUserId, getAllCarts } = require('../controllers/cartController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const router = express.Router();

// Route for logged-in users to get their cart
router.get('/:userId', auth, getCartByUserId);

// Route for admin to get all user carts
router.get('/admin/carts', auth, admin, getAllCarts);

module.exports = router;
