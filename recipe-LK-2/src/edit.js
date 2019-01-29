// Imports
import { recipeRender, generateLastEdited } from './views'
// import { createIngridient } from './ingredients'
import { updateRecipe, removeRecipe, loadRecipes } from './recipes'

// Title adn text inputs, form selector an d buttons
const recipeTitle  = document.querySelector('#recipe-title')
const recipeText   = document.querySelector('#recipe-body')
const ingredientForm = document.querySelector('#ingredient-form')
const removeElement = document.querySelector('#remove-recipe')
const saveRecipe    = document.querySelector('#save-recipe')
const updateElement = document.querySelector('#last-edited')

// Get recipe Id
const recipeId = location.hash.substring(1)

// Render recipe
recipeRender(recipeId)

// Form handling add ingredient
ingredientForm.addEventListener('submit', (e) => {
    const text = e.target.elements.addIngridient.value.trim()
    e.preventDefault()
    const recipe = createIngridient(recipeId, text)
    updateElement.textContent = generatelastEdited(recipe.updatedAt)
    e.target.elements.addIngridient.value = ''
    recipeRender(recipeId)
    // scrollToBottom();
})

//Tittle update
recipeTitle.addEventListener('input', (e) => {
    const recipe = updateRecipe(recipeId, {
        title: e.target.value
    })
    updateElement.textContent = generateLastEdited(recipe.updatedAt)
})

// Text-body update
recipeText.addEventListener('input', (e) => {
    const recipe = updateRecipe(recipeId, {
        text: e.target.value
    })
    updateElement.textContent = generateLastEdited(recipe.updatedAt)
})

// Delete recipe
removeElement.addEventListener('click', (e) => {
    removeRecipe(recipeId)
    location.assign('/index.html')
})

// Save recipe "Just for UX purposes"
saveRecipe.addEventListener('click', (e) => {
    location.assign('/index.html')
})

// Window event listener
window.addEventListener('storage', (e) => {
    if(e.key === 'recipes'){
        loadRecipes()
        recipeRender(recipeId)
    }
})

