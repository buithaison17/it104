class Book {
    private title: string;
    private author: string;
    constructor(title: string, author: string){
        this.title = title;
        this.author = author;
    }
    get Infor(): string{
        return `${this.title} - ${this.author}`
    }
}

class Library {
    private books: Book[] = [];
    public addBook(book: Book): void {
        this.books.push(book);
    }
    public showLibrary(): void {
        console.log("Danh sách sách trong thư viện: ");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.Infor}`);
        })
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