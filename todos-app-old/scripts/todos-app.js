'use strict'

let todos = []

const filters = {
    searchText: '',
    completed: false
}

getSavedTodos(todos)

renderTodos(todos, filters)

document.querySelector('#hide-completed').addEventListener('change',(e) => {
    filters.completed = e.target.checked
    renderTodos(todos,filters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    if(text.length > 0){
        todos.push({
            id: uuidv4(),
            text,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
        e.target.elements.text.value = ''
    }
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos,filters)
})
