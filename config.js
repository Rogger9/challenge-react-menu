export const API_KEY = 'b54911f91f424e27a7371e51c7bdb5d3'

export const RECIPES_VEGAN_URL = `https://api.spoonacular.com/recipes/complexSearch?diet=vegan&number=2&addRecipeInformation=true&apiKey=${API_KEY}`

export const RECIPES_RANDOM_URL = `https://api.spoonacular.com/recipes/random?number=2&apiKey=${API_KEY}`

export const RECIPE_INFO = (idRecipe) => `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`
