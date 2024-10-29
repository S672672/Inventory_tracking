const Cart = require('../models/Cart');
const Product = require('../models/Product');


exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    if (!productId || quantity < 1) {
      return res.status(400).json({ success: false, message: 'Invalid product ID or quantity' });
    }

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
    console.error('Add to Cart Error:', error.message);
    res.status(500).json({ success: false, message: 'Error adding to cart', error: error.message });
  }
};


exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('products.product');
    res.status(200).json({ success: true, cart });
  } catch (error) {
    console.error('Get Cart Error:', error.message);
    res.status(500).json({ success: false, message: 'Error fetching cart', error: error.message });
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
    console.error('Remove from Cart Error:', error.message);
    res.status(500).json({ success: false, message: 'Error removing item from cart', error: error.message });
  }
};
