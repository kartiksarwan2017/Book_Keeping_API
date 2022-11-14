// MAIN BACKEND FILE

// const db = require('./database/index.js');
const db = require('./database');
const express = require('express');

// console.log(db);

/* We can access the value of the key inside the object using dot operator */

// console.log(db.publications);
// console.log(db.books);
// console.log(db.authors);

const app = express();
app.use(express.json());


// https://localhost:3000/
app.get('/', (req, res) => {

    return res.json({ "Welcome": ` to my Backend Software for the Book Company ` });

});


/* Using res.send() we can still display all books
   
   res.json(getAllBooks);
   res.send(getAllBooks);

   return res.json(getAllBooks);
   return res.send(getAllBooks);

   All of the above statements will give same output

*/

http://localhost:3000/books
app.get('/books', (req, res) => {
    const getAllBooks = db.books;
    res.send(getAllBooks);
});


// http://localhost:3000/book-isbn/12345TWO
app.get('/book-isbn/:isbn', (req, res) => {

    console.log(req.params);
    const { isbn } = req.params;

    console.log(isbn);
    const getSpecificBook = db.books.filter((book) => book.ISBN === isbn);

    console.log(getSpecificBook);
    console.log(getSpecificBook.length);

    if (getSpecificBook.length === 0) {

        return res.json({ "error": `No Book found for the ISBN of ${isbn}` });

    }

    return res.json(getSpecificBook[0]);

});



// http://localhost:3000/book-category/programming
app.get('/book-category/:category', (req, res) => {

    console.log(req.params);
    const { category } = req.params;

    const getSpecificBooks = db.books.filter((book) => book.category.includes(category));

    console.log(getSpecificBooks);
    console.log(getSpecificBooks.length);
    if (getSpecificBooks.length === 0) {

        return res.json({ "error": `No book found for the Category of ${category}` });

    }

    return res.json(getSpecificBooks);


});

// http://localhost:3000/authors
app.get('/authors', (req, res) => {

    const getAllAuthors = db.authors;

    return res.json(getAllAuthors);

});

// http://localhost:3000/author-id/1
app.get('/author-id/:id', (req, res) => {

    console.log(req.params);
    /* Approach 2 to convert the id from string 
    to Number */
    let { id } = req.params;
    id = Number(id);
    console.log(id);

    /* request.params consist of value of id: 1 in form of string we need to it to number

    apporach 1: 
    is as follows
    */
    // const getSpecificAuthor = db.authors.filter((author) => author.id == id);

    const getSpecificAuthor = db.authors.filter((author) => author.id === id);

    console.log(getSpecificAuthor);
    console.log(getSpecificAuthor.length);

    if (getSpecificAuthor.length === 0) {

        return res.json({ "error": `No Author found for the id of ${id}` });

    }

    return res.json(getSpecificAuthor[0]);

});


// http://localhost:3000/author-isbn/12345TWO
app.get('/author-isbn/:isbn', (req, res) => {

    console.log(req.params);
    const { isbn } = req.params;
    console.log(isbn);

    const getSpecificAuthors = db.authors.filter((author) => author.books.includes(isbn));

    console.log(getSpecificAuthors);
    console.log(getSpecificAuthors.length);

    if (getSpecificAuthors.length === 0) {

        return res.json({ "error": `No Author found for the given ISBN of ${isbn}` });

    }

    return res.json(getSpecificAuthors);

});

// http://localhost:3000/publications
app.get('/publications', (req, res) => {

    const getAllPublications = db.publications;

    return res.json(getAllPublications);

});


app.get('/publication-id/:id', (req, res) => {

    console.log(req.params);
    let { id } = req.params;
    id = Number(id);
    console.log(id);

    const getSpecificPublication = db.publications.filter((publication) => publication.id === id);

    console.log(getSpecificPublication);
    console.log(getSpecificPublication.length);

    if (getSpecificPublication.length === 0) {

        return res.json({ "error": `No Publication found for the id of ${id}` });

    }

    return res.json(getSpecificPublication);

});

// http://localhost:3000/publication-isbn/12345ONE
app.get('/publication-isbn/:isbn', (req, res) => {

    console.log(req.params);
    const { isbn } = req.params;
    console.log(isbn);

    const getSpecificPublications = db.publications.filter((publication) => publication.books.includes(isbn));

    // console.log(getSpecificPublications);
    // console.log(getSpecificPublications.length);

    if (getSpecificPublications.length === 0) {

        return res.json({ "error": `No Publication found for the given ISBN of ${isbn}` });

    }

    return res.json(getSpecificPublications);

});

