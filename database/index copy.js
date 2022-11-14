// books is the collection of objects -> Array
/* Every book is represented by an object 
 and the database for all the books is 
 represented by Array -> Collection of Objects */
let books = [
    {

        ISBN: "12345ONE",
        title: "Getting started with MERN",
        authors: [1, 2],
        language: "en",
        pubDate: "2021-07-07",
        nameOfPage: 225,
        category: ["fiction", "programming", "tech", "web dev"],
        publication: 1

    },
    {

        ISBN: "12345TWO",
        title: "Getting started with Python",
        authors: [1, 2],
        language: "en",
        pubDate: "2021-07-07",
        nameOfPage: 550,
        category: ["fiction", "tech", "web dev"],
        publication: 1

    }
];

let authors = [
    {
        id: 1,
        name: "Nikhil",
        books: ["12345ONE", "12345TWO"]

    },
    {
        id: 2,
        name: "ram",
        books: ["12345ONE", "12345TWO"]
    }
];


let publications = [
    {
        id: 1,
        name: "Shape AI publication",
        books: ["12345ONE", "12345TWO"]
    },
    {
        id: 2,
        name: "Agarwal Publications",
        books: []

    }
];


module.exports = { books, authors, publications }; 