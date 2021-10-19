const readlineSync = require('readline-sync')
const chalk = require('chalk')
const getMenu = require('./getMenu')
const editTodo = require('./editTodo')

console.clear()
let response = readlineSync.question(getMenu()).toLowerCase()

while (response !== 'q') {
  if (response === 'e') {
    editTodo();
  } else {
    console.log(chalk.red.bold(`${response} is not a valid input.`))
  }
  response = readlineSync.question(getMenu())
  console.clear()
}