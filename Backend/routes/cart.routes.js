const express = require('express');
const { getCartByUserId, getAllCarts } = require('../controllers/cartController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const router = express.Router();


router.get('/:userId', auth, getCartByUserId);

router.get('/admin/carts', auth, admin, getAllCarts);

module.exports = router;
