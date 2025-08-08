"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    _id;
    _title;
    _author;
    constructor(id, title, author) {
        this._id = id;
        this._title = title;
        this._author = author;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
    set author(newAuthor) {
        this._author = newAuthor;
    }
    get Infor() {
        return `${this._title} - ${this._author}`;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    editBook(id, title, author) {
        const editBook = this.books.find(book => book.id === id);
        if (editBook) {
            if (title)
                editBook.title = title;
            if (author)
                editBook.author = author;
        }
        else {
            console.log("Không tìm thấy");
        }
    }
    findBook(name) {
        const bookFilter = this.books.filter(book => book.title.toLowerCase().includes(name.toLowerCase()));
        if (bookFilter.length > 0) {
            console.log("Danh sách tìm kiếm: ");
            bookFilter.forEach((book, index) => {
                console.log(`${index + 1}. ${book.title} - ${book.author}`);
            });
        }
        else {
        }
    }
    showLibrary() {
        console.log("Danh sách sách trong thư viện: ");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.Infor}`);
        });
    }
}
const book1 = new Book("001", "Tư duy ngược", "Bùi Thái Sơn");
const book2 = new Book("002", "Lập trình C", "Bùi Thái Sơn");
const book3 = new Book("003", "Lập trình HTML, CSS, JS", "Bùi Thái Sơn");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showLibrary();
library.findBook("trình");
