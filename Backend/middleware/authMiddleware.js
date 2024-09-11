const passport = require('passport');
const session = require('express-session');

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next(); 
    }
    res.status(401).send('Unauthorized');
}

module.exports = {
    ensureAuthenticated
};