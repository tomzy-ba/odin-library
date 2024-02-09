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

    })

})
