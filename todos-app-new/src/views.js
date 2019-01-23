import { getTodos, removeTodo, toggleTodo } from './todos'
import { getFilters } from './filters'

// Render application todos
const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    const filters = getFilters()
    const todos = getTodos()

    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const completedMatch = !filters.completed || !todo.completed

        return searchTextMatch && completedMatch
    })
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

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
        toggleTodo(todo.id)
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
        removeTodo(todo.id)
        renderTodos()
    })

    return todoEl
}

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