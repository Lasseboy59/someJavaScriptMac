// const notes = ['Walk the dog', 'Make breakfast', 'Go to work', 'Have lunch', 'Go home']

const notes = [{
    title: 'My  next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habbits die hard',
    body: 'Do more exercise'
},{
    title: 'Office modification',
    body: 'Get a new seat in office'
}]

const findNote1 = function(notes,noteTitle){
    const index = notes.findIndex(function(note1, index ){
        return note1.title.toLowerCase() === noteTitle.toLowerCase()
    })
    console.log(index)
    return notes[index]
}

const note1 = findNote1(notes, 'office modification')
console.log(note1)

console.log('---------')
// const findNote = function(notes,noteTitle){
//     const note = notes.find(function(note, index ){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return note
// }

// shorter one below

// const findNote = function(notes,noteTitle){
//     return notes.find(function(note, index ){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }

// const note = findNote(notes, 'office modification')
// console.log(note)

// Array sort
console.log(notes)
console.log('---------- sort ----------')

const sortNotes = function(notes){
    notes.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        } else if(a.title.toLowerCase() >  b.title.toLowerCase()){
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)
console.log('---------- sort ----------')

// Filtering

const findNote = function(notes,noteTitle){
    return notes.find(function(note, index ){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const note = findNote(notes, 'office modification')
console.log(note)


const findNotes = function(notes, query){
    return notes.filter(function(note,index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    
        return isTitleMatch || isBodyMatch
    })

}
console.log(findNotes(notes,'like'))

// Base code for the above function

// const filteredNotes = notes.filter(function(note,index){
//     const isTitleMatch = note.title.toLowerCase().includes('office')
//     const isBodyMatch = note.body.toLowerCase().includes('office')

//     return isTitleMatch || isBodyMatch
// })

// console.log(filteredNotes)


// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function(note, index){
//     return note.title === 'Habbits die hard'
// })

// console.log(index)





// console.log('removed: ' + notes.pop())
// notes.push('My new note')

console.log(`You have ${notes.length} todos`)

// console.log('shift: ' + notes.shift())

// console.log('unsift: ' + notes.unshift('My new first item'))

// notes.splice(1, 1, 'New second item')

// notes[2] = 'New note three(3)'

// for(let i = 0; i < notes.length; i++) {
//     console.log('Todo: ' + notes[i])
// }

// console.log('---------')

// notes.forEach(element => {
//     console.log(element)
// });

