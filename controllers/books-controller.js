const BookModel = require('../models/books');

/* 
Route           /books/all-books
Description 	Get the list of all books
Access          PUBLIC
Methods         GET
*/
// http://localhost:8000/books/all-books
module.exports.getAllBooks = async (req, res) => {

    const getAllBooks = await BookModel.find();

    return res.json(getAllBooks);

}


/* 
Route           /books/book-isbn/isbn
Description 	Get the specific book details 
Access          PUBLIC
Parameter       isbn
Methods         GET
*/
// http://localhost:8000/books/book-isbn/isbn
module.exports.getSpecificBook =  async (req, res) => {

    const { isbn } = req.params;

    const getSpecificBook = await BookModel.findOne({ ISBN: isbn });

    if (getSpecificBook === null) {

        return res.json({ "Error": `No Books found with the isbn of : ${isbn}` });
    }

    return res.json(getSpecificBook);
}


/* 
Route           /books/book-category/category
Description 	Get list of all books details based on book category
Access          PUBLIC
Parameter       category
Methods         GET
*/
// http://localhost:8000/books/book-category/category
module.exports.getSpecificBooks = async (req, res) => {

    const { category } = req.params;

    const getSpecificBooks = await BookModel.find({ category: category });


    if (getSpecificBooks.length === 0) {

        return res.json({ "error": `No book found for the category of : ${category}` });

    }

    return res.json(getSpecificBooks);

}

/* 
Route           /books/add-new-book
Description 	add a new book
Access          PUBLIC
Parameter       category
Methods         POST
*/
// http://localhost:8000/books/add-new-book
module.exports.addNewBook = async (req, res) => {

    const addNewBook = await BookModel.create(req.body);

    return res.json({
        bookAdded: addNewBook,
        message: "Book Added Successfully!!!"
    });

}


/* 
Route           /books/book-update/isbn
Description 	Update the Book details
Access          PUBLIC
Parameter       isbn
Methods         PUT
*/
// http://localhost:8000/books/book-update/isbn
module.exports.updateBook = async (req, res) => {

    const { isbn } = req.params;

    const updateBook = await BookModel.findOneAndUpdate({ ISBN: isbn }, req.body, { new: true });

    return res.json({
        updatedBook: updateBook,
        message: "Book Updated Successfully!!!"
    });

}

/* 
Route           /books/book-delete/isbn
Description 	Delete the book details
Access          PUBLIC
Parameter       isbn
Methods         DELETE
*/
// http://localhost:8000/books/book-delete/isbn
module.exports.deleteBook = async (req, res) => {

    console.log(req.params);
    const { isbn } = req.params;

    const deleteBook = await BookModel.deleteOne({ ISBN: isbn });

    console.log(deleteBook);

    return res.json({

        deletedBook: deleteBook,
        message: "Book Deleted Successfully!!!"

    });
}

/* 
Route           /books/book-author-delete/isbn/id
Description 	Delete the Author from the book 
Access          PUBLIC
Parameter       isbn, id
Methods         DELETE
*/
// http://localhost:8000/books/book-author-delete/isbn/id
module.exports.deleteBookAuthor =  async (req, res) => {

    const { isbn, id } = req.params;

    let getSpecificBook = await BookModel.findOne({ ISBN: isbn });

    if (getSpecificBook === null) {

        return res.json({ "error": `No book found for the ISBN of: ${isbn}` });

    } else {

        getSpecificBook.authors.remove(id);
        const updateBook = await BookModel.findOneAndUpdate({ ISBN: isbn }, getSpecificBook, { new: true });

        return res.json({

            bookUpdated: updateBook,
            message: "Author was deleted from the book!!"

        });
    }

}