const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config'); 

const register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ username, email, password: hashedPassword });
  try {
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    
    if (email === config.ADMIN_EMAIL && password === config.ADMIN_PASSWORD) {
     
      const token = jwt.sign({ isAdmin: true }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token, isAdmin: true });
    }

    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = (user) => {
      return jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });
    };

    res.json({ token, isAdmin: user.isAdmin });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { register, login };
