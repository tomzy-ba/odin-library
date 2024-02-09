const myLibrary = [];

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
    }
    toggleRead() {
        this.read = !this.read;
    }
}
const jeff = new Book("life of pi", "jeff", "321")

const newBookBtn = document.querySelector("#newBookButton");
newBookBtn.addEventListener("click", () => {
    new Book(prompt("Would you like"))
})
