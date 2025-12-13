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

AddToLibrary("The Witcher 3", "Andrzej Sapkowski", "230", "UNREAD",);
AddToLibrary("Harry Potters", "J.K Rowwling", "287", "READ");


// page display
// document manipulation
const container = document.querySelector("#container");

// element create   

// submit button
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // get the data
    const titleValue = document.querySelector('#title').value;
    const authorValue = document.querySelector('#author').value;
    const pagesValue = document.querySelector ('#pages').value;
    const coverValue = document.querySelector('#image-upload').value;
    const readValue = document.querySelector('input[name="readStatus"]:checked').value;
    const statusValue = readValue ? readValue.value : 'UNREAD';

    // add the book to library;
    AddToLibrary(titleValue, authorValue, pagesValue, statusValue, coverValue);
    console.log(myLibrary);

    // clear the container
    container.innerHTML = '';
});