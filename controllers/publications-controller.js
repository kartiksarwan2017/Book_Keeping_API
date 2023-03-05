const PublicationModel = require('../models/publications');


/* 
Route           /publications/all-publications
Description 	Get the list of all publications
Access          PUBLIC
Methods         GET
*/
// http://localhost:8000/publications/all-publications
module.exports.getAllPublications =  async (req, res) => {

    const getAllPublications = await PublicationModel.find();

    return res.json(getAllPublications);

}


/* 
Route           /publications/publication-id/id
Description 	Get specific publication details
Access          PUBLIC
Parameter       id
Methods         GET
*/
// http://localhost:8000/publications/publication-id/id
module.exports.getSpecificPublication =  async (req, res) => {

    const { id } = req.params;

    const getSpecificPublication = await PublicationModel.findOne({ id: id });

    if (getSpecificPublication === null) {

        return res.json({ "error": `No Publication found for the id : ${id}` });

    }

    return res.json(getSpecificPublication);

}


/* 
Route           /publications/publication-id/isbn
Description 	Get specific publication details 
Access          PUBLIC
Parameter       isbn
Methods         GET
*/
// http://localhost:8000/publications/publication-isbn/isbn
module.exports.getSpecificPublications =  async (req, res) => {

    const { isbn } = req.params;

    const getSpecificPublications = await PublicationModel.find({ books: isbn });

    if (getSpecificPublications.length === 0) {

        return res.json({ "error": `No Publication found for the given ISBN of : ${isbn}` });

    }

    return res.json(getSpecificPublications);

}

/* 
Route           /publications/add-new-publication
Description 	Add a new publication
Access          PUBLIC
Parameter       isbn
Methods         POST
*/
// http://localhost:8000/publications/add-new-publication
module.exports.addNewPublication = async (req, res) => {

    const addNewPublication = await PublicationModel.create(req.body);

    return res.json({

        publicationAdded: addNewPublication,
        message: "Publication Added Successully!!!"

    });

}

/* 
Route           /publications/publication-update/id
Description 	Update the publication details
Access          PUBLIC
Parameter       id
Methods         PUT
*/
// http://localhost:8000/publications/publication-update/id
module.exports.updatePublication =  async (req, res) => {

    const { id } = req.params;

    const updatePublication = await PublicationModel.findOneAndUpdate({ id: id }, req.body, { new: true });

    return res.json({
        updatedPublication: updatePublication,
        message: "Publication Updated Successfully!!"
    });

}

/* 
Route           /publications/publication-delete/id
Description 	Delete specific publication details
Access          PUBLIC
Parameter       id
Methods         DELETE
*/
// http://localhost:8000/publications/publication-delete/id
module.exports.deletePublication =  async (req, res) => {

    const { id } = req.params;

    const deletePublication = await PublicationModel.deleteOne({ id: id });

    return res.json({

        deletedPublication: deletePublication,
        message: "Publication Deleted Successfully!!"

    });

}

/* 
Route           /publications/publication-books-delete/id/isbn
Description 	Delete the ISBN of Book from the Publications Details
Access          PUBLIC
Parameter       id, isbn
Methods         DELETE
*/
// http://localhost:8000/publications/publication-books-delete/id/isbn
module.exports.publicationBooksDelete =  async (req, res) => {

    const { id, isbn } = req.params;

    let getSpecificPublication = await PublicationModel.findOne({ id: id });

    if (getSpecificPublication === null) {

        return res.json({ "error": `No Publication found of id: ${id}` });

    } else {

        getSpecificPublication.books.remove(isbn);
        const updatePublication = await PublicationModel.findOneAndUpdate({ id: id }, getSpecificPublication, { new: true });

        return res.json({

            updatedPublication: updatePublication,
            message: "Book ISBN was Deleted from the Book !!"

        });

    }
}
