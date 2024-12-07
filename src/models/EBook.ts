import { Book } from "./Book";
export class EBook extends Book{
    fileSizeMB:number;

    constructor(title:string,author:string,year:number,fileSize:number){
        super(title,author,year);
        this.fileSizeMB = fileSize
    }
    //overridign
    displayInfo(): string {
        return `${super.displayInfo()} , File size : ${this.fileSizeMB}`
    }

    download():string{
        return `Downloading... ${this.title}`
    }
}