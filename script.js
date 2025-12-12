const myLibrary = [];

// Constructor
function Book(title, author, pages, status, cover){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.cover = cover;
}

// get book info (with prototype)
Book.prototype.getInfo = function(){
    console.log(`
        Title: ${this.title}
        Author: ${this.author}
        Pages: ${this.pages}
        Status ${this.status}`)
};

const book1 = new Book("Harry Potters", "J.K Rowwling", "287", "READ");
const book2 = new Book("The Witcher 3", "Andrzej Sapkowski", "230", "UnREAD");
book1.getInfo();
book2.getInfo();