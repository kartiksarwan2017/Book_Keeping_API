// Import the mongoose module
const mongoose = require('mongoose');
require('dotenv').config();

//Set up default mongoose connection
var mongoDB = process.env.MONGODB_URL;
module.exports = mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));