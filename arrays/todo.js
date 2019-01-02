// const todos = ['Walk the dog', 'Make breakfast', 'Go to work', 'Have lunch', 'Go home']

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

// console.log(todos)


console.log(todos)
console.log('---------- sort ----------')

const sortTodos = function(todos){
    todos.sort(function(a, b){
        if(a.completed === false && b.completed === true){
            return -1
        } else if(a.completed === true && b.completed === false){
            return 1
        } else {
            return 0
        }
    })
}
sortTodos(todos)
console.log(todos)
console.log('---------- sort ----------')

console.log('------/////------')

const findTodo2 = function(todos, todoText){
    const index = todos.findIndex(function(todo, index){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    return todos[index]

}
const todo = findTodo2(todos, 'Have some lunch')
console.log(todo)
console.log('----- 2 -----')


const findTodo = function(todos,index){
    return todos.find(function(todo){
        return todo.text.includes('Go home')
    })
}
const note_0 = findTodo(todos)
console.log(note_0)
console.log('----- 0 -----')


const findTodo3 = function(todos,searchText){
    return todos.find(function(todo){
        return todo.text === searchText
    })
}
const note_3 = findTodo3(todos, 'Have some lunch')
console.log(note_3)
console.log('----- 3 -----')


// const array1 = ['tes1', 'test2', 'hobby'];

// const found = array1.find(function(element, index, array1) {
//     // console.log(array1)
//   if(element === 'hobby'){
//       return array1
//   }
// });
// console.log('-------*---------')
// let foundItem = found(array1, 'test2')
// console.log('-------*---------')
// console.group(foundItem)

const array1 = ['test1', 'test2', 'hobby'];

// const found = function(array1, text) {
//     return array1.find(function(array1){
//         // console.log(array)
//         return array1 === text
//     })

// };
// console.log('-------*---------')
// let foundItem = found(array1, 'test2')
// console.log('-------*---------')
// console.group(foundItem)


console.log('-------- 4 ---------')
const findTodo4 = function(array1,searchText){
    return array1.find(function(array1, index){
        if(array1 === searchText){
            return true
        }
    })
}
const note_4 = findTodo4(array1, 'hobby')
console.log(note_4)
console.log('----- 4 -----')

console.log('----- 5 -----')

const arrayText= ['test1', 'test1', 'hobby', 'test2', 'test1'];

const filteredNotes = arrayText.filter(function(note,index,query){
    if(note === 'test1'){
        return true
    }
})

console.log(filteredNotes)

console.log('----- 5 -----')

console.log('----- 6 -----')

const arrayTodos= ['test1', 'test1', 'hobby', 'test2', 'test1'];

const findNotes = function(arrayTodos, query){
    return arrayTodos.filter(function(note,index){
        // const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        if(note === query){
            return true
        }
    })

}

console.log(findNotes(arrayTodos,'test1'))

console.log('----- 6 -----')

// Challenge

console.log('----- 7 -----')

const getThingsTodo = function(todos){
    return todos.filter(function(todo){
        return todo.completed === false
    })
}
console.log(getThingsTodo(todos))

console.log('---------')

const getThingsTodo2 = function(todos){
    return todos.filter(function(todo, index){
        if(todo.completed === false){
            return todo
        }
    })
}
console.log(getThingsTodo2(todos))


const incomplete = todos.filter(function(todo){
    return !todo.completed
})
const lengthOfIncomplete = incomplete.length
console.log('Length: ' + lengthOfIncomplete)

console.log('----- 7 -----')

// console.log(getThingsTodo(todos))

// Challenge

// deleteTodo(todos, 'go to work')

// console.log(todos.indexOf('Go to work'))

// todos.forEach(function(item, index){
//     console.log((index+1) + ': ' + item)
// })


// todos.forEach(element => {
//     console.log(element)
// });

// console.log('------------')

// for(let i = 0; i < todos.length; i++) {
//     console.log( i + ': Todo: ' + todos[i])
// }