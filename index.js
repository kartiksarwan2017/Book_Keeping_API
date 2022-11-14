// MAIN BACKEND FILE

// const db = require('./database/index.js');
// const db = require('./database');

const BookModel = require('./database/books.js');
const AuthorModel = require('./database/authors');
const PublicationModel = require('./database/publications');
// const dotenv = require('dotenv').config();

// const mongoose = require('mongoose');
const express = require('express');

// console.log(db);

/* We can access the value of the key inside the object using dot operator */

// console.log(db.publications);
// console.log(db.books);
// console.log(db.authors);


const app = express();
app.use(express.json());


// Import the mongoose module
var mongoose = require('mongoose');
// Set up default mongoose connection
var mongoDB = 'mongodb+srv://kartik_sarwan:dRCes4wzZ8aiSbSx@cluster0.eeetne6.mongodb.net/book-company?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));



// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = "mongodb+srv://kartik_sarwan:dRCes4wzZ8aiSbSx@cluster0.eeetne6.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {

//     const bcollection = client.db("book-company").collection("books").findOne({ ISBN: "1234THREE" });

//     bcollection.then((data) => console.log(data)).catch((err) => console.log(err));

// });

// client.close();


// async function listDatabases(client) {

//     databasesList = await client.db().admin().listDatabases();

//     console.log("The Databases are: ");
//     databasesList.databases.forEach(db =>
//         console.log(db.name));

// }


// async function main() {

//     const uri = "mongodb+srv://kartik_sarwan:dRCes4wzZ8aiSbSx@cluster0.eeetne6.mongodb.net/?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//     try {

//         await client.connect();
//         // await listDatabases(client);

//         const result = await client.db("book-company").collection("books").findOne({ ISBN: "1234THREE" });
//         console.log(result);

//     } catch (err) {

//         console.log(err);

//     } finally {

//         await client.close();

//     }
// }

// main();


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

// http://localhost:3000/books
// app.get('/books', (req, res) => {
//     const getAllBooks = db.books;
//     res.send(getAllBooks);
// });


// http://localhost:3000/books
app.get("/books", async (req, res) => {

    const getAllBooks = await BookModel.find();

    // console.log(getAllBooks);

    return res.json(getAllBooks);

});

// http://localhost:3000/book-isbn/12345TWO
// app.get('/book-isbn/:isbn', (req, res) => {

//     console.log(req.params);
//     const { isbn } = req.params;

//     console.log(isbn);
//     const getSpecificBook = db.books.filter((book) => book.ISBN === isbn);

//     console.log(getSpecificBook);
//     console.log(getSpecificBook.length);

//     if (getSpecificBook.length === 0) {

//         return res.json({ "error": `No Book found for the ISBN of ${isbn}` });

//     }

//     return res.json(getSpecificBook[0]);

// });


// // http://localhost:3000/book-isbn/12345ONE
// app.get('/book-isbn/:isbn', async (req, res) => {

//     console.log(req.params);
//     const { isbn } = req.params;
//     console.log(isbn);

//     const getSpecificBook = await BookModel.find({ ISBN: isbn });

//     console.log(getSpecificBook);

//     console.log(getSpecificBook.length);

//     if (getSpecificBook.length === 0) {

//         return res.json({ "Error": `No Books found with the isbn of : ${isbn}` });
//     }

//     return res.json(getSpecificBook[0]);
// });


// http://localhost:3000/book-isbn/12345ONE
app.get('/book-isbn/:isbn', async (req, res) => {

    console.log(req.params);
    const { isbn } = req.params;
    console.log(isbn);

    const getSpecificBook = await BookModel.findOne({ ISBN: isbn });

    console.log(getSpecificBook);

    if (getSpecificBook === null) {

        return res.json({ "Error": `No Books found with the isbn of : ${isbn}` });
    }

    return res.json(getSpecificBook);
});



// // http://localhost:3000/book-category/programming
// app.get('/book-category/:category', (req, res) => {

//     console.log(req.params);
//     const { category } = req.params;

//     const getSpecificBooks = db.books.filter((book) => book.category.includes(category));

//     console.log(getSpecificBooks);
//     console.log(getSpecificBooks.length);
//     if (getSpecificBooks.length === 0) {

//         return res.json({ "error": `No book found for the Category of ${category}` });

//     }

