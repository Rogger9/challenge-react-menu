export const RECIPES_VEGAN_URL = 'https://api.spoonacular.com/recipes/complexSearch?diet=vegan&number=2&addRecipeInformation=true&apiKey='

export const RECIPES_RANDOM_URL = 'https://api.spoonacular.com/recipes/random?number=2&apiKey='

export const RECIPE_INFO = (idRecipe) => `https://api.spoonacular.com/recipes/${idRecipe}/information?includeNutrition=true&apiKey=`

export const LOGIN_URL = 'http://challenge-react.alkemy.org'

export const smokVegan = {
  results: [
    {
      id: 1,
      pricePerServing: 2,
      servings: 4,
      readyInMinutes: 10,
      healthScore: 1
    },
    {
      id: 2,
      pricePerServing: 4,
      servings: 8,
      readyInMinutes: 20,
      healthScore: 2,
      vegan: true
    }
  ]
}

export const smokRandom = {
  recipes: [
    {
      id: 3,
      pricePerServing: 6,
      servings: 12,
      readyInMinutes: 10,
      healthScore: 3,
      vegan: true
    },
    {
      id: 4,
      pricePerServing: 8,
      servings: 16,
      readyInMinutes: 20,
      healthScore: 4
    }
  ]
}
