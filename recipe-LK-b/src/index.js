// Imports
import { createRecipe } from './recipes'
import { setFilters } from './filters'
import { renderRecipes } from './views'

// Render all recipes
renderRecipes()

// Recipe creation listener
document.querySelector('#create-recipe').addEventListener('click', (e) => {
    const note = createRecipe()
    location.assign(`/edit.html#${note.id}`)
})  

// Recipe search listener
document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderRecipes()
})

// Recipe filter listener
document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderRecipes()
})

// Window listener
window.addEventListener('storage', (e) => { 
    if(e.key === 'notes'){
        renderRecipes()
    }
})

