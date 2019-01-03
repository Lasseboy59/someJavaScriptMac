// Read existing notes from the storege

const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')

    if(todosJSON !== null){
        todos = JSON.parse(todosJSON)
    }else {
        return []
    }
}

// Save the todos to local storage
const saveTodos = function(notes) {
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
            todoEl.textContent = 'Unnamed note'
        }
        
        document.querySelector('#todos').appendChild(todoEl)
    
    })
}

//Get the DOM elements for an individual todo
const generateTodoDOM = function(todos) {
    document.querySelector('#name-form').addEventListener('submit', function(e){
        e.preventDefault()
        todos.push({
            text: e.target.elements.newTodo.value,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
    })
}

// Get the DOM elements for list array
const generateSummaryDOM = function(filteredTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${todos.length} todos left`
    return summary
}