const todos = [{
    text: 'My next trip',
    completed: false
},{
    text: 'Habbits die hard',
    completed: true
},{
    text: 'Have some lunch',
    completed: false
},{
    text: 'Go home',
    completed: true,
}]

const filters = {
    searchText: '',
    completed: false
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

    filteredTodos.forEach(function(e){
        const todoEl = document.createElement('p')
        todoEl.textContent = e.text
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
    const newTodo = e.target.elements.newTodo.value
    todos.push({
        text: newTodo,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})
