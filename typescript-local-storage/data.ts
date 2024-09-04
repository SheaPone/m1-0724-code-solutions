/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodos();

function writeTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): any {
  const storage = localStorage.getItem('todos-storage');
  if (storage !== null) {
    const todo = JSON.parse(storage);
    return todo;
  } else {
    return [];
  }
}

console.log(typeof writeTodos);
