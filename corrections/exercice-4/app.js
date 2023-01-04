const todoList = document.querySelector('#todo-list')
const previousButton = document.querySelector('#previous')
const nextButton = document.querySelector('#next')

let indexFirstTodoDisplayed = 0;
let indexLastTodoDisplayed = 4
let numberOfTodosToDisplay = 5;
let todos = []

function addTodoCard(todo) {
  const div = document.createElement('div')
  div.classList.add('todo-card')
  div.innerHTML = `
    <input type="checkbox" ${todo.completed ? 'checked' : ''}>
    <p>${todo.title}</p>
  `

  todoList.appendChild(div)
}

function displayTodos() {
  todoList.innerHTML = ''

  for(let i = indexFirstTodoDisplayed; i <= indexLastTodoDisplayed; i++) {
    addTodoCard(todos[i])
  }
}

function handlePreviousButtonDisabled() {
  if (indexFirstTodoDisplayed === 0) {
    previousButton.disabled = true
  } else {
    previousButton.disabled = false
  }
}

function handleNextButtonDisabled() {
  if (indexLastTodoDisplayed === todos.length - 1) {
    nextButton.disabled = true
  } else {
    nextButton.disabled = false
  }
}

// 1ère partie : ajout d'un seul todo
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(todo => addTodoCard(todo))

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => json.slice(0, 20))
  .then(filteredJson => todos = filteredJson)
  .then(() => {
    handlePreviousButtonDisabled()
    handleNextButtonDisabled()

    displayTodos()
  })

previousButton.addEventListener('click', () => {
  indexFirstTodoDisplayed = indexFirstTodoDisplayed - numberOfTodosToDisplay
  indexLastTodoDisplayed = indexLastTodoDisplayed - numberOfTodosToDisplay

  if (indexFirstTodoDisplayed < 0) {
    indexFirstTodoDisplayed = 0
    indexLastTodoDisplayed = numberOfTodosToDisplay - 1
  }

  handlePreviousButtonDisabled()
  handleNextButtonDisabled()

  displayTodos()
})

nextButton.addEventListener('click', () => {
  indexFirstTodoDisplayed = indexFirstTodoDisplayed + numberOfTodosToDisplay
  indexLastTodoDisplayed = indexLastTodoDisplayed + numberOfTodosToDisplay

  if (indexFirstTodoDisplayed > todos.length - 1) {
    indexLastTodoDisplayed = todos.length - 1
    indexFirstTodoDisplayed = todos.length - numberOfTodosToDisplay
  }

  handlePreviousButtonDisabled()
  handleNextButtonDisabled()

  displayTodos()
})