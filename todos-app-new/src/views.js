import { getTodos, removeTodo, saveTodos } from './todos'
import { getFilters, setFilters } from './filters'

// Render application todos
const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    const filters = getFilters()
    const todos = getTodos()
    const filteredTodos = todos.filter((todo) => {
        if(!filters.completed){
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        } else{
            return !todo.completed
        }
    })

    todoEl.innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(filteredTodos))

    if(filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.classList.add('empty-message')
        emptyMessage.textContent = 'No todos to show'
        todoEl.appendChild(emptyMessage)
    }
}

// generateTodoDOM   event listeners from todos.js iether remove or toggle
// Arguments: todo
// Return value: the todo element

// Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed 
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('click', (e) => {
        let todoId = e.target.id
        toggleTodo(todoId)
        saveTodos()
        renderTodos()
    })

    // Setup the todo title text
    textEl.textContent = todo.text
    containerEl.appendChild(textEl)

    // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup the remove button
    button.textContent = 'remove'
    button.classList.add('button', 'button--text')
    todoEl.appendChild(button)
    button.addEventListener('click', (e) => {
        let todoId = e.target.value
        console.log(todoId)
        removeTodo(todoId)
        renderTodos()
    })

    return todoEl
}


// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element

// Get the DOM elements for list array
const generateSummaryDOM = (filteredTodos) => {
    const summary = document.createElement('h2')
    let message = ''
    filteredTodos.length > 1  ? message = `${filteredTodos.length} todos` : message += `${filteredTodos.length} todo`
    summary.classList.add('list-title')
    summary.textContent = `You have ${message} left`
    return summary
}

export { renderTodos, generateSummaryDOM, generateTodoDOM }