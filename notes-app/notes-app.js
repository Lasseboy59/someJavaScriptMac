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

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    console.log('add a note')
})

document.querySelector('#remove-note').addEventListener('click', function(e){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// DOM- Document object model

// Query and remove
// const p = document.querySelector('p')
// p.remove()

//Query and remove all

// const ps = document.querySelectorAll('p')

// ps.forEach(function(p){
//     // console.log(p.textContent)
//     // p.remove()
//     p.textContent = '*****'
// })

// // Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This a new element from javaScript'
// document.querySelector('body').appendChild(newParagraph)

