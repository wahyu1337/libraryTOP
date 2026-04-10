const myLibrary = [];
// class
class Book {
  // constructor
  constructor(title, author, pages, status) {
    this.BookId = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
  // getter
  get getInfo() {
    console.log(`
            Id: ${this.BookId}
            Title: ${this.title}
            Author: ${this.author}
            Pages: ${this.pages}
            Status: ${this.status}
            `);
  }
}

// add to library method
function AddToLibrary(title, author, pages, status) {
  const book = new Book(title, author, pages, status);

  //push the book to library
  myLibrary.push(book);
}

// Create DOM
// document manipulation
const container = document.querySelector("#container");
const display = document.querySelector(".display");

// Dapatkan elemen input sekali saja di awal
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");

// Fungsi untuk meriset validasi kustom saat pengguna mengetik
[titleInput, authorInput, pagesInput].forEach((input) => {
  input.addEventListener("input", () => {
    input.setCustomValidity("");
  });
});

// submit button
const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Validasi Judul
  if (titleInput.value.trim() === "") {
    titleInput.setCustomValidity("Title can't be empty!");
    titleInput.reportValidity();
    return;
  }

  // Validasi Author
  if (authorInput.value.trim() === "") {
    authorInput.setCustomValidity("Author can't be empty!");
    authorInput.reportValidity();
    return;
  }

  // Validasi Pages
  if (pagesInput.value === "" || pagesInput.value <= 0) {
    pagesInput.setCustomValidity("Total page must be more than 0");
    pagesInput.reportValidity();
    return;
  }

  // Validasi Radio Button (Read Status)
  const checkedStatus = document.querySelector(
    'input[name="readStatus"]:checked',
  );
  if (!checkedStatus) {
    alert("Pilih status membaca (Yes/No)!");
    return;
  }

  // Create DOM
  // create child elements for display
  const mainContent = document.createElement("div");
  const mainContentTitle = document.createElement("div");
  const mainContentAuthor = document.createElement("div");
  const mainContentPages = document.createElement("div");
  const mainContentReadStatus = document.createElement("div");
  const mainContentDelete = document.createElement("div");

  // add class to main content
  mainContent.classList.add("mainContent");
  mainContentTitle.classList.add("mainContentTitle");
  mainContentAuthor.classList.add("mainContentAuthor");
  mainContentPages.classList.add("mainContentPages");
  mainContentReadStatus.classList.add("mainContentReadStatus");
  mainContentDelete.classList.add("mainContentDelete");

  // create element into main content
  const pTitle = document.createElement("p");
  const pAuthor = document.createElement("p");
  const pPages = document.createElement("p");
  const pReadStatus = document.createElement("p");
  const btnRead = document.createElement("button");
  const btnDelete = document.createElement("button");

  // add some element class
  btnDelete.classList.add("delete");
  btnRead.classList.add("checked-mark");

  // append elements to main content
  mainContentTitle.appendChild(pTitle);
  mainContentAuthor.appendChild(pAuthor);
  mainContentPages.appendChild(pPages);
  mainContentReadStatus.appendChild(pReadStatus);
  mainContentReadStatus.appendChild(btnRead);
  mainContentDelete.appendChild(btnDelete);

  // get the data
  const titleValue = titleInput.value;
  const authorValue = authorInput.value;
  const pagesValue = pagesInput.value;
  let statusValue = checkedStatus.value;
  let readValue = statusValue === "1" ? "READ" : "UNREAD";

  // insert data into HTML element
  pTitle.textContent = `${titleValue}`;
  pAuthor.textContent = `${authorValue}`;
  pPages.textContent = `${pagesValue}`;
  pReadStatus.textContent = `${readValue}`;

  // read status button
  if (statusValue === "1") {
    btnRead.textContent = "✓";
    btnRead.style.backgroundColor = "rgba(7, 175, 7, 0.884)";
  } else {
    btnRead.textContent = "X";
    btnRead.style.backgroundColor = "red";
    btnRead.style.color = "white";
  }

  btnDelete.textContent = "X";

  // append main content to html container
  display.appendChild(mainContent);
  mainContent.appendChild(mainContentTitle);
  mainContent.appendChild(mainContentAuthor);
  mainContent.appendChild(mainContentPages);
  mainContent.appendChild(mainContentReadStatus);
  mainContent.appendChild(mainContentDelete);

  btnRead.addEventListener("click", () => {
    if (statusValue === "1") {
      btnRead.textContent = "X";
      btnRead.style.backgroundColor = "red";
      btnRead.style.color = "white";
      statusValue = "0";
      pReadStatus.textContent = "UNREAD";
    } else if (statusValue === "0") {
      btnRead.textContent = "✓";
      btnRead.style.backgroundColor = "rgba(7, 175, 7, 0.884)";
      statusValue = "1";
      pReadStatus.textContent = "READ";
    }
  });

  btnDelete.addEventListener("click", () => {
    display.removeChild(mainContent);
  });

  // add the book to library;
  AddToLibrary(titleValue, authorValue, pagesValue, statusValue);

  // Reset form setelah submit (Opsional)
  document.querySelector("form").reset();
});
