
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
const bookTable = document.querySelector("#bookTable");
const bookTableTitle = document.querySelector("#bookTableTitle");
const bookTableAuthor = document.querySelector("#bookTableAuthor")
const bookTablePages = document.querySelector("#bookTablePages")

function displayBooks() {
    bookTableTitle.innerHTML = ""; bookTableAuthor.innerHTML = ""; bookTablePages.innerHTML = "";

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
        
        const newBookTableTitleRemove = document.createElement("button");
        newBookTableTitleRemove.innerText = "";
        bookTableTitle.append(newBookTableTitleRemove);

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
const bookFormSubmit = document.querySelector("#bookFormSubmit");

bookFormSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary(inputBookTitle.value, inputBookAuthor.value, inputBookPages.value);
    displayBooks();
})
