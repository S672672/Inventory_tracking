const Cart = require('../models/Cart');

const getCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId }).populate('items.product');
    res.json(cart || { message: 'Cart is empty' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find().populate('user').populate('items.product');
    res.json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCartByUserId, getAllCarts };
