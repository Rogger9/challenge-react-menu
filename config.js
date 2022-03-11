export const BASE_URL = 'https://api.spoonacular.com/recipes'

export const RECIPES_VEGAN_URL = `${BASE_URL}/complexSearch?diet=vegan&number=2&addRecipeInformation=true&apiKey=`

export const RECIPES_RANDOM_URL = `${BASE_URL}/random?number=2&apiKey=`

export const RECIPE_INFO = (idRecipe) => `${BASE_URL}/${idRecipe}/information?includeNutrition=true&apiKey=`

export const URL_SEARCH = ({ query, numbersQuery, page }) => `${BASE_URL}/complexSearch?query=${query}&number=${numbersQuery}&offset=${page}&addRecipeInformation=true&apiKey=`

export const LOGIN_URL = 'http://challenge-react.alkemy.org'

export const mockVegan = [
  {
    id: 1,
    pricePerServing: 2,
    servings: 4,
    readyInMinutes: 10,
    healthScore: 1,
    vegan: true
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

export const mockRandom = [
  {
    id: 3,
    pricePerServing: 6,
    servings: 12,
    readyInMinutes: 10,
    healthScore: 3,
    vegan: true,
    vegetarian: false
  },
  {
    id: 4,
    pricePerServing: 8,
    servings: 16,
    readyInMinutes: 20,
    healthScore: 4,
    vegan: false,
    vegetarian: true
  }
]

export const mockInfo = [
  { data: { results: mockVegan } },
  { data: { recipes: mockRandom } }
]

export const mockSearch = { results: mockRandom, numbers: 4, offset: 0 }
