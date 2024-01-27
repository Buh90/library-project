const openModalBtn = document.querySelector(".circle");
const modal = document.querySelector("dialog");
const modalSubmitButton = document.querySelector("dialog button");
const bookList = [];
function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
}

openModalBtn.addEventListener("click", () => {
  modal.showModal();
});

modalSubmitButton.addEventListener("click", function (e) {
  if (checkFormValidity()) {
    createBook();
    renderBooks();
  } else {
    e.preventDefault();
    alert("Compilazione errata!");
  }
});

function checkFormValidity() {
  return false;
}

function createBook() {
  const bookAuthor = document.querySelector("#author").value;
  const bookTitle = document.querySelector("#title").value;
  const bookPages = document.querySelector("#pages").value;
  const bookStatus = document.querySelector("#status").checked;
  const book = new Book(bookAuthor, bookTitle, bookPages, bookStatus);
  bookList.push(book);
}

function renderBooks() {
  document.querySelector("main").innerHTML = "";
  for (let book of bookList) {
    const bookIndex = bookList.indexOf(book);
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML += ` <p class="book-author">${book.author}</p>
        <p class="book-title">${book.title}</p>
        <p class="book-pages">Pages: <span class="pages">${
          book.pages
        }</span></p>
        <div class="rating">
          <label class="rating-label"
            ><input type="radio" name="rating-${bookIndex}" value="5" />☆</label
          >
          <label class="rating-label"
            ><input type="radio" name="rating-${bookIndex}" value="4" />☆</label
          >
          <label class="rating-label"
            ><input type="radio" name="rating-${bookIndex}" value="3" />☆</label
          >
          <label class="rating-label"
            ><input type="radio" name="rating-${bookIndex}" value="2" />☆</label
          >
          <label class="rating-label"
            ><input type="radio" name="rating-${bookIndex}" value="1" />☆</label
          >
        </div>
        <img class="book-icon" src="./image/book.svg" alt="" /><input
          class="book-status status-${bookIndex}"
          type="checkbox" ${book.status ? "checked" : ""}
        />`;
    document.querySelector("main").appendChild(card);
  }
}

// modal.showModal();
