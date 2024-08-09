const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('./models/User');
const authRoutes = require('./routes/authRoutes');
const app = express();
const cors = require('cors');



//Configure Express
app.use(express.json());

app.use(cors({
    origin: '',
    credentials: true
  }));

//session middleware
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

//  Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.use('/auth', authRoutes);


// Start server
const PORT = 5001;
app.listen(PORT,async() => {
  console.log(`Server is running on port ${PORT}`);
   try {
    await  mongoose.connect('');
    console.log("Connected to mongodb");
   } catch (error){
    console.log("An error occured "+error);
   }
});


