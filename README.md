# Book-Keeping-API

## Introduction

Creating a **Book Keeping API** to CRUD operation on book Details. It is built
using Express, Nodejs, MongoDB.

<br/>


## Important Link:

- **Hosting Link**: https://book-keeping-api.onrender.com
- **Sample Postman Documentation Link**: https://documenter.getpostman.com/view/9062378/2s8YevqB85

<br/>


We need to have the following details. 

- Books details.
- Author details.
- Publication details.

## Book Details

For the books, we'll have the following properties. 

- ISBN → string
- title → string
- authors → array
- language → string
- pubDate → string
- numOfPage → number
- category → array
- publication → number

Here `ISBN` will be unique because every book has its own `ISBN` number. `Authors` will be array because one book can have multiple authors. `Publication` will be a number, here we are assuming that one book can be published by only one publication. And rest of the properties are self-explanatory.

## Author Details

For the author, we'll have the following properties. 

- id → number
- name → string
- books → array

Here `id` will be unique because every author will have their own id. `books` will be array because one author might have written multiple books. And rest of the properties are self-explanatory.

## Publications Details

For the publications, we'll have the following properties. 

- id → number
- name → string
- books → array

Here `id` will be unique because every publication will have its own id. `books` will be array because one publication can publish multiple books. And rest of the properties are self-explanatory.

<br />

## Features

- Users can add a new book along with its details. More than one books can added at single time.
- Users can update the specific book details.
- Users can delete the specific book details.
- Users can view all books details, specific book details, list all the books based on category.
- Users can add a new Author of the book.
- Users can update the author details of the book.
- Users can delete specific author of the book.
- Users can delete the specific book ISBN from the Author details.
- Users can able to view all authors details, specific author details of book by filtering the authors using id, Specific author details of book by filtering the publications using book ISBN list of all the authors based on book ISBN.
- Users can add a new publication of the book.
- Users can delete the specific publication of the book.
- Users can update the publication details of the book.
- Users can view list of all publications, specific publication detail of book by filtering the publications using id,    specific publication details of book by filtering the publications using book ISBN.
- Users can delete the specific book ISBN from the specific publication of the book.

<br/>

## Routes & URL

- **/**
  <p> Home Page:</p>
  https://book-keeping-api.onrender.com

- **/books/add-new-book**
  <p> To Add a new Book:</p>
  https://book-keeping-api.onrender.com/books/add-new-book

- **/books/book-isbn/isbn**
  <p>To get the Specific Book Details by filtering books using ISBN of book:</p>
  https://book-keeping-api.onrender.com/books/book-isbn/isbn

- **/books/book-category/category**
  <p>To get the List of all books by filtering books using category:</p>
  https://book-keeping-api.onrender.com/books/book-category/category

- **/books/book-update/isbn**
  <p> To update the details of the book: </p>
  https://book-keeping-api.onrender.com/books/book-update/isbn

- **/books/book-delete/isbn**
  <p> To delete the book by filtering books using id: </p>
  https://book-keeping-api.onrender.com/books/book-delete/isbn
  <br/>

  - **/books/book-author-delete/isbn/id**
  <p> To delete id of author from the book details by fitering the books using ISBN and authors using id: </p>
  https://book-keeping-api.onrender.com/books/book-author-delete/isbn/id

  <br />

 - **/authors/add-new-author**
   <p> To add a new author of the book: </p>
   https://book-keeping-api.onrender.com/authors/add-new-author

  - **/authors/all-authors**
  <p> To get the list of all authors: </p>
  https://book-keeping-api.onrender.com/authors/all-authors

- **/authors/author-id/id**
  <p> To get the specific author details by filtering the author using id: </p>
  https://book-keeping-api.onrender.com/authors/author-id/id

  - **/authors/author-isbn/isbn**
  <p> To get the List of all authors by filtering authors using ISBN of book: </p>
  https://book-keeping-api.onrender.com/authors/author-isbn/isbn

  - **/authors/author-update/id**
  <p> To update the author details of the book: </p>
  https://book-keeping-api.onrender.com/authors/author-update/id

- **/authors/author-delete/id**
  <p> To delete the specific author by filtering the author using id: </p>
  https://book-keeping-api.onrender.com/authors/author-delete/id
  
- **/authors/author-books-delete/id/isbn**
  <p> To delete the ISBN of book from the author details by filtering the authors using id and books using ISBN: </p>
  https://book-keeping-api.onrender.com/authors/author-books-delete/id/isbn

<br />

- **/publications/all-publications**
  <p> To get the list of all publications details of book: </p>
  https://book-keeping-api.onrender.com/publications/all-publications

- **/publications/publication-id/id**
  <p> To get the specific publication details of books by filtering the publications using id: </p>
  https://book-keeping-api.onrender.com/publications/publication-id/id

