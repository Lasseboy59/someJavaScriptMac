import moment from 'moment'
import { getFilters } from './filters';
import { sortRecipes, getRecipes } from './recipes'

// Generate the DOM structure for a recipe
const generateRecipeDom = (recipe) => {
    const recipeEL = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

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
    statusEl.textContent = generateLastEdited(recipe.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    recipeEL.appendChild(statusEl)

    return recipeEL
}

// Generate recipes DOM function
const generateRecipesDom = (recipe) => {
    const wrapper           = document.createElement('a')
    const title             = document.createElement('p')
    const body              = document.createElement('p')
    const recipeTextWrapper = document.createElement('div')
    const iconWrapper       = document.createElement('div')

    // Title configuration
    title.classList.add('recipe-title')
    if (recipe.title.length > 0) {
        title.textContent = recipe.title
    } else {
        title.textContent = 'Untitled'
    }

    // Body configuration
    body.classList.add('recipe-body')

    // Check if every ingredient is true
    const every = recipe.ingredients.every((ingredient) => ingredient.exist)
    // Check if one of the ingredients is true
    const some  = recipe.ingredients.some((ingredient => ingredient.exist))

    if (recipe.ingredients.length > 0) {
        if (every) {
            body.textContent = 'You have all the ingredients'
        } else if (some) {
            body.textContent = 'You have some of the ingredients'
        } else {
            body.textContent = 'You have none of the ingredients'
        }
    } else {
        body.textContent = 'You have not ingredients'
    }

    // Text wrapper configurtion
    recipeTextWrapper.appendChild(title)
    recipeTextWrapper.appendChild(body)

    // Pen icon configuration
    iconWrapper.innerHTML = '<svg aria-hidden="true" data-prefix="fas" data-icon="pencil-alt" class="svg-inline--fa fa-pencil-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></svg>'
    iconWrapper.classList.add('icon-wrapper')
    // Main wrapper configuration
    wrapper.setAttribute('href',`/edit.html#${recipe.id}` )
    wrapper.classList.add('recipe')
    wrapper.appendChild(recipeTextWrapper)
    wrapper.appendChild(iconWrapper)

    return wrapper
}

const initializeEditPage = (recipeId) => {
    const titleElement = document.querySelector('#recipe-title')
    const bodyElement = document.querySelector('#recipe-body')
    const updateElement = document.querySelector('#last-edited')
    const recipes = getRecipes()
    const recipe = recipes.find((recipe) => recipe.id === recipeId)
    
    if(!recipe){
        location.assign('/index.html')
    }
    
    titleElement.value = recipe.title
    bodyElement.value = recipe.body
    updateElement.textContent = generateLastEdited(recipe.updatedAt)

    
}

// Render application recipes
const renderRecipes = () => {
    const recipesEL = document.querySelector('#recipes')
    const filters = getFilters()
    const recipes = sortRecipes(filters.sortBy)
    const filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase()))
 
    recipesEL.innerHTML = ''

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
 // Generate last edited message
 const generateLastEdited = (timestamp) => {
     return `Last edited ${moment(timestamp).fromNow()}`
 }

export { generateRecipeDom, generateLastEdited, renderRecipes, initializeEditPage }