const makeTodo = require("./makeToDo");

const todos = [];

const fakeTodo1 = makeTodo('Walk the dog');
const fakeTodo2 = makeTodo('Wash the dishes')
const fakeTodo3 = makeTodo('Make a todo app')
fakeTodo1.isComplete = true;
todos.push(fakeTodo1, fakeTodo2, fakeTodo3)

module.exports = todos;