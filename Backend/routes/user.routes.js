const express = require('express');
const { getAllUsers, getUserDetailsWithCart } = require('../controllers/userController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const router = express.Router();

router.get('/', auth, admin, getAllUsers); 
router.get('/:id', auth, admin, getUserDetailsWithCart); 

module.exports = router;
