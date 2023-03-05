const express = require('express');
const booksController = require('../controllers/books-controller');

const router = express.Router();

// http://localhost:8000/books/all-books
router.get("/all-books", booksController.getAllBooks);

// http://localhost:8000/books/book-isbn/isbn
router.get('/book-isbn/:isbn', booksController.getSpecificBook);

// http://localhost:8000/books/book-category/category
router.get('/book-category/:category', booksController.getSpecificBooks);

// http://localhost:8000/books/add-new-book
router.post('/add-new-book', booksController.addNewBook);

// http://localhost:8000/books/book-update/isbn
router.put('/book-update/:isbn', booksController.updateBook);

// http://localhost:8000/books/book-delete/isbn
router.delete('/book-delete/:isbn', booksController.deleteBook);

// http://localhost:8000/books/book-author-delete/isbn/id
router.delete('/book-author-delete/:isbn/:id', booksController.deleteBookAuthor);

module.exports = router;