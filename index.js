function fetchBooks() {
  //write fetch request to the Game of Thrones API
  fetch('https://anapioficeandfire.com/api/books')
    .then(function(response) {
      return response.json();
    })
    .then(renderBooks)
}

// function fetchHouses() {
//   fetch('https://anapioficeandfire.com/api/houses')
//     .then(function(response) {
//       return response.json();
//     })
//     .then(renderHouses)
// }

function renderBooks(json) {
  debugger;
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

// function renderHouses(json) {
//   $("#div-houses p").append(json.name);
// }

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
