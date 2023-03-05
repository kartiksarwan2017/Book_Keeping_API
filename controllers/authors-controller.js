const AuthorModel = require('../models/authors');

// http://localhost:8000/authors
module.exports.getAllAuthors = async (req, res) => {

    const getAllAuthors = await AuthorModel.find();

    return res.json(getAllAuthors);

}


// http://localhost:8000/author-id/1
module.exports.getSpecificAuthor =  async (req, res) => {

    const { id } = req.params;

    const getSpecificAuthor = await AuthorModel.findOne({ id: id });

    if (getSpecificAuthor === null) {
        return res.json({ "error": `No Authors found for the id of ${id}` });
    }

    return res.json(getSpecificAuthor);

}



// http://localhost:8000/author-isbn/12345ONE
module.exports.getSpecificAuthors = async (req, res) => {

    const { isbn } = req.params;

    const getSpecificAuthors = await AuthorModel.find({ books: isbn });

    if (getSpecificAuthors.length === 0) {
        return res.json({ "error": `No Authors found for the ISBN of ${isbn}` });
    }

    return res.json(getSpecificAuthors);

}


// http://localhost:8000/author
module.exports.addNewAuthor =  async (req, res) => {

    const addNewAuthor = await AuthorModel.create(req.body);

    return res.json({

        authorAdded: addNewAuthor,
        message: "Author Added Successfully!!!"

    });

}


// http://localhost:8000/author-update/1
module.exports.updateAuthor =  async (req, res) => {

    const { id } = req.params;

    const updateAuthor = await AuthorModel.findOneAndUpdate({ id: id }, req.body, { new: true });

    return res.json({

        updatedAuthor: updateAuthor,
        message: "Author Updated Successfully!!"

    });

}

// http://localhost:8000/author-delete/1
module.exports.deleteAuthor =  async (req, res) => {

    const { id } = req.params;

    const deleteAuthor = await AuthorModel.deleteOne({ id: id });

    return res.json({

        deletedAuthor: deleteAuthor,
        message: "Author Deleted Successfully!!"

    });
}


// http://localhost:8000/author-books-delete/1/12345ONE
module.exports.authorBooksDelete =  async (req, res) => {

    const { id, isbn } = req.params;

    let getSpecificAuthor = await AuthorModel.findOne({ id: id });

    if (getSpecificAuthor === null) {

        return res.json({ "error": `No Author found for the id of: ${id}` });

    } else {

        getSpecificAuthor.books.remove(isbn);

        const updateBook = await AuthorModel.findOneAndUpdate({ id: id }, getSpecificAuthor, { new: true });

        return res.json({

            updatedBook: updateBook,
            message: "Book ISBN was deleted from the Book!!"

        });

    }

}