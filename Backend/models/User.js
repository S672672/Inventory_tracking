const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose'); // Ensure this is installed

// Define user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'], // Email validation regex
    },
    number: {
        type: Number,
        required: [true, 'Phone number is required'],
        unique: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v); // Basic validation for a 10-digit number
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'], // Minimum length
    },
    marketingAccept: {
        type: Boolean,
        default: false, // Default to false if not specified
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    versionKey: false  // Disable __v field for versioning
});

// Apply passport-local-mongoose plugin
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

// Indexing for email and phone number for faster querying
userSchema.index({ email: 1 });
userSchema.index({ number: 1 });

module.exports = mongoose.model('User', userSchema);
