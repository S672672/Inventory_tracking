const express = require('express');
const { register, login,getUserProfile,upload,updateUserProfile,getAllUsers,deleteUser} = require('../controllers/authController');
const auth = require('../middleware/auth')

const router = express.Router();

router.post('/register', upload.single('profileImage'), register);
router.post('/login', login);
router.get('/profile', auth, getUserProfile);
router.put('/profile', auth, upload.single('profileImage'), updateUserProfile);
router.get('/users', auth, getAllUsers);
router.delete('/users/:id', auth, deleteUser);


module.exports = router;

