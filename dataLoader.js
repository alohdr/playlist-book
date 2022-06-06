const DataLoader = require('dataloader')
const bookShelf = require("../models/bookShelf")
const { keyBy } = require('lodash')


function batchBook(bookIds) {

    const shelves = bookShelf.find({
        _id : {
            $in: bookIds
        }
    })

    const shelvesByIds = keyBy(shelves, '_id')
    console.log("idBook : " , shelvesByIds)
    return bookIds.map((bookId) => shelvesByIds[bookId])

}

const bookLoader = () => {
    return new DataLoader(bookIds => batchBook(bookIds))
}

module.exports = () => {
    return {
        books: bookLoader()
    }
}