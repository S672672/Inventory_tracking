// routes/cake.routes.js
const express = require('express');
const router = express.Router();
const accessoryController = require('../controllers/accessoryController')

router.get('/accessory', accessoryController.getAccessory);

module.exports = router;
