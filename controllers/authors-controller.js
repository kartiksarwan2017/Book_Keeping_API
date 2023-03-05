const AuthorModel = require('../models/authors');

/* 
Route           /authors/all-authors
Description 	Get the list of all authors
Access          PUBLIC
Methods         GET
*/
// http://localhost:8000/authors/all-authors
module.exports.getAllAuthors = async (req, res) => {

    const getAllAuthors = await AuthorModel.find();

    return res.json(getAllAuthors);

}


/* 
Route           /authors/author-id/id
Description 	Get specific author from list of all authors
Access          PUBLIC
Parameter       id
Methods         GET
*/
// http://localhost:8000/authors/author-id/id
module.exports.getSpecificAuthor =  async (req, res) => {

    const { id } = req.params;

    const getSpecificAuthor = await AuthorModel.findOne({ id: id });

    if (getSpecificAuthor === null) {
        return res.json({ "error": `No Authors found for the id of ${id}` });
    }

    return res.json(getSpecificAuthor);

}



/* 
Route           /authors/author-isbn/isbn
Description 	Get specific authors from list of all authors
Access          PUBLIC
Parameter       isbn
Methods         GET
*/
// http://localhost:8000/authors/author-isbn/isbn
module.exports.getSpecificAuthors = async (req, res) => {

    const { isbn } = req.params;

    const getSpecificAuthors = await AuthorModel.find({ books: isbn });

    if (getSpecificAuthors.length === 0) {
        return res.json({ "error": `No Authors found for the ISBN of ${isbn}` });
    }

    return res.json(getSpecificAuthors);

}

/* 
Route           /authors/add-new-author
Description 	Add New Author
Access          PUBLIC
Methods         POST 
*/
// http://localhost:8000/authors/add-new-author
module.exports.addNewAuthor =  async (req, res) => {

    const addNewAuthor = await AuthorModel.create(req.body);

    return res.json({

        authorAdded: addNewAuthor,
        message: "Author Added Successfully!!!"

    });

}

/* 
Route           /authors/author-update/id
Description 	Update the author of the book
Access          PUBLIC
Parameter       id
Methods         PUT
*/
// http://localhost:8000/authors/author-update/id
module.exports.updateAuthor =  async (req, res) => {

    const { id } = req.params;

    const updateAuthor = await AuthorModel.findOneAndUpdate({ id: id }, req.body, { new: true });

    return res.json({

        updatedAuthor: updateAuthor,
        message: "Author Updated Successfully!!"

    });

}


/* 
Route           /authors/author-delete/id
Description 	Delete the Author
Access          PUBLIC
Parameter       id
Methods         DELETE
*/
// http://localhost:8000/authors/author-delete/id
module.exports.deleteAuthor =  async (req, res) => {

    const { id } = req.params;

    const deleteAuthor = await AuthorModel.deleteOne({ id: id });

    return res.json({

        deletedAuthor: deleteAuthor,
        message: "Author Deleted Successfully!!"

    });
}

/* 
Route           /authors/author-books-delete/id/isbn
Description 	Delete the author from the book
Access          PUBLIC
Parameter       id, isbn
Methods         DELETE 
*/
// http://localhost:8000/authors/author-books-delete/id/isbn
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