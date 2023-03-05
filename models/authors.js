const mongoose = require('mongoose');

// create Author Schema
const AuthorSchema = mongoose.Schema({

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

const AuthorModel = mongoose.model("authors", AuthorSchema);

module.exports = AuthorModel;