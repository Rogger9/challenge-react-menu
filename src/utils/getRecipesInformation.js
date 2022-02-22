export const getRecipesInformation = ({ recipesVegan = [], recipesRandom = [] }) => {
  const dataResume = {
    'Final price': 0,
    'Average preparation time': 0,
    'Average Health Score': 0
  }

  // const infoVegan = recipesVegan?.reduce((acc, el) => {
  //   acc.price += el.pricePerServing * el.servings
  //   acc.time += el.readyInMinutes
  //   acc.health += el.healthScore
  //   return acc
  // }, { price: 0, time: 0, health: 0 })

  // const infoRandom = recipesRandom?.reduce((acc, el) => {
  //   acc.price += el.pricePerServing * el.servings
  //   acc.time += el.readyInMinutes
  //   acc.health += el.healthScore
  //   return acc
  // }, { price: 0, time: 0, health: 0 })

  const recipes = [...recipesVegan, ...recipesRandom]

  const infoRecipes = recipes?.reduce((acc, el) => {
    acc.price += el.pricePerServing * el.servings
    acc.time += el.readyInMinutes
    acc.health += el.healthScore
    return acc
  }, { price: 0, time: 0, health: 0 })

  let totalRecipes = recipes.length
  if (totalRecipes === 0) totalRecipes = 1

  dataResume['Final price'] = (infoRecipes.price).toFixed(2)
  dataResume['Average preparation time'] = (infoRecipes.time / totalRecipes).toFixed(2)
  dataResume['Average Health Score'] = (infoRecipes.health / totalRecipes).toFixed(2)

  return { dataResume }
}
