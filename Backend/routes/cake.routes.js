// routes/cake.routes.js
const express = require('express');
const router = express.Router();
const cakeController = require('../controllers/cakeController');

router.get('/cakes', cakeController.getCakes);

module.exports = router;
