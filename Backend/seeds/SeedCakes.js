const mongoose = require('mongoose');
const Cake = require('../models/Cake');
const cakesData = require('../data/CakeData');

async function seedCakes() {
    try {
        await Cake.deleteMany(); 
        await Cake.insertMany(cakesData); 
        console.log('Database seeded with cakes!');
    } catch (error) {
        console.error('Error seeding the database:', error);
    }
}

module.exports = { seedCakes };
