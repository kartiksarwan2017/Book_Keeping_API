const express = require('express');
const db = require('./config/mongoose.js');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;
const app = express();

// middle for parse form data
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/', require('./routes'));


app.listen(port, (err) => {

    if(err){
        console.log(`Error while running express server: ${err}`);
        return;
    }
    
    console.log(`Express Server is running on port: ${port}`);
});