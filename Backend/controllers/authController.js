const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Registration Controller
exports.registerUser = async (req, res) => {
  const { name, gmail, number, referralCode, password } = req.body;

  if (!name || !gmail || !number || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ gmail });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    const existingNumber = await User.findOne({ number });
    if (existingNumber) {
      return res.status(400).json({ message: 'User with this phone number already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      gmail,
      number,
      referralCode,
      password: hashedPassword,
    });

    await newUser.save();
    
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error:', error); 
    if (error.code === 11000) { 
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({ message: `Duplicate key error: ${field}` });
    }
    res.status(500).json({ message: error.message });
  }
};

// Login Controller with JWT
exports.loginUser = async (req, res) => {
  const { gmail, password } = req.body;

  try {
    const user = await User.findOne({ gmail });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name, gmail: user.gmail },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' } 
    );

    
    const { name, gmail: userGmail, number, referralCode } = user;
   
    res.status(200).json({
      message: 'Login successful',
      user: { name, gmail: userGmail, number, referralCode },
      token, 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Logout Controller
exports.logoutUser = (req, res) => {
  res.clearCookie('token'); 
  res.status(200).json({ message: 'Logout successful' });
};



