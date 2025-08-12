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
    status = true;
    books = [];
    constructor(id, name, contact) {
        this._id = id;
        this.contact = contact;
        this.name = name;
    }
    get id() {
        return this._id;
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
    registerMember(member) {
        this.members.push(member);
    }
    blockMember(id) {
        const member = this.members.find(member => member.id === id);
        if (member) {
            member.status = false;
            console.log(`Đã chặn người dùng: ${member.name}`);
        }
        else {
            console.log("Người dùng không tồn tại");
        }
    }
    showBooks() {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. Tên sách : ${book.title}`);
            console.log(`- Tác giả: ${book.author}`);
            console.log(`- Số lượng: ${book.stock}`);
            console.log(`- Tình trạng: ${book.status}`);
        });
    }
    showMembers() {
        this.members.forEach((member, index) => {
            console.log(`${index + 1}. ${member.name}`);
            console.log(`- Liên hệ: ${member.contact}`);
            console.log(`- Trạng thái: ${member.status}`);
        });
    }
}
// Tạo thư viện
const library = new Library();
// Tạo sách
const book1 = new Book(1, "Tư duy ngược", "Sơn Bùi", 5, "Sách mới");
const book2 = new Book(2, "Tư duy xuôi", "Sơn Bùi", 2, "sách cũ");
// Tạo member
const member1 = new Member(1, "Bùi Thái Sơn", "sonbui@gmail.com");
// Thêm sách vào thư viện
library.addBook(book1);
library.addBook(book2);
// Thêm member vào thư viện
library.registerMember(member1);
// Block người dùng
library.blockMember(1);
// Hiển thị
library.showBooks();
library.showMembers();
