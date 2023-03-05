const express = require('express');
const db = require('./config/mongoose.js');
const port = 8000;
const app = express();

// middle for parse form data
app.use(express.urlencoded({ extended: true }));

app.use(express.json());


app.use('/', require('./routes'));

app.listen(8000, () => {
    console.log('My Express app is running');
});