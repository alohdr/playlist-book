const product = require('../models/book')

const getBook = async (req, res) => {
    
    const book = await product.find()
    res.json(book)
    
}

const addBook = async (req, res) => {

    const Book1 = new product(req.body)

    await Book1.save()

    res.json(Book1)
}

const editBook = async (req, res) => {

    await product.updateOne({_id: req.params.id}, {$set: req.body})

    res.json("success")
}

const deleteBook = async (req, res) => {
    await product.deleteOne({_id: req.params.name})

    res.send(`deleted successfuly`)
}

module.exports = {
    getBook,
    addBook,
    editBook,
    deleteBook
}