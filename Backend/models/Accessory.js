// models/Cake.js
const mongoose = require("mongoose");

const accessorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("Accessory", accessorySchema);