//     return res.json(getSpecificBooks);


// });


// http://localhost:3000/book-category/programming
app.get('/book-category/:category', async (req, res) => {

    console.log(req.params);
    const { category } = req.params;
    console.log(category);

    const getSpecificBooks = await BookModel.find({ category: category });

    console.log(getSpecificBooks);
    console.log(getSpecificBooks.length);

    if (getSpecificBooks.length === 0) {

        return res.json({ "error": `No book found for the category of : ${category}` });

    }

    return res.json(getSpecificBooks);

});



// // http://localhost:3000/authors
// app.get('/authors', (req, res) => {

//     const getAllAuthors = db.authors;

//     return res.json(getAllAuthors);

// });


// http://localhost:3000/authors
app.get('/authors', async (req, res) => {

    const getAllAuthors = await AuthorModel.find();

    return res.json(getAllAuthors);

});

// // http://localhost:3000/author-id/1
// app.get('/author-id/:id', (req, res) => {

//     console.log(req.params);
//     /* Approach 2 to convert the id from string 
//     to Number */
//     let { id } = req.params;
//     id = Number(id);
//     console.log(id);

//     /* request.params consist of value of id: 1 in form of string we need to it to number

//     apporach 1: 
//     is as follows
//     */
//     // const getSpecificAuthor = db.authors.filter((author) => author.id == id);

//     const getSpecificAuthor = db.authors.filter((author) => author.id === id);

//     console.log(getSpecificAuthor);
//     console.log(getSpecificAuthor.length);

//     if (getSpecificAuthor.length === 0) {

//         return res.json({ "error": `No Author found for the id of ${id}` });

//     }

//     return res.json(getSpecificAuthor[0]);

// });

// http://localhost:3000/author-id/1
app.get('/author-id/:id', async (req, res) => {

    console.log(req.params);
    const { id } = req.params;
    console.log(id);

    const getSpecificAuthor = await AuthorModel.findOne({ id: id });

    console.log(getSpecificAuthor);

    if (getSpecificAuthor === null) {
        return res.json({ "error": `No Authors found for the id of ${id}` });
    }

    return res.json(getSpecificAuthor);

});


// // http://localhost:3000/author-isbn/12345TWO
// app.get('/author-isbn/:isbn', (req, res) => {

//     console.log(req.params);
//     const { isbn } = req.params;
//     console.log(isbn);

//     const getSpecificAuthors = db.authors.filter((author) => author.books.includes(isbn));

//     console.log(getSpecificAuthors);
//     console.log(getSpecificAuthors.length);

//     if (getSpecificAuthors.length === 0) {

//         return res.json({ "error": `No Author found for the given ISBN of ${isbn}` });

//     }

//     return res.json(getSpecificAuthors);

// });


// http://localhost:3000/author-isbn/12345ONE
app.get('/author-isbn/:isbn', async (req, res) => {

    console.log(req.params);

    const { isbn } = req.params;
    console.log(isbn);

    const getSpecificAuthors = await AuthorModel.find({ books: isbn });

    console.log(getSpecificAuthors);
    console.log(getSpecificAuthors.length);

    if (getSpecificAuthors.length === 0) {
        return res.json({ "error": `No Authors found for the ISBN of ${isbn}` });
    }

    return res.json(getSpecificAuthors);

});

// // http://localhost:3000/publications
// app.get('/publications', (req, res) => {

//     const getAllPublications = db.publications;

//     return res.json(getAllPublications);

// });

// http://localhost:3000/publications
app.get('/publications', async (req, res) => {

    const getAllPublications = await PublicationModel.find();

    console.log(getAllPublications);

    return res.json(getAllPublications);

});


// http://localhost:3000/publication-id/1
// app.get('/publication-id/:id', (req, res) => {

//     console.log(req.params);
//     let { id } = req.params;
//     id = Number(id);
//     console.log(id);

//     const getSpecificPublication = db.publications.filter((publication) => publication.id === id);

//     console.log(getSpecificPublication);
//     console.log(getSpecificPublication.length);

//     if (getSpecificPublication.length === 0) {

//         return res.json({ "error": `No Publication found for the id of ${id}` });

//     }

//     return res.json(getSpecificPublication);

// });


