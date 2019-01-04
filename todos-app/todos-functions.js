// Read existing todos from the storege

const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')

    if(todosJSON !== null){
        todos = JSON.parse(todosJSON)
    }else {
        return []
    }
}

// Save the todos to local storage
const saveTodos = function(todos) {
    localStorage.setItem('todos',JSON.stringify(todos))
}

// Render application todos
const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        if(!filters.completed){
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        } else{
            return !todo.completed
        }
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(filteredTodos))

    filteredTodos.forEach(function(todo){
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
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')

    // Setp the button
    todoEl.appendChild(checkbox)

    // Setup the todo title text
    textEl.textContent = todo.text
    todoEl.appendChild(textEl)

    // Setup the remove button
    button.textContent = 'x'
    todoEl.appendChild(button)

    return todoEl
}

// Get the DOM elements for list array
const generateSummaryDOM = function(filteredTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${todos.length} todos left`
    return summary
}