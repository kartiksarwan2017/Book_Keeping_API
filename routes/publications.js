const express = require('express');
const publicationsController = require('../controllers/publications-controller');

const router = express.Router();


// http://localhost:8000/publications
router.get('/publications', publicationsController.getAllPublications);

// http://localhost:8000/publication-id/1
router.get('/publication-id/:id', publicationsController.getSpecificPublication);

// http://localhost:8000/publication-isbn/12345ONE
router.get('/publication-isbn/:isbn', publicationsController.getSpecificPublications);

// http://localhost:8000/publication
router.post('/publication', publicationsController.addNewPublication);

// http://localhost:8000/publication-update/1
router.put('/publication-update/:id', publicationsController.updatePublication);

// http://localhost:8000/publication-delete/1
router.delete('/publication-delete/:id', publicationsController.deletePublication);

// http://localhost:8000/publication-books-delete/1/12345ONE
router.delete('/publication-books-delete/:id/:isbn', publicationsController.publicationBooksDelete);


module.exports = router;