const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gmail: { type: String, required: true, unique: true },
  number: { type: String, required: true,unique:true },
  referralCode: { type: String },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
