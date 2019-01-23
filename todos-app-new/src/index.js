import { getFilters, setFilters } from './filters'
import { getTodos, createTodo, removeTodo, toggleTodo } from './todos'
import { renderTodos, generateSummaryDOM, generateTodoDOM } from './views'

/***** Some test code *********/
// console.log(getFilters())
// setFilters({
//     searchText: 'katu',
//     completed: false 
// })
// console.log(getFilters())
/***** Some test code *********/

renderTodos()

// Set up search text handler
document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change',(e) => {
    setFilters({
        completed: e.target.checked
    })
    renderTodos()
})


// Set up form submission handler
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    
    if(text.length > 0){
        createTodo(text)
        renderTodos()
        e.target.elements.text.value = ''
    }
})

// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) => { 
    if(e.key === 'todos'){
        renderTodos()
    }
})
