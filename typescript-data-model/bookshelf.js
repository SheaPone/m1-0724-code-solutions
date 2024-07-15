'use strict';
const bookshelf = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];
const secondBookAuthor = bookshelf[1].author;
const firstBookIsbn = bookshelf[0].isbn;
const thirdBookTitle = bookshelf[2].title;
console.log('value of secondBookAuthor:', secondBookAuthor);
console.log('value of firstBookIsbn:', firstBookIsbn);
console.log('value of thirdBookTitle:', thirdBookTitle);
