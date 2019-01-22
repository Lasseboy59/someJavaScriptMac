import uuidv4 from 'uuid/v4'

let todos = []

const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON !== null ? todos = JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// Save the todos to local storage
const saveTodos = () => {
    localStorage.setItem('todos',JSON.stringify(todos))
}

// Expose todos from module
const getTodos = () => todos

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (text) => {
    console.log(text)
    const id = uuidv4()
    todos .push({
        id: id,
        text: '',
        completed: false
    })
    saveTodos()
}

const removeTodo = (id) => {
    console.log(id)
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if(todoIndex > -1){
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if(todo){
        todo.completed =!todo.completed
    }
}

// Make sure to call loadTodos and setup the exports
todos = loadTodos()

export { removeTodo, getTodos, createTodo, toggleTodo }