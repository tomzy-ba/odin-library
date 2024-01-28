const bookDiv = document.querySelector("#book-div");
const myLibrary = [];

// function constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// this sends new books to the function constructor
function addBookToLibrary() {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}

myLibrary.forEach(book => {
    console.log(this)
})