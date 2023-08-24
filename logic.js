export const todos = [
  {
    title: 'Complete Vanilla Todos project',
    description: 'Finish the odin project todo app project with vanilla JS',
    dueDate: undefined,
    priority: 1,
  },
];
export const createTodo = () => {
  const newTodo = {};
  todos.push(newTodo);
  return newTodo;
};
