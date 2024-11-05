const express = require('express');
const {
  addToCart,
  getCart,
  removeFromCart,
  clearCart,updateCartItem
} = require('../controllers/cartController');
const auth = require('../middleware/auth'); // Ensure this middleware is implemented for user authentication

const router = express.Router();

router.post('/add', auth, addToCart);
router.get('/get-cart', auth, getCart); // Get user's cart
router.delete('/remove', auth, removeFromCart); // Remove item from cart
router.delete('/clear', auth, clearCart);
router.put('/update', auth, updateCartItem); // Clear the cart

module.exports = router;
