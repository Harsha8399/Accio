<<<<<<< HEAD
let books = []

function addBook(title,isbn,author){

  books.push({title,isbn,author})
  updateTable({title,isbn,author})
  savetoLocal()
}

function deleteBook(ele) {
  if(ele.classList.contains('delete')) {
    ele.parentElement.parentElement.remove();
  }
}

document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  e.preventDefault();

  deleteBook(e.target);

  // Remove book from store
  const isbn = e.target.parentElement.previousElementSibling.textContent;

  books = books.filter(book=>book.isbn!==isbn)
  savetoLocal()
});


function updateTable(book){
  const list = document.querySelector('#book-list');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
  `;

  list.appendChild(row);

}

function savetoLocal(){

  localStorage.setItem('books1', JSON.stringify(books));
}

function getFromLocal(){
  if(localStorage.getItem('books1') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books1'));

    books.forEach(book=> updateTable(book))
  }
}


document.querySelector('#submit').addEventListener("click",(e)=>{

    e.preventDefault();
  
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    addBook(title,isbn,author)

})

=======
let books = []

function addBook(title,isbn,author){

  books.push({title,isbn,author})
  updateTable({title,isbn,author})
  savetoLocal()
}

function deleteBook(ele) {
  if(ele.classList.contains('delete')) {
    ele.parentElement.parentElement.remove();
  }
}

document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  e.preventDefault();

  deleteBook(e.target);

  // Remove book from store
  const isbn = e.target.parentElement.previousElementSibling.textContent;

  books = books.filter(book=>book.isbn!==isbn)
  savetoLocal()
});


function updateTable(book){
  const list = document.querySelector('#book-list');
  
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
  `;

  list.appendChild(row);

}

function savetoLocal(){

  localStorage.setItem('books1', JSON.stringify(books));
}

function getFromLocal(){
  if(localStorage.getItem('books1') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books1'));

    books.forEach(book=> updateTable(book))
  }
}


document.querySelector('#submit').addEventListener("click",(e)=>{

    e.preventDefault();
  
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    addBook(title,isbn,author)

})

>>>>>>> 2d46c5e385b1dcda0cd65a352fbd8c3ef039e543
getFromLocal()