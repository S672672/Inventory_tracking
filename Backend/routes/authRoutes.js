const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');


router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).send('Invalid username or password');
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            
            res.json({
                name: req.user.name,
                email: req.user.email,
                number:request.user.number
            });
        });
    })(req, res, next);
});




router.post('/register', (req, res, next) => {
    const newUser = new User({
        email: req.body.email,
        name: req.body.name,
        number:req.body.number
    });
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            return next(err);
        }
        res.json({
            name: user.name,
            email: user.email,
            number:user.number
        });
        res.send('Signup successful');
    });
});




router.post('/logout',authMiddleware.ensureAuthenticated, (req, res,next) => {
    req.logout();
    res.send('Logout successful');
    (req, res, next)
});

router.get('/profile', authMiddleware.ensureAuthenticated, (req, res, next) => {
    
    const userId = req.user.email;
    User.findByUsername(userId)
        .select('Name email number')
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        })
        .catch(err => {
            console.error('Error fetching user profile:', err);
            res.status(500).json({ message: 'Internal server error' });
        });
});

module.exports = router;
