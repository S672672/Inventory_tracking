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
router.delete('/remove', auth, removeFromCart); 
router.delete('/clear', auth, clearCart);
router.put('/update', auth, updateCartItem); 

module.exports = router;
