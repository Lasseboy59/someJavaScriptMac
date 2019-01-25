import { createNote } from './recipes'
import { setFilters } from './filters'
import { renderNotes } from './views'


renderNotes()

document.querySelector('#create-recipe').addEventListener('click', (e) => {
    const note = createNote()
    location.assign(`/edit.html#${note.id}`)
})  

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

window.addEventListener('storage', (e) => { 
    if(e.key === 'notes'){
        renderNotes()
    }
})

