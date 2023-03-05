// Import the mongoose module
var mongoose = require('mongoose');
// Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1:27017/Book_Keeping_API';
module.exports = mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));