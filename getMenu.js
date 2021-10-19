const chalk = require('chalk')
const todos = require('./todos')

function getMenu () {
  const menu = `${chalk.blue.bold('Choose a todo to toggle its completeness(by entering its number) or choose an option at the bottom(by letter):')}
${todos.map((todo, i) => {
  let symbol = '🆇'
  if (todo.isComplete) {
    symbol = '☑️'
  }
  return `${i + 1}. ${symbol} ${todo.text}`
}).join('\n')}
(e) Edit a todo.
(n) Add new todo.
(q) Quit
`

  return menu;
}
module.exports = getMenu;


    /*1. ✅ Walk the dog.
    2. ⛔️ Do the dishes.
    3. ✅ Call the bank.
    4. ⛔️ Sign up for class.*/