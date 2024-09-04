const books = [
  { isbn: 34567, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  {
    isbn: 12345,
    title: 'Catcher in the Rye',
    author: 'J. D. Salinger',
  },
  {
    isbn: 78901,
    title: '1984',
    author: 'George Orwell',
  },
];
console.log('books:', books);
console.log('typeof books:', typeof books);

const booksJSON = JSON.stringify(books);
console.log('booksJSON:', booksJSON);
console.log('typeof booksJSON:', typeof booksJSON);

const studentJSON = '{ "id": 310341, "name": "Shea" }';
console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);

const student = JSON.parse(studentJSON);
console.log('student:', student);
console.log('typeof student:', typeof student);