// http://localhost:3000/book
app.post('/book', (req, res) => {

    // console.log(req.body);
    // const { newBook } = req.body;
    // console.log(newBook);
    // db.books.push(newBook);


    /* Alternative approach to push the parsed req.body to db.books */
    console.log(req.body);
    db.books.push(req.body);

    return res.json(db.books);


});



// http://localhost:3000/author
app.post('/author', (req, res) => {

    console.log(req.body);
    db.authors.push(req.body);

    return res.json(db.authors);

});


// http://localhost:3000/publication
app.post('/publication', (req, res) => {

    console.log(req.body);
    db.publications.push(req.body);

    return res.json(db.publications);

});


// http://localhost:3000/book-update/12345ONE
app.put('/book-update/:isbn', (req, res) => {

    console.log(req.body);
    console.log(req.params);
    const { isbn } = req.params;
    console.log(isbn);

    db.books.forEach((book) => {

        if (book.ISBN === isbn) {
            console.log({ ...book, ...req.body });
            return { ...book, ...req.body };

        }

        return book;

    });

    return res.json(db.books);

});


// http://localhost:3000/author-update/1
app.put('/author-update/:id', (req, res) => {

    console.log(req.body);
    console.log(req.params);

    let { id } = req.params;
    id = Number(id);

    console.log(id);

    db.authors.forEach((author) => {

        if (author.id === id) {

            console.log({ ...author, ...req.body });
            return { ...author, ...req.body };

        }


        return author;

    });


    return res.json(db.authors);


});


// http://localhost:3000/publication-update/1
app.put('/publication-update/:id', (req, res) => {

    console.log(req.body);
    console.log(req.params);

    let { id } = req.params;
    id = (Number)(id);
    console.log(id);


    db.publications.forEach((publication) => {

        if (publication.id === id) {

            console.log({ ...publication, ...req.body });
            return { ...publication, ...req.body };

        }

        return publication;

    });

    return res.json(db.publications);


});

// http://localhost:3000/book-delete/12345ONE
app.delete('/book-delete/:isbn', (req, res) => {

    console.log(req.params);
    const { isbn } = req.params;
    console.log(isbn);

    const filteredBooks = db.books.filter((book) => book.ISBN !== isbn);

    console.log(filteredBooks);
    db.books = filteredBooks;
    return res.json(db.books);

});

// http://localhost:3000/author-delete/1
app.delete('/author-delete/:id', (req, res) => {

    console.log(req.params);

    let { id } = req.params;
    id = (Number)(id);
    console.log(id);

    const filteredAuthors = db.authors.filter((author) => author.id !== id);

    console.log(filteredAuthors);
    db.authors = filteredAuthors;

    return res.json(db.authors);

});


// http://localhost:3000/publication-delete/1
app.delete('/publication-delete/:id', (req, res) => {

    console.log(req.params);

    let { id } = req.params;
    id = (Number)(id);
    console.log(id);

    const filteredPublication = db.publications.filter((publication) => publication.id !== id);

    console.log(filteredPublication);

    db.publications = filteredPublication;

    return res.json(db.publications);

});

// http://localhost:3000/book-author-delete/12345ONE/1
app.delete('/book-author-delete/:isbn/:id', (req, res) => {

    console.log(req.params);
    let { isbn, id } = req.params;
    id = (Number)(id);
    console.log(isbn);
    console.log(id);

    db.books.forEach((book) => {

        if (book.ISBN === isbn) {

            if (!book.authors.includes(id)) {
                return;
            }

            book.authors = book.authors.filter((author) => author !== id);
            return book;
        }

        return book;

    });

    return res.json(db.books);

});


// http://localhost:3000/author-books-delete/1/12345ONE
app.delete('/author-books-delete/:id/:isbn', (req, res) => {

    console.log(req.params);
    let { id, isbn } = req.params;
    id = (Number)(id);
    console.log(id);
    console.log(isbn);

    db.authors.forEach((author) => {

        if (author.id === id) {

            if (!author.books.includes(isbn)) {

                return;

            }

            author.books = author.books.filter((book) => book !== isbn);
            return author;
        }

        return author;

    });

    return res.json(db.authors);

});


// http://localhost:3000/publication-books-delete/1/12345ONE
app.delete('/publication-books-delete/:id/:isbn', (req, res) => {

    console.log(req.params);

    let { id, isbn } = req.params;
    id = (Number)(id);
    console.log(id);
    console.log(isbn);

    db.publications.forEach((publication) => {

        if (publication.id === id) {

            if (!publication.books.includes(isbn)) {

                return res.json({ "error": `No publication found for the books of isbn: ${isbn}` });

            }

            publication.books = publication.books.filter((book) => book !== isbn);
            console.log(publication.books);
            console.log(publication);
            return publication;

        }

        return publication;

    });

    return res.json(db.publications);

});



app.listen(3000, () => {
    console.log('My Express app is running');
});