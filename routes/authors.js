const express = require('express');
const authorsController = require('../controllers/authors-controller');

const router = express.Router();

// http://localhost:8000/authors/authors
router.get('/all-authors', authorsController.getAllAuthors);

// http://localhost:8000/authors/author-id/id
router.get('/author-id/:id', authorsController.getSpecificAuthor);

// http://localhost:8000/authors/author-isbn/isbn
router.get('/author-isbn/:isbn', authorsController.getSpecificAuthors);

// http://localhost:8000/authors/author
router.post('/add-new-author', authorsController.addNewAuthor);

// http://localhost:8000/authors/author-update/id
router.put('/author-update/:id', authorsController.updateAuthor);

// http://localhost:8000/authors/author-delete/id
router.delete('/author-delete/:id', authorsController.deleteAuthor);

// http://localhost:8000/authors/author-books-delete/id/isbn
router.delete('/author-books-delete/:id/:isbn', authorsController.authorBooksDelete);

module.exports = router;