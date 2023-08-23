import { todos } from './logic.js';

const el_todoList = document.querySelector('.todo-list');
const el_createTodo = document.querySelector('.create-todo');
const tp_todo = document.querySelector('#template-todo');

todos.forEach((todo) => renderTodo(todo));
el_createTodo.addEventListener('click', createTodo);

function createTodo() {
  todos.push({});
  renderTodo({});
}
function renderTodo(todo) {
  const el_todo = tp_todo.content.cloneNode(true);
  el_todo.querySelector('.title').innerText = todo.title ?? 'title';
  el_todo.querySelector('.description').innerText =
    todo.description ?? 'description';
  el_todo.querySelector('.dueDate').innerText = todo.dueDate ?? 'no due date';
  el_todo.querySelector('.priority').innerText = todo.priority ?? 'no priority';
  el_todoList.appendChild(el_todo);
}
/*
    <template id="todo">
      <div class="todo">
        <div class="title"></div>
        <div class="description"></div>
        <div class="dueDate"></div>
        <div class="priority"></div>
      </div>
    </template>
*/
