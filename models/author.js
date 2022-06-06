const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        enum: ['male', 'female'],
        default: 'male'
    }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;