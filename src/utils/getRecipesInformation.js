export const getRecipesInformation = ({ recipesVegan = [], recipesRandom = [] }) => {
  const dataResume = {
    'Final price': 0,
    'Average preparation time': 0,
    'Average Health Score': 0
  }

  const infoVegan = recipesVegan?.reduce((acc, el) => {
    acc.price += el.pricePerServing * el.servings
    acc.time += el.readyInMinutes
    acc.health += el.healthScore
    return acc
  }, { price: 0, time: 0, health: 0 })

  const infoRandom = recipesRandom?.reduce((acc, el) => {
    acc.price += el.pricePerServing * el.servings
    acc.time += el.readyInMinutes
    acc.health += el.healthScore
    return acc
  }, { price: 0, time: 0, health: 0 })

  let totalRecipes = recipesVegan?.length + recipesRandom?.length
  if (totalRecipes === 0) totalRecipes = 1

  dataResume['Final price'] = (infoVegan?.price + infoRandom?.price).toFixed(2)
  dataResume['Average preparation time'] = ((infoVegan?.time + infoRandom?.time) / totalRecipes).toFixed(2)
  dataResume['Average Health Score'] = ((infoVegan?.health + infoRandom?.health) / totalRecipes).toFixed(2)

  return { dataResume }
}
