// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary
import uuidv4 from 'uuid/v4'
import { getFilters, setFilters } from './filters'
import { getTodos, createTodo, removeTodo, toggleTodo } from './todos'
import { renderTodos } from './views'

// Render initial todos
console.log(getTodos())

// console.log(getFilters())
// setFilters({
//     searchText: 'katu',
//     completed: false 
// })
// console.log(getFilters())

// console.log(getTodos())
// createTodo('test4')
// removeTodo('6b60ea5c-43ff-473c-aa16-88e231970566')
// console.log(getTodos())

// toggleTodo('8aa3bef5-1730-4176-8691-11b3d7933461')
// console.log(getTodos())
// toggleTodo('47940521-1b50-4183-b9d5-74ea0853da86')
// console.log(getTodos())

getTodos() 

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
    console.log('hide')
    // const filters = getFilters()
    // filters.completed = e.target.checked
    setFilters({
        completed: e.target.checked
    })
    renderTodos()
})


// Set up form submission handler
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const todos = getTodos()
    const text = e.target.elements.text.value.trim()
    // console.log(text)
    if(text.length > 0){
        todos.push({
            id: uuidv4(),
            text,
            completed: false
        })
        // createTodo(text)
        renderTodos()
    }
    renderTodos()
    e.target.elements.text.value = ''
})

// Bonus: Add a watcher for local storage


// Bring todos-applicationCache














