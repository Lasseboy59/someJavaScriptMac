// Imports
import { recipeRender, generateLastEdited, renderIngredients } from './views'
import { createIngridient } from './ingredients'
import { updateRecipe, removeRecipe, loadRecipes, getRecipes } from './recipes'

// Title and text inputs, form selector and buttons
const recipeTitle       = document.querySelector('#recipe-title')
const recipeBody        = document.querySelector('#recipe-body')
const ingredientForm    = document.querySelector('#ingredient-form')
const saveRecipe        = document.querySelector('#save-recipe')
const printRecipe        = document.querySelector('#print-recipe')
const removeElement     = document.querySelector('#remove-recipe')
const updateElement     = document.querySelector('#last-edited')

// Recipe Id
const recipeId = location.hash.substring(1)

let recipes = []

// Expose recipes from module
recipes = loadRecipes()

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
})

// Title update
recipeTitle.addEventListener('input', (e) => {
    const recipe = updateRecipe(recipeId, {
        title: e.target.value
    })
    updateElement.textContent = generateLastEdited(recipe.updatedAt)
})

// Body update
recipeBody.addEventListener('input', (e) => {
    const recipe = updateRecipe(recipeId, {
        body: e.target.value
    })
    updateElement.textContent = generateLastEdited(recipe.updatedAt)
})

// Delete recipe
removeElement.addEventListener('click', (e) => {
    removeRecipe(recipeId)
    location.assign('/index.html')
})

// Save recipe 
saveRecipe.addEventListener('click', (e) => {
    renderIngredients(recipeId)
    location.assign('/index.html')
})

// Window event listener
window.addEventListener('storage', (e) => {
    if(e.key === 'recipes'){
        loadRecipes()
        recipeRender(recipeId)
    }
})

