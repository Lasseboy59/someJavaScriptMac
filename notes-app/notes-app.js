const timestamp = moment().valueOf()
let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited',
    sortby: 'byCreated',
    sortBy: 'alphabetically'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    const idVar = uuidv4()
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

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', function(e){

    // debugger
    // console.log('clicked')

    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