- **/publications/publication-isbn/isbn**
  <p> To get the specific publication details of books by filtering the publications using ISBN of book: </p>
  https://book-keeping-api.onrender.com/publications/publication-isbn/isbn

- **/publications/add-new-publication**
  <p> To add a new publication details: </p>
  https://book-keeping-api.onrender.com/publications/add-new-publication

- **/publications/publication-update/id**
  <p> To update the publication details of book by filtering the publications using id: </p>
  https://book-keeping-api.onrender.com/publications/publication-update/id

- **/publications/publication-delete/id**
  <p> To delete the publication details of book by filtering the publications using id: </p>
  https://book-keeping-api.onrender.com/publications/publication-delete/id

- **/publications/publication-books-delete/id/isbn**
  <p> To delete the ISBN of book from the publications by filtering books using ISBN and publications using id: </p>
  https://book-keeping-api.onrender.com/publications/publication-books-delete/id/isbn

<br />  



## Tools Used

 <p align="justify">
<img height="140" width="140" src="https://www.startechup.com/wp-content/uploads/January-11-2021-Nodejs-What-it-is-used-for-and-when-where-to-use-it-for-your-enterprise-app-development.jpg">
<img height="140" width="140" src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png">
<img height="140" width="140" src="https://g.foolcdn.com/art/companylogos/square/mdb.png">
<img height="140" width="140" src="https://mms.businesswire.com/media/20210806005076/en/761650/22/postman-logo-vert-2018.jpg">
<img height="140" width="140" src="https://www.pngitem.com/pimgs/m/13-131098_visual-studio-code-logo-hd-png-download.png">
</p>

- Version Control System: Git
- VCS Hosting: GitHub
- Integrated Development Environment: VSCode
  <br/>
  <br/>

## Requirements

For development, you will only need Node.js and a node global package installed in your environement and mongodb for database.

### Node

- Node Installtion on Windows
  Go on to the [official Node.js website](https://nodejs.org/en/) and download the installer. Also, be sure to have `.git` available in your PATH,
  `npm` might need it (You can find [git](https://git-scm.com/)).
- Other operating System
  You can find more information about the installation on the official [Node.js website](https://nodejs.org/en/) and the official [NPM website](https://www.npmjs.com/).

If the installation was successful, you should be able to run the following command.

```
$ node --version
v16.13.0

$ npm --version
8.2.0
```

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

```
$ npm install npm -g

```

<br/>

## To run the project on your local machine:

1. Open terminal.

2. Change the current working directory to the location where you want the cloned directory.

   ```
   $ git clone https://github.com/kartiksarwan2017/Book_Keeping_API

   ```

3. Install all the dependencies by running :

   ```
   npm install

   ```

4. Run npm start to run the project at local host, port 8000:

   ```
   $ npm start

   ```

<br/>

## Configuration

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- A setting
- one more setting
- Another one more setting

## Screens

<p align="justify">
   
### Home Page:    
<img src="/screenshots/HomePage.PNG">
   
### Add new book:
<img src="/screenshots/addNewBook.PNG">
   
### Get All Books:
<img src="/screenshots/getAllBooks.PNG">

### Get Specific Book:
<img src="/screenshots/GetSpecificBook.PNG">

### Get Specific Books:
<img src="/screenshots/getSpecificBooks.PNG">

### Update Book Details:
<img src="/screenshots/updateBook.PNG">

### Delete Book Details:
<img src="/screenshots/deleteBook.PNG">

### Delete author id from the Book:
<img src="/screenshots/DeleteAuthorFromBook.PNG">

### Add New Author:
<img src="/screenshots/addNewAuthor.PNG">

### Get All Authors:
<img src="/screenshots/getAllAuthors.PNG">

### Get Specific Author:
<img src="/screenshots/getSpecificAuthor.PNG">

### Get Specific Authors:
<img src="/screenshots/getSpecificAuthors.PNG">

### Update Author Details:
<img src="/screenshots/updateAuthorDetails.PNG">

### Delete Author:
<img src="/screenshots/DeleteAuthor.PNG">

### Delete the Book ISBN from Author:
<img src="/screenshots/deleteISBNfromAuthor.PNG">

### Add New Publication:
<img src="/screenshots/addNewPublication.PNG">

### Get All Publications:
<img src="/screenshots/getAllPublications.PNG">

### Get Specific Publications:
<img src="/screenshots/getSpecificPublications.PNG">


### Update Publication:
<img src="/screenshots/updatePublicationDetails.PNG">

### Delete Publication:
<img src="/screenshots/DeletePublication.PNG">

### Delete Book ISBN from Publication:
<img src="/screenshots/DeleteISBNofbookfrompublication.PNG">


<br/>
