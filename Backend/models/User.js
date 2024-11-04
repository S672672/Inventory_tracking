const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  profileImage: { type: String }, 
  cart: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, required: true }, // ID of the item (could be Product, Cake, or Accessory)
      itemType: { type: String, required: true, enum: ["Product", "Cake", "Accessory"] }, // Type of item
      quantity: { type: Number, default: 1 },
    },
  ],
});


module.exports = mongoose.model('User', userSchema);
