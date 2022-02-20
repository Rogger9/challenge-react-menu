import Header from './Header'
import ListOfRecipes from './Recipes/ListOfRecipes'
import { useFetch } from '../hooks/useFetch'
import { RECIPES_RANDOM_URL, RECIPES_VEGAN_URL } from '../../config'
import Loader from './Loader'
import ExtraInformation from './ExtraInformation'
import { getRecipesInformation } from '../utils/getRecipesInformation'

const Home = () => {
  // const { recipesVegan, recipesRandom, isLoading, error } = useFetch({ urlVegan: RECIPES_VEGAN_URL, urlRandom: RECIPES_RANDOM_URL })
  const error = null
  const isLoading = false
  const recipesRandom = []
  const recipesVegan = [
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
      healthScore: 2
    }
  ]

  const { dataResume } = getRecipesInformation({ recipesVegan, recipesRandom })

  if (error) return <h1>Sorry! data not found</h1>
  if (isLoading) return <Loader />

  return (
    <div className='bg-cyan-50 grid auto-rows-fr h-screen w-full text-center'>
      <Header />
      <main className='row-span-6 grid grid-cols-5'>
        <div className='col-span-4 grid place-items-center items-start grid-cols-2 p-2 overflow-x-auto'>
          <ListOfRecipes type='Random' data={recipesRandom} />
          <ListOfRecipes type='Vegan' data={recipesVegan} />
        </div>
        <ExtraInformation data={dataResume} />
      </main>
    </div>
  )
}

export default Home
