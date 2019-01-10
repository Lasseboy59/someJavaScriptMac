// Read existing todos from the storege
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    // if(todosJSON !== null){
    //     return JSON.parse(todosJSON)
    // }else {
    //     return []
    // }
    return todosJSON !== null ? todos = JSON.parse(todosJSON) : []
}

// Save the todos to local storage
const saveTodos = (todos) => {
    localStorage.setItem('todos',JSON.stringify(todos))
}

// Toggle a todo's property
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if(todo !== undefined){
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
    const filteredTodos = todos.filter((todo) => {
        if(!filters.completed){
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        } else{
            return !todo.completed
        }
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(filteredTodos))

    filteredTodos.forEach((todo) => {
        const todoEl = document.createElement('p')

        if(todo.text.length > 0){
            todoEl.textContent = todo.text
        } else {
            todoEl.textContent = 'Unnamed todo'
        }
        
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    
    })
}

// Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed 
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('click', () => {
        toggleTodo(todo.id)
        saveTodos(todos, filters)
        renderTodos(todos, filters)
    })

    // Setup the todo title text
    textEl.textContent = todo.text
    todoEl.appendChild(textEl)

    // Setup the remove button
    button.textContent = 'x'
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
    const todosLeft = getThingsTodo(todos)
    const summary = document.createElement('h2')
    summary.textContent = `You have ${todosLeft.length} todos left`
    return summary
}