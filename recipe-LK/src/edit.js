import { recipeRender, initializeEditPage, generateLastEdited } from './views'
import { createIngridient } from './ingredients'
import { updateRecipe, removeRecipe } from './recipes'

const recipeTitle = document.querySelector('#recipe-title')
const recipeText = document.querySelector('#recipe-body')
const ingredientForm = document.querySelector('#ingredient-form')
const removeElement = document.querySelector('#remove-recipe')
const updateElement = document.querySelector('#last-edited')

// Recipe id
const recipeId = location.hash.substring(1)

// Render recipe
initializeEditPage(recipeId)

// Form handling add ingredient
ingredientForm.addEventListener('submit', (e) => {
    const text = e.target.elements.addIngridient.value.trim()
    e.preventDefault()
    const recipe = createIngridient(recipeId, text)
    // updateElement.textContent = generatelastEdited(recipe.updatedAt)
    e.target.elements.addIngridient.value = ''
    recipeRender(recipeId)
    // scrollToBottom();
})


// Title update
recipeTitle.addEventListener('input', (e) => {
    const recipe = updateRecipe(recipeId, {
        title: e.target.value
    })
    updateElement.textContent = generateLastEdited(recipe.updatedAt)
})

// Body update
recipeText.addEventListener('input', (e) => {
    const recipe = updateRecipe(recipeId, {
        text: e.target.value
    })
    updateElement.textContent = generateLastEdited(recipe.updatedAt)
})

// Remove recipe
removeElement.addEventListener('click', (e) => {
    removeRecipe(recipeId)
    location.assign('/index.html')
})

// Window event listener
window.addEventListener('storage', (e) => {
    if(e.key === 'recipes'){
        initializeEditPage(recipeId)
    }
})

