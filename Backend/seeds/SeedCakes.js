const mongoose = require('mongoose');
const Cake = require('../models/Cake');
const cakesData = require('../data/CakeData');

async function seedCakes() {
    try {
        await Cake.deleteMany(); // Clear existing data
        await Cake.insertMany(cakesData); // Insert the seed data
        console.log('Database seeded with cakes!');
    } catch (error) {
        console.error('Error seeding the database:', error);
    }
}

module.exports = { seedCakes };
