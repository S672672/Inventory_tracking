const mongoose = require('mongoose');
const Accessory = require('../models/Accessory');
const accessoryData = require('../data/AccessoryData');

async function seedAccessory() {
    try {
        await Accessory.deleteMany();
        await Accessory.insertMany(accessoryData);
        console.log('Database seeded with accessories!');
    } catch (error) {
        console.error('Error seeding the database:', error);
    }
}

module.exports = { seedAccessory };
