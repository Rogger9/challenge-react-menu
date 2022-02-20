import { useState } from 'react/cjs/react.development'
import { useFetch } from '../hooks/useFetch'
import { RECIPES_RANDOM_URL, RECIPES_VEGAN_URL } from '../../config'
import Header from './Header'
import ListOfRecipes from './Recipes/ListOfRecipes'
import Loader from './Loader'
import ExtraInformation from './ExtraInformation'
import { getRecipesInformation } from '../utils/getRecipesInformation'

const Home = () => {
  const [recipesVegan, setRecipesVegan] = useState([])
  const [recipesRandom, setRecipesRandom] = useState([])
  const { isLoading, error } = useFetch({ urlVegan: RECIPES_VEGAN_URL, urlRandom: RECIPES_RANDOM_URL, setRecipesVegan, setRecipesRandom })

  const { dataResume } = getRecipesInformation({ recipesVegan, recipesRandom })

  const deleteRecipeVegan = (id) => setRecipesVegan([...recipesVegan]?.filter(recipe => !(recipe.id === id)))
  const deleteRecipeRandom = (id) => setRecipesRandom([...recipesRandom]?.filter(recipe => !(recipe.id === id)))

  if (error) return <h1>Sorry! data not found</h1>
  if (isLoading) return <Loader />

  return (
    <div className='bg-cyan-50 grid auto-rows-fr h-screen w-full text-center'>
      <Header />
      <main className='row-span-6 grid grid-cols-5'>
        <div className='col-span-4 grid place-items-center items-start grid-cols-2 p-2 overflow-x-auto'>
          <ListOfRecipes type='Random' data={recipesRandom} handleClick={deleteRecipeRandom} />
          <ListOfRecipes type='Vegan' data={recipesVegan} handleClick={deleteRecipeVegan} />
        </div>
        <ExtraInformation data={dataResume} />
      </main>
    </div>
  )
}

export default Home
