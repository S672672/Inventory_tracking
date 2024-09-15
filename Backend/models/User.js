const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gmail: { type: String, required: true, unique: true },
  number: { type: String, required: true, unique: true },
  referralCode: { type: String, required: true },
  password: { type: String, required: true },
}, {
  timestamps: true, 
  versionKey: false 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
