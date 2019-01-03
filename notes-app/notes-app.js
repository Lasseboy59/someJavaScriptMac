let notes = []

const filters = {
    searchText: ''
}

 // check for existing saved data
 const notesJSON = localStorage.getItem('notes')

 if(notesJSON !== null){
    notes = JSON.parse(notesJSON)
 }

const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
 
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')

        if(note.title.length > 0){
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'unnamed note'
        }

        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
    e.target.textContent = 'Clicked'
})  

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})

// document.querySelector('#for-fun').addEventListener('change', function(e){
//     console.log(e.target.checked)
// })

// document.querySelector('#name-form').addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

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

