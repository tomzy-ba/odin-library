
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
const bookTableAuthor = document.querySelector("#bookTableAuthor")
const bookTablePages = document.querySelector("#bookTablePages")

function displayBooks() {
    myLibrary.forEach(book => {
        const newBookTableTitle = document.createElement("th");
        newBookTableTitle.innerHTML = book.title;
        bookTableTitle.append(newBookTableTitle);

        const newBookTableAuthor = document.createElement("td")
        newBookTableAuthor.innerHTML = book.author;
        bookTableAuthor.append(newBookTableAuthor);

        const newBookTablePages = document.createElement("td");
        newBookTablePages.innerHTML = book.pages;
        bookTablePages.append(newBookTablePages);
    })
}

const openDialogButton = document.querySelector("#openDialogButton");
const addBookDialog = document.querySelector("#addBookDialog");
const closeDialogButton = document.querySelector("#closeDialogButton");


openDialogButton.addEventListener("click", () => {
    addBookDialog.showModal();
})
closeDialogButton.addEventListener("click", () =>{
    addBookDialog.close();
})

const inputBookTitle = document.querySelector("#inputBookTitle");
const inputBookAuthor = document.querySelector("#inputBookAuthor");
const inputBookPages = document.querySelector("#inputBookPages");



addBookToLibrary("The hobbit", "Tolkien", "763");
addBookToLibrary("Harry Potter", "JK Rowling", "1042");

displayBooks();
