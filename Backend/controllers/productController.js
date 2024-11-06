const Product = require('../models/Product');
const path = require('path')
const fs = require('fs');

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
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const imagePath = path.join(__dirname, '../uploads', path.basename(product.image));
    
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error('Error deleting image:', err);
        return res.status(500).json({ message: 'Error deleting image' });
      }
      Product.findByIdAndDelete(req.params.id)
        .then(() => {
          res.status(204).json({ message: 'Product deleted successfully' });
        })
        .catch((error) => {
          res.status(500).json({ message: 'Error deleting product from database' });
        });
    });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(400).json({ message: error.message });
  }
};

const getProductDetails = async (req, res) => {
  const { id } = req.params; // Get the product ID from the URL params
  try {
    const product = await Product.findById(id); // Assuming you are using MongoDB and Mongoose
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};



module.exports = { addProduct, getProducts, updateProduct, deleteProduct,getProductDetails };
