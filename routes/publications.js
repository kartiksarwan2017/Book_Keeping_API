const express = require('express');
const publicationsController = require('../controllers/publications-controller');

const router = express.Router();


// http://localhost:8000/publications/all-publications
router.get('/all-publications', publicationsController.getAllPublications);

// http://localhost:8000/publications/publication-id/id
router.get('/publication-id/:id', publicationsController.getSpecificPublication);

// http://localhost:8000/publications/publication-isbn/isbn
router.get('/publication-isbn/:isbn', publicationsController.getSpecificPublications);

// http://localhost:8000/publications/add-new-publication
router.post('/add-new-publication', publicationsController.addNewPublication);

// http://localhost:8000/publications/publication-update/id
router.put('/publication-update/:id', publicationsController.updatePublication);

// http://localhost:8000/publications/publication-delete/id
router.delete('/publication-delete/:id', publicationsController.deletePublication);

// http://localhost:8000/publications/publication-books-delete/id/isbn
router.delete('/publication-books-delete/:id/:isbn', publicationsController.publicationBooksDelete);


module.exports = router;