const todos = require('./todos')

const editTodo = () => {
  const editMenu = `Which todo do you want to toggle?
  ${todos.map((todo, i) => {
    let symbol = '🆇'
    if (todo.isComplete) {
      symbol = '✅'
    }
  
    return `${ i + 1 }. ${ symbol } ${ todo.text }`
  }).join('\n') }
  
  `
  console.clear();
  const editResponse = readlineSync.question(editMenu)
  console.log(editResponse)
}

module.exports = editTodo;