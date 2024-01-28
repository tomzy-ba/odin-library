
const myLibrary = [];

// function constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    }

// this sends new books to the function constructor
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}
const bookTable = document.querySelector("#bookTable");
const bookTableTitle = document.querySelector("#bookTableTitle");
const bookTableAuthor = document.querySelector("#bookTableAuthor");
const bookTablePages = document.querySelector("#bookTablePages");
const bookTableRemove = document.querySelector("#bookTableRemove");

function displayBooks() {
    bookTableTitle.innerHTML = ""; bookTableAuthor.innerHTML = ""; bookTablePages.innerHTML = ""; bookTableRemove.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const newBookTableTitle = document.createElement("th");
        newBookTableTitle.innerHTML = book.title;
        bookTableTitle.append(newBookTableTitle);
        
        const newBookTableAuthor = document.createElement("td")
        newBookTableAuthor.innerHTML = book.author;
        bookTableAuthor.append(newBookTableAuthor);

        const newBookTablePages = document.createElement("td");
        newBookTablePages.innerHTML = book.pages;
        bookTablePages.append(newBookTablePages);
        
        const newBookTableHolder = document.createElement("td");
        const newBookTableRemove = document.createElement("button");
        const newBookTableRead = document.createElement("button");

        newBookTableRemove.innerHTML = "Remove";

        newBookTableRemove.addEventListener("click", () => {
            myLibrary.splice(index, 1)
            displayBooks();
        })

        newBookTableRead.addEventListener("click", () => {
            book.read = !book.read;
            displayBooks();
        })
        if(book.read == true) {
           newBookTableRead.innerHTML = "read";
        } else { 
            newBookTableRead.innerHTML = "unread";
        }


        newBookTableHolder.append(newBookTableRemove);
        newBookTableHolder.append(newBookTableRead);
        bookTableRemove.append(newBookTableHolder);
        


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
