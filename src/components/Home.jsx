import { lazy, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { RECIPES_RANDOM_URL, RECIPES_VEGAN_URL } from '../../config'
import Header from './Header'
import Loader from './Loader'
import { getRecipesInformation } from '../utils/getRecipesInformation'

const ListOfRecipes = lazy(() => import('./Recipes/ListOfRecipes'))
const ExtraInformation = lazy(() => import('./ExtraInformation'))

const Home = () => {
  const [_recipesVegan, setRecipesVegan] = useState([])
  const [_recipesRandom, setRecipesRandom] = useState([])
  const { results: recipesVegan } = _recipesVegan
  const { recipes: recipesRandom } = _recipesRandom
  const getInfo = [
    {
      url: RECIPES_VEGAN_URL + import.meta.env.VITE_API_KEY,
      method: setRecipesVegan
    },
    {
      url: RECIPES_RANDOM_URL + import.meta.env.VITE_API_KEY,
      method: setRecipesRandom
    }
  ]

  const veganAmount = recipesVegan?.length
  const randomAmount = recipesRandom?.length
  const searchInfo = {
    veganAmount,
    randomAmount,
    setRecipesVegan,
    setRecipesRandom
  }

  const { isLoading, error } = useFetch({ getInfo })
  const { dataResume } = getRecipesInformation({ recipesVegan, recipesRandom })

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
    <div className='bg-cyan-50 grid auto-rows-fr min-h-screen h-full w-full text-center overflow-hidden'>
      <Header {...searchInfo} />
      <main className='row-span-6 grid lg:grid-cols-5'>
        <div className='col-span-4 grid place-items-center items-start lg:grid-cols-2 py-4 sm:px-2 gap-8 overflow-y-auto'>
          <ListOfRecipes type='Random' data={recipesRandom} handleClick={deleteRecipeRandom} />
          <ListOfRecipes type='Vegan' data={recipesVegan} handleClick={deleteRecipeVegan} />
        </div>
        <ExtraInformation data={dataResume} />
      </main>
    </div>
  )
}

export default Home
