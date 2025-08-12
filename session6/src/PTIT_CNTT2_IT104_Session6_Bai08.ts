class Book {
    private _id: number;
    public title: string;
    public author: string;
    public stock: number;
    public status: string;
    constructor(id: number, title: string, author: string, stock: number, status: string){
        this._id = id;
        this.author = author;
        this.status = status;
        this.stock = stock;
        this.title = title;
    }
}

class Member {
    private _id: number;
    public name: string;
    public contact: string;
    public status: string;
    public books: Book[] = [];
    constructor(id: number, name: string, contact: string, status: string){
        this._id = id;
        this.contact = contact;
        this.name = name;
        this.status = status;
    }
}

class LendedBook {
    private _memberId: number;
    private _bookId: number;
    public dueDate: Date;
    constructor(memberId: number, bookId: number, dueDate: Date){
        this._memberId = memberId;
        this._bookId = bookId;
        this.dueDate = dueDate; 
    }
}

class Library {
    public books: Book[] = [];
    public members: Member[] = [];
    public addBook(book: Book): void{
        this.books.push(book);
    }
    public showBooks(): void{
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. Tên sách : ${book.title}`);
            console.log(`- Tác giả: ${book.author}`);
            console.log(`- Số lượng: ${book.stock}`);
            console.log(`- Tình trạng: ${book.status}`);
        })
    }
}

// Tạo thư viện
const library = new Library();

// Tạo sách
const book1: Book = new Book(1, "Tư duy ngược", "Sơn Bùi", 5, "Sách mới");
const book2: Book = new Book(2, "Tư duy xuôi", "Sơn Bùi", 2, "sách cũ");

// Thêm sách vào thư viện
library.addBook(book1);
library.addBook(book2);

// Hiển thị
library.showBooks();