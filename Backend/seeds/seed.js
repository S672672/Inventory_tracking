const mongoose = require('mongoose');
const Category = require('../models/Category'); 


const categories = [
  { name: 'Kitchen' },
  { name: 'Dairy' },
  { name: 'Veggies' },
  { name: 'Snacks' },
  { name: 'Chocolates' },
];

const seedCategories = async () => {
  try {
      for (const category of categories) {
          await Category.updateOne({ name: category.name }, category, { upsert: true });
      }
      console.log('Categories seeded successfully!');
  } catch (error) {
      console.error('Error seeding categories:', error);
  }
};


module.exports = { seedCategories }; 