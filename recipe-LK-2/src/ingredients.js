// Import appropriate functions
import moment from "moment";
import { getRecipes, saveRecipes } from './recipes'

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
const removeIngridient = (id, { title }) => {
    const receipe = getRecipes().find((item) => item.id === id)
    const ingredientIndex = receipe.ingredients.findIndex((item) => item.title === title)

    if (ingredientIndex > -1) {
        receipe.ingredients.splice(ingredientIndex, 1)
        saveRecipes()
    }
}

// Toggle ingredient
const toggleIngridient = (ingredient) => {
    ingredient.exist = !ingredient.exist
    saveRecipes()
}

//Export appropriate functions
export { createIngridient, removeIngridient, toggleIngridient }