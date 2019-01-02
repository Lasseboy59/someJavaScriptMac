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

// const incomplete = todos.filter(function(todo){
//     return !todo.completed
// })

// const findNotes = function(notes, query){
//     return notes.filter(function(note,index){
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    
//         return isTitleMatch || isBodyMatch
//     })

// }
// console.log(findNotes(notes,'like'))

// const renderTodos = function(todos, filters){
//     const filteredTodos = todos.filter(function(todo){
//         return todo.title
//     })

//     console.log('*')
//     console.log(renderTodos())

//     incomplete.forEach(function(e){
//         const p = document.createElement('p')
//         p.textContent = `${e.text}, ${e.completed}`
//         document.querySelector('#todos').appendChild(p)
//     })
// }

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''

    filteredTodos.forEach(function(todo){
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#todos').appendChild(todoEl)
    })
}

renderTodos(todos, filters)

document.querySelector('#add-todo').addEventListener('click', function(e){
    console.log('add a todo')
})



document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos,filters)
})

// const leftTodos = incomplete.length
// console.log(leftTodos )

// const ps = document.querySelectorAll('p')

// ps.forEach(function(p){
//     if(p.textContent.includes('the ')){
//         p.remove()
//     }
  
// })

// You have 2 todos left (p element)
// And a p for each todo above (use text value)

// const getThingsTodo2 = function(todos){
//     return todos.filter(function(todo){
//         return !todo.completed     
//         }
//     )
// }
// const lengthOfIncomplete = getThingsTodo2(todos).length
// console.log(lengthOfIncomplete)
// console.log(getThingsTodo2(todos))

// const lengthOfIncomplete2 = incomplete.length

// const p = document.createElement('h2')
// p.textContent = `You have ${getThingsTodo2(todos).length} todos left.`
// document.querySelector('body').appendChild(p)


  