// http://localhost:3000/publication-id/1
app.get('/publication-id/:id', async (req, res) => {

    console.log(req.params);

    const { id } = req.params;
    console.log(id);

    const getSpecificPublication = await PublicationModel.findOne({ id: id });

    console.log(getSpecificPublication);

    if (getSpecificPublication === null) {

        return res.json({ "error": `No Publication found for the id : ${id}` });

    }

    return res.json(getSpecificPublication);

});


// // http://localhost:3000/publication-isbn/12345ONE
// app.get('/publication-isbn/:isbn', (req, res) => {

//     console.log(req.params);
//     const { isbn } = req.params;
//     console.log(isbn);

//     const getSpecificPublications = db.publications.filter((publication) => publication.books.includes(isbn));

//     // console.log(getSpecificPublications);
//     // console.log(getSpecificPublications.length);

//     if (getSpecificPublications.length === 0) {

//         return res.json({ "error": `No Publication found for the given ISBN of ${isbn}` });

//     }

//     return res.json(getSpecificPublications);

// });

// http://localhost:3000/publication-isbn/12345ONE
app.get('/publication-isbn/:isbn', async (req, res) => {

    console.log(req.params);

    const { isbn } = req.params;
    console.log(isbn);


    const getSpecificPublications = await PublicationModel.find({ books: isbn });

    console.log(getSpecificPublications);
    console.log(getSpecificPublications.length);

    if (getSpecificPublications.length === 0) {

        return res.json({ "error": `No Publication found for the given ISBN of : ${isbn}` });

    }

    return res.json(getSpecificPublications);

});

// // http://localhost:3000/book
// app.post('/book', (req, res) => {

//     // console.log(req.body);
//     // const { newBook } = req.body;
//     // console.log(newBook);
//     // db.books.push(newBook);


//     /* Alternative approach to push the parsed req.body to db.books */
//     console.log(req.body);
//     db.books.push(req.body);

//     return res.json(db.books);


// });


// http://localhost:3000/book
// app.post('/book', (req, res) => {

//     // console.log(req.body);
//     const addNewBook = BookModel.create(req.body);

//     // console.log(addNewBook);

//     return res.json({

//         bookAdded: addNewBook,
//         message: "Book Added Successfully!!!"

//     });

// });


app.post('/book', async (req, res) => {

    // console.log(req.body);
    const addNewBook = await BookModel.create(req.body);

    // console.log(addNewBook);

    return res.json({
        bookAdded: addNewBook,
        message: "Book Added Successfully!!!"
    });

});


// // http://localhost:3000/author
// app.post('/author', (req, res) => {

//     console.log(req.body);
//     db.authors.push(req.body);

//     return res.json(db.authors);

// });

// http://localhost:3000/author
app.post('/author', async (req, res) => {

    console.log(req.body);

    const addNewAuthor = await AuthorModel.create(req.body);

    console.log(addNewAuthor);

    return res.json({

        authorAdded: addNewAuthor,
        message: "Author Added Successfully!!!"

    });

});



// // http://localhost:3000/publication
// app.post('/publication', (req, res) => {

//     console.log(req.body);
//     db.publications.push(req.body);

//     return res.json(db.publications);

// });

// http://localhost:3000/publication
app.post('/publication', async (req, res) => {

    console.log(req.body);

    const addNewPublication = await PublicationModel.create(req.body);

    console.log(addNewPublication);

    return res.json({

        publicationAdded: addNewPublication,
        message: "Publication Added Successully!!!"

    });


});


// // http://localhost:3000/book-update/12345ONE
// app.put('/book-update/:isbn', (req, res) => {

//     console.log(req.body);
//     console.log(req.params);
//     const { isbn } = req.params;
//     console.log(isbn);

//     db.books.forEach((book) => {

//         if (book.ISBN === isbn) {
//             console.log({ ...book, ...req.body });
//             return { ...book, ...req.body };

//         }

//         return book;

//     });

//     return res.json(db.books);

// });



// http://localhost:3000/book-update/123Two
app.put('/book-update/:isbn', async (req, res) => {

    // console.log(req.body);
    // console.log(req.params);

    const { isbn } = req.params;
    // console.log(isbn);

    const updateBook = await BookModel.findOneAndUpdate({ ISBN: isbn }, req.body, { new: true });

    // console.log(updateBook);

    return res.json({
        updatedBook: updateBook,
        message: "Book Updated Successfully!!!"
    });

});


