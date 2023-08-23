const todos = [
  {
    title: 'Complete Vanilla Todos project',
    description: 'Finish the odin project todo app project with vanilla JS',
    dueDate: undefined,
    priority: 1,
  },
];

const el_todoList = document.querySelector('.todo-list');
const tp_todo = document.querySelector('#template-todo');

todos.forEach((todo) => renderTodo(todo));

function renderTodo(todo) {
  const el_todo = tp_todo.content.cloneNode(true);
  el_todo.querySelector('.title').innerText = todo.title;
  el_todo.querySelector('.description').innerText = todo.description;
  el_todo.querySelector('.dueDate').innerText = todo.dueDate;
  el_todo.querySelector('.priority').innerText = todo.priority;
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
