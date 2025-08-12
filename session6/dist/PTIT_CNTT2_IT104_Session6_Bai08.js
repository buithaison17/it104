"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    _id;
    title;
    author;
    stock;
    status;
    constructor(id, title, author, stock, status) {
        this._id = id;
        this.author = author;
        this.status = status;
        this.stock = stock;
        this.title = title;
    }
}
class Member {
    _id;
    name;
    contact;
    status;
    books = [];
    constructor(id, name, contact, status) {
        this._id = id;
        this.contact = contact;
        this.name = name;
        this.status = status;
    }
}
class LendedBook {
    _memberId;
    _bookId;
    dueDate;
    constructor(memberId, bookId, dueDate) {
        this._memberId = memberId;
        this._bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    books = [];
    members = [];
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. Tên sách : ${book.title}`);
            console.log(`- Tác giả: ${book.author}`);
            console.log(`- Số lượng: ${book.stock}`);
            console.log(`- Tình trạng: ${book.status}`);
        });
    }
}
// Tạo thư viện
const library = new Library();
// Tạo sách
const book1 = new Book(1, "Tư duy ngược", "Sơn Bùi", 5, "Sách mới");
const book2 = new Book(2, "Tư duy xuôi", "Sơn Bùi", 2, "sách cũ");
// Thêm sách vào thư viện
library.addBook(book1);
library.addBook(book2);
// Hiển thị
library.showBooks();
