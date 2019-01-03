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

renderTodos(todos,filters)

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos,filters)
})

generateTodoDOM(todos)
