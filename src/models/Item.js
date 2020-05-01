const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }    
});

module.exports = mongoose.model('Item', ItemSchema);