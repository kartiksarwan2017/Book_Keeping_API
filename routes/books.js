const express = require('express');
const booksController = require('../controllers/books-controller');

const router = express.Router();

// http://localhost:8000/books
router.get("/books", booksController.getAllBooks);


// http://localhost:8000/book-isbn/12345ONE
router.get('/book-isbn/:isbn', booksController.getSpecificBook);

// http://localhost:8000/book-category/programming
router.get('/book-category/:category', booksController.getSpecificBooks);

router.post('/book', booksController.addNewBook);

// http://localhost:8000/book-update/123Two
router.put('/book-update/:isbn', booksController.updateBook);

// http://localhost:8000/book-delete/123Two
router.delete('/book-delete/:isbn', booksController.deleteBook);

// http://localhost:8000/book-author-delete/12345ONE/1
router.delete('/book-author-delete/:isbn/:id', booksController.deleteBookAuthor);

module.exports = router;