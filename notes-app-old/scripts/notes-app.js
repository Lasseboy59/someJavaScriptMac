'use strict'

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited',
    sortby: 'byCreated',
    sortBy: 'alphabetically'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
    const idVar = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id: idVar,
        createdAt: timestamp,
        updatedAt: timestamp,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${idVar}`)
})  

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {

    // debugger
    // console.log('clicked')

    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

