import uuidv4 from 'uuid/v4'

let todos = []

// Read existing todos from the storege
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

const createTodo = (text) => {
    const id = uuidv4()
    todos .push({
        id: id,
        text: text,
        completed: false
    })
    saveTodos()
}

const removeTodo = (id) => {
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

todos = loadTodos()

export { removeTodo, getTodos, createTodo, toggleTodo }