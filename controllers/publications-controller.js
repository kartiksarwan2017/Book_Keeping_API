const PublicationModel = require('../models/publications');

// http://localhost:8000/publications
module.exports.getAllPublications =  async (req, res) => {

    const getAllPublications = await PublicationModel.find();

    return res.json(getAllPublications);

}



// http://localhost:8000/publication-id/1
module.exports.getSpecificPublication =  async (req, res) => {

    const { id } = req.params;

    const getSpecificPublication = await PublicationModel.findOne({ id: id });

    if (getSpecificPublication === null) {

        return res.json({ "error": `No Publication found for the id : ${id}` });

    }

    return res.json(getSpecificPublication);

}



// http://localhost:8000/publication-isbn/12345ONE
module.exports.getSpecificPublications =  async (req, res) => {

    const { isbn } = req.params;

    const getSpecificPublications = await PublicationModel.find({ books: isbn });

    if (getSpecificPublications.length === 0) {

        return res.json({ "error": `No Publication found for the given ISBN of : ${isbn}` });

    }

    return res.json(getSpecificPublications);

}


// http://localhost:8000/publication
module.exports.addNewPublication = async (req, res) => {

    const addNewPublication = await PublicationModel.create(req.body);

    return res.json({

        publicationAdded: addNewPublication,
        message: "Publication Added Successully!!!"

    });

}


// http://localhost:8000/publication-update/1
module.exports.updatePublication =  async (req, res) => {

    const { id } = req.params;

    const updatePublication = await PublicationModel.findOneAndUpdate({ id: id }, req.body, { new: true });

    return res.json({
        updatedPublication: updatePublication,
        message: "Publication Updated Successfully!!"
    });

}


// http://localhost:8000/publication-delete/1
module.exports.deletePublication =  async (req, res) => {

    const { id } = req.params;

    const deletePublication = await PublicationModel.deleteOne({ id: id });

    return res.json({

        deletedPublication: deletePublication,
        message: "Publication Deleted Successfully!!"

    });

}

// http://localhost:8000/publication-books-delete/1/12345ONE
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
