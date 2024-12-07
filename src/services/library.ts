import { Book } from "../models/Book";
import { EBook } from "../models/EBook";
export class Library{
    private books:Book[] = [];

    addBook(book:Book):string{
        this.books.push(book)
        return `${book.title} Congratulation Added to library....`
    }


    listBooks():void{
        console.log("Avalilable books are: ");
        
        this.books.forEach((book,i)=>{
            console.log(`${i+1}) ${book.displayInfo()}`);
        })
    }


    searchBook(title:string):void{
        const foundBook = this.books.find(book=>book.title.toLowerCase() === title.toLowerCase())
        if(foundBook){
            console.log('Book found:',foundBook.displayInfo());
        }else{
            console.log('Book not found');
            
        }
    }
}