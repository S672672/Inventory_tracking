
const Cake = require('../models/Cake');

exports.getCakes = async (req, res) => {
    try {
        const cakes = await Cake.find();
        res.json(cakes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
