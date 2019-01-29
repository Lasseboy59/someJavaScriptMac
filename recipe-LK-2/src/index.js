// Imports
import { createRecipe, loadRecipes } from './recipes'
import { setFilters } from './filters'
import { renderRecipes } from './views'

// Render all recipes
renderRecipes()

// Recipe creation listener
document.querySelector('#create-recipe').addEventListener('click', (e) => {
    const note = createRecipe()
    location.assign(`/edit.html#${note.id}`)
})  

// Search input listener
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

// Window event listener
window.addEventListener('storage', (e) => { 
    if(e.key === 'notes'){
        loadRecipes()
        renderRecipes()
    }
})

