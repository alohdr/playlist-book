const Author = require('../models/author')

const getAuthor = async (req, res) => {
    
    // const author = await Author.find({ $or: [ { age: { $lte: req.params.id } }, { age: { $gte: req.params.id2 } } ] })
    const author = await Author.find()
    res.json(author)
    
}

const addAuthor = async (req, res) => {

    const addAuthor = new Author(req.body)

    await addAuthor.save()

    res.json(addAuthor)
    
}

const editAuthor = async (req, res) => {

    await Author.updateOne({_id: req.params.id}, {$set: req.body})

    res.json("success")
}

const deleteAuthor = async (req, res) => {
    await Author.deleteOne({_id: req.params.id})

    res.send(`deleted successfuly`)
}

module.exports = {
    getAuthor,
    addAuthor,
    editAuthor,
    deleteAuthor
}