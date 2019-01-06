let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    const idVar = uuidv4()
    notes.push({
        id: idVar,
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
    console.log(e.target.value)
})

window.addEventListener('storage', function(e){

    // debugger
    // console.log('clicked')

    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// Unix Epoch - January 1st 1970 00:00:00 // -60000 (minute before)
// const now = new Date('January 21 2001 6:25:01')

const now = new Date()
const timestamp = now.getTime()
// console.log(timestamp)

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

// console.log(now.getTime())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of the month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

 const dayOne = new Date('January 21 2008 16:05:00')
 const timestampOne = dayOne.getTime()
 const dayTwo = new Date('January 21 2008 16:05:00')
 const timestampTwo = dayTwo.getTime()

 if(timestampOne < timestampTwo){
     console.log(dayOne.toString())
} else {
     console.log(dayTwo.toString())
 }