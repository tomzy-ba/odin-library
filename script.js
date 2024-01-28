
const myLibrary = [];

// function constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// this sends new books to the function constructor
function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}
const bookTableTitle = document.querySelector("#bookTableTitle");

function displayBooks() {
    myLibrary.forEach(book => {
        const newBookTableTitle = document.createElement("th");
        newBookTableTitle.innerText = "hello";

    })
}

addBookToLibrary("The hobbit", "Tolkien", "763");
addBookToLibrary("Harry Potter", "JK Rowling", "1042");

displayBooks();
