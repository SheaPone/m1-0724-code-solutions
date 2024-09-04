'use strict';
let todos = readTodos();
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  const storage = localStorage.getItem('todos-storage');
  if (storage !== null) {
    let todo = JSON.parse(storage);
    return todo;
  } else {
    return [];
  }
}
console.log(typeof writeTodos);
