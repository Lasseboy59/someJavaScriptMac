import { createRecipe } from './recipes'
import { setFilters } from './filters'
import { renderRecipes } from './views'


renderRecipes()

document.querySelector('#create-recipe').addEventListener('click', (e) => {
    const note = createRecipe()
    location.assign(`/edit.html#${note.id}`)
})  

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderRecipes()
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderRecipes()
})

window.addEventListener('storage', (e) => { 
    if(e.key === 'notes'){
        renderRecipes()
    }
})

