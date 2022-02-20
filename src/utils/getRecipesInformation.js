export const getRecipesInformation = ({ recipesVegan, recipesRandom }) => {
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

  const totalRecipes = recipesVegan?.length + recipesRandom?.length

  dataResume['Final price'] = infoVegan?.price + infoRandom?.price
  dataResume['Average preparation time'] = (infoVegan?.time + infoRandom?.time) / totalRecipes
  dataResume['Average Health Score'] = (infoVegan?.health + infoRandom?.health) / totalRecipes

  return { dataResume }
}
