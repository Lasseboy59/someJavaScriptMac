import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './recipes'

const titleElement = document.querySelector('#recipe-title')
const bodyElement = document.querySelector('#recipe-body')
const removeElement = document.querySelector('#remove-recipe')
const updateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

titleElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    updateElement.textContent = generateLastEdited(note.updatedAt)
})

bodyElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    updateElement.textContent = generateLastEdited(note.updatedAt)
})

removeElement.addEventListener('click', (e) => {
    removeNote(noteId)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        initializeEditPage(noteId)
    }
})
