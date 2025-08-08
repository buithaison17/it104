"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    get Infor() {
        return `${this.title} - ${this.author}`;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    showLibrary() {
        console.log("Danh sách sách trong thư viện: ");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.Infor}`);
        });
    }
}
const book1 = new Book("Tư duy ngược", "Bùi Thái Sơn");
const book2 = new Book("Lập trình C", "Bùi Thái Sơn");
const book3 = new Book("Lập trình HTML, CSS, JS", "Bùi Thái Sơn");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showLibrary();
