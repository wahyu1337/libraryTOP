const myLibrary = [];

// Constructor
function Book(title, author, pages, status, cover){
    this.bookId = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.cover = cover;
}

// get book info (with prototype)
Book.prototype.getInfo = function(){
    console.log(`
        Id: ${this.bookId}
        Title: ${this.title}
        Author: ${this.author}
        Pages: ${this.pages}
        Status ${this.status}`)
};

// add to library method
function AddToLibrary(title, author, pages, status, cover){ 
    const book = new Book (title, author, pages, status, cover);
    
    //push the book to library
    myLibrary.push(book);
}

AddToLibrary("The Witcher 3", "Andrzej Sapkowski", "230", "UnREAD",);
AddToLibrary("Harry Potters", "J.K Rowwling", "287", "READ");
AddToLibrary("Breaking Bad", "Vince Gilligan", "312", "READ");

for(const book in myLibrary){
    console.log(myLibrary[book]);
}