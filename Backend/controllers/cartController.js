
const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, products: [] });
    }

    const itemIndex = cart.products.findIndex(item => item.product.toString() === productId);

    if (itemIndex > -1) {

      cart.products[itemIndex].quantity += quantity;
    } else {

      cart.products.push({ product: productId, quantity });
    }

    await cart.save();
    res.status(200).json({ success: true, message: 'Item added to cart', cart });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding to cart', error });
  }
};


exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('products.product');
    res.status(200).json({ success: true, cart });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching cart', error });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const cart = await Cart.findOne({ user: req.user.id });

    if (cart) {
      cart.products = cart.products.filter(item => item.product.toString() !== productId);
      await cart.save();
      res.status(200).json({ success: true, message: 'Item removed from cart', cart });
    } else {
      res.status(404).json({ success: false, message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error removing item from cart', error });
  }
};
