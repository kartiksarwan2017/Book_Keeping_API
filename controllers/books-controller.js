const BookModel = require('../models/books');

// http://localhost:8000/books
module.exports.getAllBooks = async (req, res) => {

    const getAllBooks = await BookModel.find();

    return res.json(getAllBooks);

}


// http://localhost:8000/book-isbn/12345ONE
module.exports.getSpecificBook =  async (req, res) => {

    const { isbn } = req.params;

    const getSpecificBook = await BookModel.findOne({ ISBN: isbn });

    if (getSpecificBook === null) {

        return res.json({ "Error": `No Books found with the isbn of : ${isbn}` });
    }

    return res.json(getSpecificBook);
}



// http://localhost:8000/book-category/programming
module.exports.getSpecificBooks = async (req, res) => {

    const { category } = req.params;

    const getSpecificBooks = await BookModel.find({ category: category });


    if (getSpecificBooks.length === 0) {

        return res.json({ "error": `No book found for the category of : ${category}` });

    }

    return res.json(getSpecificBooks);

}

module.exports.addNewBook = async (req, res) => {

    const addNewBook = await BookModel.create(req.body);

    return res.json({
        bookAdded: addNewBook,
        message: "Book Added Successfully!!!"
    });

}


// http://localhost:8000/book-update/123Two
module.exports.updateBook = async (req, res) => {

    const { isbn } = req.params;

    const updateBook = await BookModel.findOneAndUpdate({ ISBN: isbn }, req.body, { new: true });

    return res.json({
        updatedBook: updateBook,
        message: "Book Updated Successfully!!!"
    });

}

// http://localhost:8000/book-delete/123Two
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


// http://localhost:8000/book-author-delete/12345ONE/1
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