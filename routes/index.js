const express = require('express');

const router = express.Router();

console.log("Router Loaded");

// https://localhost:8000/
router.get('/', (req, res) => {

    return res.json({ "Welcome": ` to my Backend Software for the Book Company ` });

});

router.use('/books', require('./books'));
router.use('/authors', require('./authors'));
router.use('/publications', require('./publications'));


module.exports = router;