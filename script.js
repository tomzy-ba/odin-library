const myLibrary = [];

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
        myLibrary.push(this)
    }
    toggleRead() {
        this.read = !this.read;
    }
}
new Book("life of pi", "jeff", "321")


document.querySelector("#newBookButton").addEventListener("click", () => {
    const bookDialog = document.querySelector("#bookDialog");
    const dialogSubmit = document.querySelector("#dialogSubmit");

    const inputTitle = document.querySelector("#inputTitle");
    const inputAuthor = document.querySelector("#inputAuthor");
    const inputPages = document.querySelector("#inputPages");

    bookDialog.showModal();
    dialogSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        new Book(inputTitle.value, inputAuthor.value, inputPages.value);
        displayLibrary();
    })

})


function displayLibrary() {
    const libraryDiv = document.querySelector("#libraryDiv");
    libraryDiv.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        libraryDiv.append(bookDiv);

        const bookTitle = document.createElement("div");
        bookTitle.innerText = book.title;
        bookDiv.append(bookTitle);

        const bookAuthor = document.createElement("div");
        bookAuthor.innerText = book.author;
        bookDiv.append(bookAuthor);

        const bookPages = document.createElement("div");
        bookPages.innerText = book.pages;
        bookDiv.append(bookPages);

        const bookRemove = document.createElement("button");
        bookRemove.addEventListener("click", () => {

        })

    })
}
displayLibrary()