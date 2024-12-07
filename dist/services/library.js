"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        return `${book.title} Congratulation Added to library....`;
    }
    listBooks() {
        console.log("Avalilable books are: ");
        this.books.forEach((book, i) => {
            console.log(`${i + 1}) ${book.displayInfo()}`);
        });
    }
    searchBook(title) {
        const foundBook = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
        if (foundBook) {
            console.log('Book found:', foundBook.displayInfo());
        }
        else {
            console.log('Book not found');
        }
    }
}
exports.Library = Library;
