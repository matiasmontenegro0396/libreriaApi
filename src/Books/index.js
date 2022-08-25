const express = require('express');
const {BookController} = require('./controllers')
const router = express.Router();

const BooksApi = (app) => {
    router
    .get('/all', BookController.getAllBooks)
    .get('/search', BookController.findSomeBooks)
    .get('/search/:field', BookController.getBooksByField)
    .get('/:id', BookController.getBookById)
    .post('/add', BookController.addBook)
    .patch('/:id', BookController.updateBook)

    app.use("/api/libros", router);
}



module.exports = {BooksApi}
