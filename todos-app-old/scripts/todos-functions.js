'use strict'

// Read existing todos from the storege
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON !== null ? todos = JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// Save the todos to local storage
const saveTodos = (todos) => {
    localStorage.setItem('todos',JSON.stringify(todos))
}

// Toggle a todo's property
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if(todo){
        todo.completed =!todo.completed
    }
}

// Remove a todo from local storage
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if(todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}

// Render application todos
const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#todos')
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
    checkbox.addEventListener('click', () => {
        toggleTodo(todo.id)
        saveTodos(todos, filters)
        renderTodos(todos, filters)
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
    button.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos, filters)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get todos left
const getThingsTodo = (todos) => {
    return todos.filter((todo) => {
        return todo.completed === false
    })
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