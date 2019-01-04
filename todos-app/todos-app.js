let todos = []

const filters = {
    searchText: '',
    completed: false
}

getSavedTodos(todos)

renderTodos(todos, filters)

document.querySelector('#hide-completed').addEventListener('change',function(e){
    filters.completed = e.target.checked
    renderTodos(todos,filters)
})

document.querySelector('#new-todo').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos,filters)
})
