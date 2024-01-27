
const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
}