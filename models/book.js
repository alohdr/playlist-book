const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    created: Date,
    authorID:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;