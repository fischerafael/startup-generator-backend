const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercose: true
    },
    password: {
        type: String,
        required: true,
        //select: false
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    site: {
        type: String
    },
    instagram: {
        type: String
    },
    facebook: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);