// Import appropriate functions
import moment from "moment";
import { getRecipes, saveRecipes } from './recipes'
import { renderRecipes } from "./views";

// Fetch recipes
const recipes = getRecipes()

// Create ingredient
const createIngridient = (id, title) => {
    const recipe = recipes.find((item) => item.id === id)

    if (!recipe) {
        location.assign('./index.html')
    }

    const newIngridient = {
        title,
        exist: false
    }
    // Check if ingrident exist and is length
    const checker = recipe.ingredients.find((item) => item.title === newIngridient.title)
    
    if (checker) {
        alert('You already have this ingredient!')
    } else if (newIngridient.title.length === 0) {
        alert('Please add a value!')
    }

    if (!checker && newIngridient.title.length > 0) {
        recipe.ingredients.push(newIngridient)
        recipe.updatedAt = moment().valueOf()
        saveRecipes()
    }

    return recipe
}

// Delete ingredient
const removeIngridientOld = (id, { title }) => {
    console.log('remove ingredient' + id, title)
    const receipe = getRecipes().find((item) => item.id === id)
    const ingredientIndex = receipe.ingredients.findIndex((item) => item.title === title)

    if (ingredientIndex > -1) {
        receipe.ingredients.splice(ingredientIndex, 1)
        saveRecipes()
    }
}

const removeIngridient = (id, ingredient) => {
    console.log('remove ingredient' + id, ingredient.title)
    const receipe = getRecipes().find((item) => item.id === id)
    const ingredientIndex = receipe.ingredients.findIndex((item) => item.title === ingredient.title)

    if (ingredientIndex > -1) {
        receipe.ingredients.splice(ingredientIndex, 1)
        saveRecipes()
    }
}

// Toggle ingredient
const toggleIngridient = (ingredient) => {
    ingredient.exist = !ingredient.exist
    saveRecipes()
    renderRecipes()
}

export { createIngridient, removeIngridient, toggleIngridient }