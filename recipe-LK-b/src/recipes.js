// Import needed libraries
import moment from 'moment';
import uuidv4 from 'uuid/v4'

// Recipes array
let recipes = []

// Read existing recipes from the storege
const loadRecipes = () => {
    const recipesJSON = localStorage.getItem('recipes')

    try {
        return recipesJSON !== null ? JSON.parse(recipesJSON) : []
    } catch(e) {
        return []
    }
}

// Expose recipes from module
recipes = loadRecipes()
const getRecipes = () => recipes

// Create recipe
const createRecipe = () => {
    const newRecipe = {
        id: uuidv4(),
        title: '',
        body: '',
        ingredients: [],
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf()
    }
    recipes.push(newRecipe)
    saveRecipes()
    return newRecipe
} 

// Save recipes to local storage
const saveRecipes = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

// Remove a recipe from the list
const removeRecipe = (id) => {
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === id)

    if(recipeIndex > -1) {
        recipes.splice(recipeIndex, 1)
        saveRecipes()
    }
}

// Sort your recipes by one of three ways
const sortRecipes = (sortBy) => {
    if (sortBy === 'byEdited') {
        return recipes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return recipes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return recipes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return recipes
    }
}

// Update recipe
const updateRecipe = (id, updates) => {
    const recipe = recipes.find((recipe) => recipe.id === id)

    if(!recipe) {
        return
    }

    if(typeof updates.title === 'string') {
        recipe.title = updates.title
        recipe.updatedAt = moment().valueOf()
    }

    if(typeof updates.body === 'string') {
        recipe.body = updates.body
        recipe.updatedAt = moment().valueOf()
    }

    saveRecipes()
    return recipe
}

export { getRecipes, createRecipe, removeRecipe, saveRecipes, sortRecipes, updateRecipe, loadRecipes }