// // http://localhost:3000/author-update/1
// app.put('/author-update/:id', (req, res) => {

//     console.log(req.body);
//     console.log(req.params);

//     let { id } = req.params;
//     id = Number(id);

//     console.log(id);

//     db.authors.forEach((author) => {

//         if (author.id === id) {

//             console.log({ ...author, ...req.body });
//             return { ...author, ...req.body };

//         }


//         return author;

//     });


//     return res.json(db.authors);


// });


// http://localhost:3000/author-update/1
app.put('/author-update/:id', async (req, res) => {

    console.log(req.body);
    console.log(req.params);

    const { id } = req.params;
    console.log(id);

    const updateAuthor = await AuthorModel.findOneAndUpdate({ id: id }, req.body, { new: true });

    console.log(updateAuthor);

    return res.json({

        updatedAuthor: updateAuthor,
        message: "Author Updated Successfully!!"

    });

});


// // http://localhost:3000/publication-update/1
// app.put('/publication-update/:id', (req, res) => {

//     console.log(req.body);
//     console.log(req.params);

//     let { id } = req.params;
//     id = (Number)(id);
//     console.log(id);


//     db.publications.forEach((publication) => {

//         if (publication.id === id) {

//             console.log({ ...publication, ...req.body });
//             return { ...publication, ...req.body };

//         }

//         return publication;

//     });

//     return res.json(db.publications);


// });

// http://localhost:3000/publication-update/1
app.put('/publication-update/:id', async (req, res) => {

    console.log(req.body);
    console.log(req.params);

    const { id } = req.params;
    console.log(id);

    const updatePublication = await PublicationModel.findOneAndUpdate({ id: id }, req.body, { new: true });

    console.log(updatePublication);

    return res.json({
        updatedPublication: updatePublication,
        message: "Publication Updated Successfully!!"
    });

});


// // http://localhost:3000/book-delete/12345ONE
// app.delete('/book-delete/:isbn', (req, res) => {

//     console.log(req.params);
//     const { isbn } = req.params;
//     console.log(isbn);

//     const filteredBooks = db.books.filter((book) => book.ISBN !== isbn);

//     console.log(filteredBooks);
//     db.books = filteredBooks;
//     return res.json(db.books);

// });


// http://localhost:3000/book-delete/123Two
app.delete('/book-delete/:isbn', async (req, res) => {

    console.log(req.params);
    const { isbn } = req.params;

    const deleteBook = await BookModel.deleteOne({ ISBN: isbn });

    console.log(deleteBook);

    return res.json({

        deletedBook: deleteBook,
        message: "Book Deleted Successfully!!!"

    });
});

// // http://localhost:3000/author-delete/1
// app.delete('/author-delete/:id', (req, res) => {

//     console.log(req.params);

//     let { id } = req.params;
//     id = (Number)(id);
//     console.log(id);

//     const filteredAuthors = db.authors.filter((author) => author.id !== id);

//     console.log(filteredAuthors);
//     db.authors = filteredAuthors;

//     return res.json(db.authors);

// });

// http://localhost:3000/author-delete/1
app.delete('/author-delete/:id', async (req, res) => {

    console.log(req.params);

    const { id } = req.params;
    console.log(id);

    const deleteAuthor = await AuthorModel.deleteOne({ id: id });

    console.log(deleteAuthor);

    return res.json({

        deletedAuthor: deleteAuthor,
        message: "Author Deleted Successfully!!"

    });
});


// // http://localhost:3000/publication-delete/1
// app.delete('/publication-delete/:id', (req, res) => {

//     console.log(req.params);

//     let { id } = req.params;
//     id = (Number)(id);
//     console.log(id);

//     const filteredPublication = db.publications.filter((publication) => publication.id !== id);

//     console.log(filteredPublication);

//     db.publications = filteredPublication;

//     return res.json(db.publications);

// });


// http://localhost:3000/publication-delete/1
app.delete('/publication-delete/:id', async (req, res) => {

    console.log(req.params);

    const { id } = req.params;
    console.log(id);

    const deletePublication = await PublicationModel.deleteOne({ id: id });
    console.log(deletePublication);

    return res.json({

        deletedPublication: deletePublication,
        message: "Publication Deleted Successfully!!"

    });

});



