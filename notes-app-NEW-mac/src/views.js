import moment from 'moment'
import { getFilters } from './filters';
import { sortNotes, getNotes } from './notes'

// Generate the DOM structure for a note
const generateNoteDom = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')
    const button = document.createElement('button')
    // const removeButton = document.createElement('button')

    // // Setup the remove button on home page - extra, not tidy
    // removeButton.textContent = 'remove'
    // noteEl.classList.add('button--secondary--hover')
    // noteEl.appendChild(removeButton)
    // removeButton.addEventListener('click', () =>{
    //     removeNote(note.id)
    //     saveNotes(notes)
    //     renderNotes(notes, filters)
    // })

    // Setup the note title text
    if(note.title.length > 0){
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'unnamed note'
    }

    noteEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    // Setup the link
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')


    // Setup the statusmessage
    statusEl.textContent = generateLastEdited(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl
}

// Render application notes
const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
 
    notesEl.innerHTML = ''

    if(filteredNotes.length > 0){
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDom(note)
            notesEl.appendChild(noteEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
}

const initializeEditPage = (noteId) => {
    const titleElement = document.querySelector('#note-title')
    const bodyElement = document.querySelector('#note-body')
    const updateElement = document.querySelector('#last-edited')
    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)
    
    if(!note){
        location.assign('/index.html')
    }
    
    titleElement.value = note.title
    bodyElement.value = note.body
    updateElement.textContent = generateLastEdited(note.updatedAt)
}

 // Generate last edited message
 const generateLastEdited = (timestamp) => {
     return `Last edited ${moment(timestamp).fromNow()}`
 }

export { generateNoteDom, generateLastEdited, renderNotes, initializeEditPage }