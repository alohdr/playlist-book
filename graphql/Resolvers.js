// const users = require('../data')

const Author = require("../models/author")
const Book = require("../models/book")
const bookShelf = require("../models/bookShelf")
// const BookShelf = require('../models/bookShelf')
const jwt = require('jsonwebtoken')

const resolvers = {
    Query: {

        async getAuthors() {
            return await Author.find().populate("_id")
        },
        
        async getBooks() {
            return await Book.find().populate("authorID")
        },

        async getShelves() {
            return await bookShelf.find().populate("bookID")
        },

    },
    

    Mutation: {
        async createAuthor (parent, args) {
            const author = new Author(args.input)
            await author.save()
            return author
        },

        async updateAuthor (parent, args) {
            const {id} = args
            await Author.findByIdAndUpdate(id, args.input)
            return args.input
        },

        async deleteAuthor (parent, args) {
            const {id} = args
            await Author.findByIdAndDelete(id)
            return "Data was Deleted"
        }
    },

}

module.exports = {resolvers}