// // http://localhost:3000/book-author-delete/12345ONE/1
// app.delete('/book-author-delete/:isbn/:id', (req, res) => {

//     console.log(req.params);
//     let { isbn, id } = req.params;
//     id = (Number)(id);
//     console.log(isbn);
//     console.log(id);

//     db.books.forEach((book) => {

//         if (book.ISBN === isbn) {

//             if (!book.authors.includes(id)) {
//                 return;
//             }

//             book.authors = book.authors.filter((author) => author !== id);
//             return book;
//         }

//         return book;

//     });

//     return res.json(db.books);

// });

// http://localhost:3000/book-author-delete/12345ONE/1
app.delete('/book-author-delete/:isbn/:id', async (req, res) => {

    console.log(req.params);

    const { isbn, id } = req.params;
    console.log(isbn);
    console.log(id);

    let getSpecificBook = await BookModel.findOne({ ISBN: isbn });

    if (getSpecificBook === null) {

        return res.json({ "error": `No book found for the ISBN of: ${isbn}` });

    } else {

        console.log(getSpecificBook.authors);

        getSpecificBook.authors.remove(id);
        const updateBook = await BookModel.findOneAndUpdate({ ISBN: isbn }, getSpecificBook, { new: true });

        return res.json({

            bookUpdated: updateBook,
            message: "Author was deleted from the book!!"

        });
    }

});


// // http://localhost:3000/author-books-delete/1/12345ONE
// app.delete('/author-books-delete/:id/:isbn', (req, res) => {

//     console.log(req.params);
//     let { id, isbn } = req.params;
//     id = (Number)(id);
//     console.log(id);
//     console.log(isbn);

//     db.authors.forEach((author) => {

//         if (author.id === id) {

//             if (!author.books.includes(isbn)) {

//                 return;

//             }

//             author.books = author.books.filter((book) => book !== isbn);
//             return author;
//         }

//         return author;

//     });

//     return res.json(db.authors);

// });


// http://localhost:3000/author-books-delete/1/12345ONE
app.delete('/author-books-delete/:id/:isbn', async (req, res) => {

    console.log(req.params);

    const { id, isbn } = req.params;
    console.log(id);
    console.log(isbn);

    let getSpecificAuthor = await AuthorModel.findOne({ id: id });

    if (getSpecificAuthor === null) {

        return res.json({ "error": `No Author found for the id of: ${id}` });

    } else {

        console.log(getSpecificAuthor.books);
        getSpecificAuthor.books.remove(isbn);

        const updateBook = await AuthorModel.findOneAndUpdate({ id: id }, getSpecificAuthor, { new: true });

        return res.json({

            updatedBook: updateBook,
            message: "Book ISBN was deleted from the Book!!"

        });

    }

});


// // http://localhost:3000/publication-books-delete/1/12345ONE
// app.delete('/publication-books-delete/:id/:isbn', (req, res) => {

//     console.log(req.params);

//     let { id, isbn } = req.params;
//     id = (Number)(id);
//     console.log(id);
//     console.log(isbn);

//     db.publications.forEach((publication) => {

//         if (publication.id === id) {

//             if (!publication.books.includes(isbn)) {

//                 return res.json({ "error": `No publication found for the books of isbn: ${isbn}` });

//             }

//             publication.books = publication.books.filter((book) => book !== isbn);
//             console.log(publication.books);
//             console.log(publication);
//             return publication;

//         }

//         return publication;

//     });

//     return res.json(db.publications);

// });


// http://localhost:3000/publication-books-delete/1/12345ONE
app.delete('/publication-books-delete/:id/:isbn', async (req, res) => {

    console.log(req.params);

    const { id, isbn } = req.params;
    console.log(id);
    console.log(isbn);


    let getSpecificPublication = await PublicationModel.findOne({ id: id });

    if (getSpecificPublication === null) {

        return res.json({ "error": `No Publication found of id: ${id}` });

    } else {

        console.log(getSpecificPublication.books);

        getSpecificPublication.books.remove(isbn);
        const updatePublication = await PublicationModel.findOneAndUpdate({ id: id }, getSpecificPublication, { new: true });

        return res.json({

            updatedPublication: updatePublication,
            message: "Book ISBN was Deleted from the Book !!"

        });

    }
});


app.listen(3000, () => {
    console.log('My Express app is running');
});