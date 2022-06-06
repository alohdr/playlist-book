const req = require("express/lib/request")
const { isValidObjectId } = require("mongoose")
const bookShelf = require("../models/bookShelf")

const getBookShelf = async (req, res) => {
    const Shelf = await bookShelf.find()
    res.json(Shelf)
}

const distinctBookShelf = async (req, res) => {
    const disShelf = await bookShelf.distinct(`${req.params.txt}`)
    res.json(disShelf)
}

const findBookShelf = async (req, res) => {
    const finded = await bookShelf.find(
        {},
        {bookID : {$elemMatch: {$in: req.params.id}}}
    )

    res.json(finded)
}

const getBookID = async (req, res) => {
    // const book = await bookShelf.find({ bookID: { $in: [ req.params.id ] } })
    const book = await bookShelf.find({bookID: req.params.id})
    
    res.json(book)
}

const addBookShelf = async (req, res) => {
    const addShelf = new bookShelf(req.body)
    await addShelf.save()

    res.json(addShelf)
}

const editBookShelf = async (req, res) => {
    // await bookShelf.findByIdAndUpdate(req.params.id, {$set: req.body})
    await bookShelf.updateMany(
        {},
        {$set: {"identity.$[elem].qty": req.params.num}},
        {arrayFilters: [{"elem.location": "1st floor"}]})

    res.json("successfully")
}

const deleteBookShelf = async (req, res) => {
    await bookShelf.deleteOne({_id: req.params.id})

    res.json("deleted successfully")

}

module.exports = {
    getBookShelf,
    addBookShelf,
    editBookShelf,
    deleteBookShelf,
    getBookID,
    findBookShelf,
    distinctBookShelf
}