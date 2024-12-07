import { Book } from "./models/Book";
import { EBook } from "./models/EBook";
import { Library } from "./services/library";

const library = new Library();

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('1984', 'George Orwell', 1949);

const ebook1 = new EBook('JavaScript: The Good Parts', 'Douglas Crockford', 2008, 5);
const ebook2 = new EBook('TypeScript Handbook', 'Microsoft', 2020, 10);


library.addBook(book1)
library.addBook(book2)
library.addBook(ebook1)
library.addBook(ebook2)



library.listBooks()