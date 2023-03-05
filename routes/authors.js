const express = require('express');
const authorsController = require('../controllers/authors-controller');

const router = express.Router();

// http://localhost:8000/authors
router.get('/authors', authorsController.getAllAuthors);

// http://localhost:8000/author-id/1
router.get('/author-id/:id', authorsController.getSpecificAuthor);

// http://localhost:8000/author-isbn/12345ONE
router.get('/author-isbn/:isbn', authorsController.getSpecificAuthors);

// http://localhost:8000/author
router.post('/author', authorsController.addNewAuthor);

// http://localhost:8000/author-update/1
router.put('/author-update/:id', authorsController.updateAuthor);

// http://localhost:8000/author-delete/1
router.delete('/author-delete/:id', authorsController.deleteAuthor);

// http://localhost:8000/author-books-delete/1/12345ONE
router.delete('/author-books-delete/:id/:isbn', authorsController.authorBooksDelete);

module.exports = router;