const todos = [];
let ID = 0;

const getTodos = async (ctx) => {
  ctx.status = 200;
  ctx.body = todos;
};

const newTodo = async (ctx) => {
  const todo = ctx.request.body;
  ID += 1;
  todo.id = ID;
  todos.push(todo);
  ctx.status = 201;
  ctx.body = todo;
};

const editTodo = async (ctx) => {
  const todo = ctx.request.body;
  const todoInList = todos.find(t => t.id === +ctx.params.id);
  Object.assign(todoInList, todo);
  ctx.status = 200;
  ctx.body = ctx;
};

const delTodo = async (ctx) => {
  const todo = ctx.request.body;
  const todoInListIdx = todos.findIndex(t => t.id === todo.id);
  todos.splice(todoInListIdx, 1);
  ctx.status = 200;
  ctx.body = todoInListIdx;
};

module.exports = {
  getTodos,
  newTodo,
  editTodo,
  delTodo,
  todos,
};
