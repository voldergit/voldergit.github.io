const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
];


for (const book of books) {
    // Объект книги
    const keys = Object.keys(book);
    const values = Object.values(book);
console.log(keys); // ["title", "author", "rating"]
    console.log(values);
    
  console.log(book);
  // Название
//   console.log(book.title);
  // Автор
//   console.log(book.author);
  // Рейтинг
//   console.log(book.rating);
}