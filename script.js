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
};

function bookDisplay(book){
    for(let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
    }   
}

// page display
// document manipulation
const container = document.querySelector('#container');
const display = document.querySelector('.display');

// submit button
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Create DOM
    // child elements
    const mainContent = document.createElement('div');
    const mainContentTitle = document.createElement('div');
    const mainContentAuthor = document.createElement('div');
    const mainContentPages = document.createElement('div');
    const mainContentReadStatus = document.createElement('div');
    const mainContentDelete = document.createElement('div');

    // add class to main content
    mainContent.classList.add('mainContent');
    mainContentTitle.classList.add('mainContentTitle');
    mainContentAuthor.classList.add('mainContentAuthor');
    mainContentPages.classList.add('mainContentPages');
    mainContentReadStatus.classList.add('mainContentReadStatus');
    mainContentDelete.classList.add('mainContentDelete');

    // create element into content 
    const pTitle = document.createElement('p');
    const pAuthor = document.createElement('p');
    const pPages = document.createElement('p');
    const pReadStatus = document.createElement('p');
    const btnDelete = document.createElement('button');

    // add some element class
    btnDelete.classList.add('delete')

    // append elements to main content
    mainContentTitle.appendChild(pTitle);
    mainContentAuthor.appendChild(pAuthor);
    mainContentPages.appendChild(pPages);
    mainContentReadStatus.appendChild(pReadStatus);
    mainContentDelete.appendChild(btnDelete);

    // get the data
    const titleValue = document.querySelector('#title').value;
    const authorValue = document.querySelector('#author').value;
    const pagesValue = document.querySelector ('#pages').value;
    let statusValue = document.querySelector('input[name="readStatus"]:checked').value;
    let readValue = (statusValue === '1') ? 'READ' : 'UNREAD';
     

    // insert data into element
    pTitle.textContent = `${titleValue}`;
    pAuthor.textContent = `${authorValue}`;
    pPages.textContent = `${pagesValue}`;
    pReadStatus.textContent = `${readValue}`;
    btnDelete.textContent = 'X';

    // append main content to container
    display.appendChild(mainContent);
    mainContent.appendChild(mainContentTitle);
    mainContent.appendChild(mainContentAuthor);
    mainContent.appendChild(mainContentPages);
    mainContent.appendChild(mainContentReadStatus);
    mainContent.appendChild(mainContentDelete);    

    // add the book to library;
    AddToLibrary(titleValue, authorValue, pagesValue, statusValue);
    bookDisplay();

});

// delete btn
const deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener("click", (e) => {
    alert('test');
});