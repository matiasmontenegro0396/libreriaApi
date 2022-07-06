const express = require('express');
const {BookController} = require('./controllers')
const router = express.Router();

const BooksApi = (app) => {
    router
    .get('/search', BookController.getAllBooks)
    .get('/:id', BookController.getBook)
    .post('/add', BookController.addBook)

    app.use("/api/libros", router);
}



module.exports = {BooksApi}
