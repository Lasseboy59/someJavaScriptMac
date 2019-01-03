let todos = []

const filters = {
    searchText: '',
    completed: false
}

const todosJSON = localStorage.getItem('todos')

if(todosJSON !== null){
    todos = JSON.parse(todosJSON)
}

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        if(!filters.completed){
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        } else{
            return !todo.completed
        }
    })

    document.querySelector('#todos').innerHTML = ''

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

document.querySelector('#hide-completed').addEventListener('change',function(e){
    filters.completed = e.target.checked
    renderTodos(todos,filters)
})

renderTodos(todos,filters)

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos,filters)
})

document.querySelector('#name-form').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        text: e.target.elements.newTodo.value,
        completed: false
    })
    localStorage.setItem('todos',JSON.stringify(todos))
    renderTodos(todos, filters)
})
