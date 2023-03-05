const mongoose = require('mongoose');

// create publication Schema
const publicationSchema = mongoose.Schema({

    id: {
        type: Number
    },
    name: {
        type: String
    },
    books: {
        type: [String]
    }
}, {
    timestamps: true
});


const PublicationModel = mongoose.model('publications', publicationSchema);

module.exports = PublicationModel;