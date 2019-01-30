import moment from 'moment'
import { getFilters } from './filters';
import { sortRecipes, getRecipes } from './recipes'

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
    statusEl.textContent = generateLastEdited(recipe.updatedAt)
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

    // recipe.ingredients.forEach((ingredient) => {
    //     ingredientArray.push(ingredient.title)
    // })
    // ingredientsElement.append(ingredientArray.join('\r\n'))
    // console.log(ingredientArray.join('\n\r'))
    // console.log(ingredientArray.join('\r\n'));
    // renderIngredients(recipeId)
    
}


// Render application recipes
const renderIngredients = (recipeId) => {
    const ingredientEl = document.querySelector('#ingredients')
    // const filters = getFilters()
    const recipes = getRecipes()

    const recipe = recipes.find((recipe) => recipe.id === recipeId)

    if(!recipe){
        location.assign('/index.html')
    }

    ingredientEl.innerHTML = ''
    // document.querySelector('#ingredients').appendChild(generateSummaryDOM(recipes.title))

    // ingredientEl.appendChild(generateIngredientDOM(recipeId))

    recipe.ingredients.forEach((ingredient) => {
        ingredientEl.appendChild(generateIngredientDOM(ingredient.title + ' '))
    })

}


// Get the DOM elements for an individual todo
const generateIngredientDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed 
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('click', (e) => {
        toggleTodo(todo.id)
        renderTodos()
    })

    // Setup the todo title text
    textEl.textContent = todo.text
    containerEl.appendChild(textEl)

    // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup the remove button
    button.textContent = 'remove'
    button.classList.add('button', 'button--text')
    todoEl.appendChild(button)
    button.addEventListener('click', (e) => {
        removeTodo(todo.id)
        renderTodos()
    })

    return todoEl
}

// Get the DOM elements for an individual todo
const generateTodoDOMold = (recipeId) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = recipeId.title
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('click', (e) => {
        toggleTodo(recipeId)
        renderRecipes()
    })

    // Setup the todo title text
    textEl.textContent = recipeId.title
    containerEl.appendChild(textEl)

    // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup the remove button
    button.textContent = 'remove'
    button.classList.add('button', 'button--text')
    todoEl.appendChild(button)
    button.addEventListener('click', (e) => {
        removeTodo(todo.id)
        renderRecipes()
    })

    return todoEl
}

 // Generate last edited message
 const generateLastEdited = (timestamp) => {
     return `Last edited ${moment(timestamp).fromNow()}`
 }


export { generateRecipeDom, generateLastEdited, renderRecipes, recipeRender, renderIngredients }