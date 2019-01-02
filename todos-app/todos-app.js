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
    completed: true
}]

const filters = {
    searchText: ''
}

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''

    filteredTodos.forEach(function(e){
        const todoEl = document.createElement('p')
        todoEl.textContent = e.text
        document.querySelector('#todos').appendChild(todoEl)
    })
}

renderTodos(todos,filters)

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos,filters)
})

