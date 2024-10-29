
const Accessory = require('../models/Accessory');

exports.getAccessory = async (req, res) => {
    try {
        const accessory = await Accessory.find();
        res.json(accessory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
