import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { RECIPES_RANDOM_URL, RECIPES_VEGAN_URL, smokRandom, smokVegan } from '../../config'
import Header from './Header'
import ListOfRecipes from './Recipes/ListOfRecipes'
import Loader from './Loader'
import ExtraInformation from './ExtraInformation'
import { getRecipesInformation } from '../utils/getRecipesInformation'

const Home = () => {
  const [_recipesVegan, setRecipesVegan] = useState(smokVegan)
  const [_recipesRandom, setRecipesRandom] = useState(smokRandom)
  const { results: recipesVegan } = _recipesVegan
  const { recipes: recipesRandom } = _recipesRandom
  const getInfo = [
    {
      url: RECIPES_VEGAN_URL,
      method: setRecipesVegan
    },
    {
      url: RECIPES_RANDOM_URL,
      method: setRecipesRandom
    }
  ]

  // const { isLoading, error } = useFetch({ getInfo })
  const { dataResume } = getRecipesInformation({ recipesVegan, recipesRandom })

  // const { isLoading, error } = useFetch({ urlVegan: RECIPES_VEGAN_URL, urlRandom: RECIPES_RANDOM_URL, setRecipesVegan, setRecipesRandom })
  const error = null
  const isLoading = false

  const deleteRecipeVegan = (id) => {
    const filterRecipes = [...recipesVegan]?.filter(recipe => !(recipe.id === id))
    setRecipesVegan({ results: filterRecipes })
  }
  const deleteRecipeRandom = (id) => {
    const filterRecipes = [...recipesRandom]?.filter(recipe => !(recipe.id === id))
    setRecipesRandom({ recipes: filterRecipes })
  }

  if (error) return <h1>Sorry! data not found</h1>
  if (isLoading) return <Loader />

  return (
    <div className='bg-cyan-50 grid auto-rows-fr min-h-screen h-full w-full text-center'>
      <Header />
      <main className='row-span-6 grid lg:grid-cols-5'>
        <div className='col-span-4 grid place-items-center items-start lg:grid-cols-2 sm:p-2 gap-8 overflow-x-auto'>
          <ListOfRecipes type='Random' data={recipesRandom} handleClick={deleteRecipeRandom} />
          <ListOfRecipes type='Vegan' data={recipesVegan} handleClick={deleteRecipeVegan} />
        </div>
        <ExtraInformation data={dataResume} />
      </main>
    </div>
  )
}

export default Home
