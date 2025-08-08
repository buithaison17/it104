class Book {
    private _id: string;
    private _title: string;
    private _author: string;
    constructor(id: string, title: string, author: string){
        this._id = id;
        this._title = title;
        this._author = author;
    }
    get id(): string{
        return this._id;
    }
    set title(newTitle: string){
        this._title = newTitle;
    }
    set author(newAuthor: string){
        this._author = newAuthor;
    }
    get Infor(): string{
        return `${this._title} - ${this._author}`;
    }
}

class Library {
    private books: Book [] = [];
    public addBook(book: Book): void {
        this.books.push(book);
    }
    public editBook(id: string, title?: string, author?: string): void{
        const editBook = this.books.find(book => book.id === id);
        if(editBook){
            if(title) editBook.title = title;
            if(author) editBook.author = author;   
        }
        else{
            console.log("Không tìm thấy");
        }
    }
    public showLibrary(): void {
        console.log("Danh sách sách trong thư viện: ");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.Infor}`);
        })
    }
}

const book1 = new Book("001", "Tư duy ngược", "Bùi Thái Sơn");
const book2 = new Book("002", "Lập trình C", "Bùi Thái Sơn");
const book3 = new Book("003", "Lập trình HTML, CSS, JS", "Bùi Thái Sơn");

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.editBook("001", "", "Sơn Bùi");

library.showLibrary();