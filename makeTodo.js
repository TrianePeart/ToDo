const makeTodo = (text) => {
    return {
      text: text,
      isComplete: false,
      id: Date.now(),
    }
  }
  
  module.exports = makeTodo;