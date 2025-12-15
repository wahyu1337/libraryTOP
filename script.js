const myLibrary = [];

// Constructor
function Book(title, author, pages, status){
    this.bookId = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
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
function AddToLibrary(title, author, pages, status){ 
    const book = new Book (title, author, pages, status);
    
    //push the book to library
    myLibrary.push(book);
};


// Create DOM
// document manipulation
const container = document.querySelector('#container');
const display = document.querySelector('.display');

// submit button
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Create DOM
    // create child elements for display
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

    // create element into main content 
    const pTitle = document.createElement('p');
    const pAuthor = document.createElement('p');
    const pPages = document.createElement('p');
    const pReadStatus = document.createElement('p');
    const btnRead = document.createElement('button');
    const btnDelete = document.createElement('button');

    // add some element class
    btnDelete.classList.add('delete');
    btnRead.classList.add('checked-mark');

    // append elements to main content
    mainContentTitle.appendChild(pTitle);
    mainContentAuthor.appendChild(pAuthor);
    mainContentPages.appendChild(pPages);
    mainContentReadStatus.appendChild(pReadStatus);
    mainContentReadStatus.appendChild(btnRead);
    mainContentDelete.appendChild(btnDelete);

    // get the data
    const titleValue = document.querySelector('#title').value;
    const authorValue = document.querySelector('#author').value;
    const pagesValue = document.querySelector ('#pages').value;
    let statusValue = document.querySelector('input[name="readStatus"]:checked').value;
    let readValue = (statusValue === '1') ? 'READ' : 'UNREAD';
     

    // insert data into HTML element
    pTitle.textContent = `${titleValue}`;
    pAuthor.textContent = `${authorValue}`;
    pPages.textContent = `${pagesValue}`;
    pReadStatus.textContent = `${readValue}`;
    // read status button
    if (statusValue === '1'){
        btnRead.textContent = '✓';       
    } else {
        btnRead.textContent = 'X';
        btnRead.style.backgroundColor = 'red';
        btnRead.style.color = 'white';
    }

    btnDelete.textContent = 'X';

    // append main content to html container
    display.appendChild(mainContent);
    mainContent.appendChild(mainContentTitle);
    mainContent.appendChild(mainContentAuthor);
    mainContent.appendChild(mainContentPages);
    mainContent.appendChild(mainContentReadStatus);
    mainContent.appendChild(mainContentDelete);

    btnRead.addEventListener("click", () => {
        if(statusValue === '1'){
            btnRead.textContent = 'X';
            btnRead.style.backgroundColor = 'red';
            btnRead.style.color = 'white';
            statusValue = '0';
            pReadStatus.textContent = 'UNREAD';
        } else if (statusValue === '0'){
            btnRead.textContent = '✓';
            btnRead.style.backgroundColor = 'rgba(7, 175, 7, 0.884)';
            statusValue = '1';
            pReadStatus.textContent = 'READ';
        }
    });

           
    btnDelete.addEventListener('click', () =>{
        display.removeChild(mainContent);
    });

    // add the book to library;
    AddToLibrary(titleValue, authorValue, pagesValue, statusValue);
});