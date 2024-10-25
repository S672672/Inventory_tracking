const User = require('../models/User');
const Cart = require('../models/Cart');

const getAllUsers = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const users = await User.find({}, 'username email') 
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await User.countDocuments();
    res.json({
      users,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const cart = await Cart.findOne({ user: user._id }).populate('items.product');
    
    res.json({ user, cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserDetailsWithCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const cart = await Cart.findOne({ user: user._id }).populate('items.product');

    res.json({ user, cart: cart || null });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { getAllUsers, getUserDetails, getUserDetailsWithCart };

