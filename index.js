function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
  // .then(json => createBookData(json))
  // debugger
}

function renderBooks(books) {
  debugger;
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

// function createBookData(books) {
//   displayFifth(books)
//   return books
//   debugger
// }

// function displayFifth(books) {
//   console.log(books[4].name)
// }

// function characterData() {
//   return fetch(createBookData)
// }
