const { json } = require('body-parser')
const express = require('express')
const route = express.Router()
require('../db')
const { getBook, addBook, editBook, deleteBook } = require('../controllers/bookControllers')
const { getAuthor, addAuthor, editAuthor, deleteAuthor } = require('../controllers/authorControllers')
const { getBookShelf, addBookShelf, editBookShelf, deleteBookShelf, getBookID, findBookShelf, distinShelf, distinctBookShelf } = require('../controllers/shelfControllers')

// book
route.get('/book', getBook)

route.post('/book/add', addBook)

route.put('/book/:id', editBook)

route.delete('/book/:name', deleteBook)

// author
route.get('/author', getAuthor)

route.post('/author/add', addAuthor)

route.put('/author/:id', editAuthor)

route.delete('/author/:id', deleteAuthor)

// book shelf
route.get('/shelf', getBookShelf)

route.get('/shelf/:id', getBookID)

route.get('/shelf/:id', findBookShelf)

// route.get('/distin/:txt', distinctBookShelf)

route.post('/shelf/add', addBookShelf)

route.put('/edit/:num', editBookShelf)

route.delete('/shelf/:id', deleteBookShelf)


module.exports = route