import { lazy, useState } from 'react'
import { mockRandom, mockVegan, RECIPES_RANDOM_URL, RECIPES_VEGAN_URL } from '../../config'
import Loader from './Loader'
import { getRecipesInformation } from '../utils/getRecipesInformation'
import { handleData } from '../utils/handleData'
import { useFetchHome } from '../hooks/useFetchHome'

const Header = lazy(() => import('./Header'))
const ListOfRecipes = lazy(() => import('./Recipes/ListOfRecipes'))
const ExtraInformation = lazy(() => import('./ExtraInformation'))

const urlVegan = RECIPES_VEGAN_URL + import.meta.env.VITE_API_KEY
const urlRandom = RECIPES_RANDOM_URL + import.meta.env.VITE_API_KEY

const Home = () => {
  const [recipesVegan, setRecipesVegan] = useState([])
  const [recipesRandom, setRecipesRandom] = useState([])
  const { status, info } = useFetchHome([urlVegan, urlRandom])

  handleData(info, { vegan: setRecipesVegan, random: setRecipesRandom })

  const veganAmount = recipesVegan?.length
  const randomAmount = recipesRandom?.length

  const { dataResume } = getRecipesInformation({ recipesVegan, recipesRandom })

  const deleteRecipe = (id, isVegan) => {
    const filterRecipes = state => [...state].filter(recipe => !(recipe.id === id))
    isVegan && setRecipesVegan(filterRecipes)
    setRecipesRandom(filterRecipes)
  }

  if (status !== 'resolved') return <Loader />
  if (status === 'rejected') return <h1>Sorry! data not found</h1>

  return (
    <div className='bg-cyan-50 grid auto-rows-fr min-h-screen h-full w-full text-center overflow-hidden'>
      <Header {...{ veganAmount, randomAmount, setRecipesVegan, setRecipesRandom }} />
      <main className='row-span-6 grid lg:grid-cols-5'>
        <div className='col-span-4 grid place-items-center items-start lg:grid-cols-2 py-4 sm:px-2 gap-8 overflow-y-auto'>
          <ListOfRecipes type='Random' data={recipesRandom} handleClick={deleteRecipe} />
          <ListOfRecipes type='Vegan' data={recipesVegan} handleClick={deleteRecipe} />
        </div>
        <ExtraInformation data={dataResume} />
      </main>
    </div>
  )
}

export default Home
