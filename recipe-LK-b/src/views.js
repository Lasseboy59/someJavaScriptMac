import moment from 'moment'
import { getFilters } from './filters';
import { sortRecipes, getRecipes } from './recipes'
import { removeIngridient, toggleIngridient } from './ingredients'

// Generate the DOM structure for a recipe
const generateRecipeDom = (recipe) => {
    const recipeEL  = document.createElement('a')
    const textEl    = document.createElement('p')
    const statusEl  = document.createElement('p')

    // Setup the recipe title text
    if(recipe.title.length > 0){
        textEl.textContent = recipe.title
    } else {
        textEl.textContent = 'unnamed recipe'
    }

    recipeEL.classList.add('list-item__title')
    recipeEL.appendChild(textEl)

    // Setup the link
    recipeEL.setAttribute('href', `/edit.html#${recipe.id}`)
    recipeEL.classList.add('list-item')


    // Setup the statusmessage
    // Check if every ingredient
    const every = recipe.ingredients.every((ingredient) => ingredient.exist)
    // Check if one ingredient
    const some  = recipe.ingredients.some((ingredient => ingredient.exist))

    if (recipe.ingredients.length > 0) {
        if (every) {
            statusEl.textContent = 'You have all the ingredients'
        } else if (some) {
            statusEl.textContent = 'You have some of the ingredients'
        } else {
            statusEl.textContent = 'You have none of the ingredients'
        }
    } else {
        statusEl.textContent = 'You don\'t have any ingredients'
    }

    statusEl.classList.add('list-item__subtitle')
    recipeEL.appendChild(statusEl)

    return recipeEL
}

// Render application recipes
const renderRecipes = () => {
    const recipesEL = document.querySelector('#recipes')
    const filters = getFilters()
    const recipes = sortRecipes(filters.sortBy)
    const filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase()))
 
    recipesEL.innerHTML = ' '

    if(filteredRecipes.length > 0){
        filteredRecipes.forEach((recipe) => {
            const recipeEL = generateRecipeDom(recipe)
            recipesEL.appendChild(recipeEL)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No recipes to show'
        emptyMessage.classList.add('empty-message')
        recipesEL.appendChild(emptyMessage)
    }
}

const recipeRender = (recipeId) => {
    const titleElement = document.querySelector('#recipe-title')
    const bodyElement = document.querySelector('#recipe-body')
    const updateElement = document.querySelector('#last-edited')

    const ingredientsElement = document.querySelector('#ingredients')
    const ingredientArray = []

    const recipes = getRecipes()
    const recipe = recipes.find((recipe) => recipe.id === recipeId)

    
    if(!recipe){
        location.assign('/index.html')
    }

    titleElement.value = recipe.title
    bodyElement.value = recipe.body
    updateElement.textContent = generateLastEdited(recipe.updatedAt)
    recipe.ingredients.forEach((ingredient) => {
        ingredientsElement.value = ingredientsElement.append(ingredient.title + ' ')
    })
    
    renderIngredients(recipeId)
}


// Render application recipes
const renderIngredients = (recipeId) => {
    const ingredientEl = document.querySelector('#ingredients')
    const recipes = getRecipes()
    const recipe = recipes.find((recipe) => recipe.id === recipeId)

    if(!recipe){
        location.assign('/index.html')
    }

    ingredientEl.innerHTML = ''

    recipe.ingredients.forEach((ingredient) => {
        ingredientEl.appendChild(generateIngredientDOM(recipeId, ingredient))
    })

}

// Get the DOM elements for an individual ingredient
const generateIngredientDOM = (recipeId, ingredient) => {
    const ingredientEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // Setup ingredient checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = ingredient.exist 
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('click', (e) => {
        toggleIngridient(ingredient)
        renderRecipes()
    })

    // Setup the ingredient title text
    textEl.textContent = ingredient.title
    containerEl.appendChild(textEl)

    // Setup container
    ingredientEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    ingredientEl.appendChild(containerEl)

    // Setup the remove button
    button.textContent = 'remove'
    button.classList.add('button', 'button--text')
    ingredientEl.appendChild(button)
    button.addEventListener('click', (e) => {
        removeIngridient(recipeId, ingredient)
        renderRecipes()
    })

    return ingredientEl
}

 // Generate last edited message
 const generateLastEdited = (timestamp) => {
     return `Last edited ${moment(timestamp).fromNow()}`
 }

export { generateRecipeDom, generateLastEdited, renderRecipes, recipeRender, renderIngredients }