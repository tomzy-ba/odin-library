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


document.querySelector("#newBookButton").addEventListener("click", () => {
    const bookDialog = document.querySelector("#bookDialog");

    const inputTitle = document.querySelector("#inputTitle");
    const inputAuthor = document.querySelector("#inputAuthor");
    const inputPages = document.querySelector("#inputPages");

    bookDialog.showModal();
});


const dialogSubmit = document.querySelector("#dialogSubmit");
dialogSubmit.addEventListener("click", (event) => {
    const bookForm = document.querySelector("#bookForm");
    if (bookForm.checkValidity()) {
    event.preventDefault();
    new Book(inputTitle.value, inputAuthor.value, inputPages.value);
    displayLibrary();
    } else {alert("input error")}
});
 

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
        bookRemove.innerText = "remove";
        bookDiv.append(bookRemove);
        bookRemove.addEventListener("click", () => {
            myLibrary.splice(index, 1)
            displayLibrary();
        })

        const bookReadStatus = document.createElement("button");
        bookReadStatus.innerText = `read: ${book.read}`;
        bookDiv.append(bookReadStatus);
        bookReadStatus.addEventListener("click", () => {
           book.toggleRead();
           displayLibrary();
        })


    })
}
displayLibrary()