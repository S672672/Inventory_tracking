const Product = require('../models/Product');

const addProduct = async (req, res) => {
  const { name, price, description, category } = req.body;
  const image = req.file.path;

  try {
    const newProduct = new Product({ name, price, description, image, category });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { name, price, description, category } = req.body;
  const updatedData = { name, price, description, category };

  if (req.file) {
    updatedData.image = req.file.path;
  }

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addProduct, getProducts, updateProduct, deleteProduct };
