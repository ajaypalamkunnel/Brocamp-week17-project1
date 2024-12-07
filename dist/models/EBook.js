"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EBook = void 0;
const Book_1 = require("./Book");
class EBook extends Book_1.Book {
    constructor(title, author, year, fileSize) {
        super(title, author, year);
        this.fileSizeMB = fileSize;
    }
    //overridign
    displayInfo() {
        return `${super.displayInfo()} , File size : ${this.fileSizeMB}`;
    }
    download() {
        return `Downloading... ${this.title}`;
    }
}
exports.EBook = EBook;
