import { lazy, useState } from 'react'
import Search from './Forms/Search'
import { useMessage } from '../hooks/useMessage'
import { useFetchSearch } from '../hooks/useFetchSearch'
import { URL_SEARCH } from '../../config'
import { searchErrors } from '../utils/messagesError'

const Loader = lazy(() => import('./Loader'))
const ListOfRecipes = lazy(() => import('./Recipes/ListOfRecipes'))
const Button = lazy(() => import('./Button'))
const AlertMessage = lazy(() => import('./AlertMessage'))

const MAX_RECIPES = 2

const Header = ({ veganAmount, randomAmount, setRecipesVegan, setRecipesRandom }) => {
  const [query, setQuery] = useState(null)
  const [page, setPage] = useState(0)
  const numbersQuery = 4
  const maxVegan = veganAmount === MAX_RECIPES
  const maxRandom = randomAmount === MAX_RECIPES

  const url = URL_SEARCH({ query, numbersQuery, page }) + import.meta.env.VITE_API_KEY

  const { status, setStatus, info, setInfo } = useFetchSearch({ url, query, page })
  const { results: recipes } = info

  useMessage({ status, setStatus })

  const closeSearch = () => {
    setQuery(null)
    setPage(0)
    setInfo([])
    setStatus('idle')
  }

  const handlePage = () => setPage(page + numbersQuery)

  const addRecipe = (id, isVegan) => {
    if (maxVegan && maxRandom) return setStatus('alert1')
    if (isVegan && maxVegan) return setStatus('alert2')
    if (!isVegan && maxRandom) return setStatus('alert3')

    let recipeToAdd
    const filteredRecipes = recipes.filter(recipe => {
      if (recipe.id === id) recipeToAdd = recipe
      return !(recipe.id === id)
    })

    const updateState = state => [...state, recipeToAdd]

    isVegan
      ? setRecipesVegan(updateState)
      : setRecipesRandom(updateState)

    return setInfo({ results: filteredRecipes })
  }

  if (status === 'processing' && !recipes) return <section className='grid place-items-center'><Loader /></section>

  return (
    <header className='bg-cyan-400 flex items-center justify-center w-full relative'>
      <Search getQuery={setQuery} />
      {status === 'rejected' && <AlertMessage msg={searchErrors[status]} />}
      {
        (status === 'resolved' || query) &&
          <section className='w-full [height:52.8rem] pt-20 pb-32 lg:p-4 absolute top-full backdrop-blur-md overflow-y-auto'>
            <Button value='Close' specificStyles='px-6 py-2 absolute top-4 left-4' handleClick={closeSearch}/>
            <Button value='More' specificStyles='px-6 py-2 absolute top-4 right-4' handleClick={handlePage} />
            {/alert/.test(status) && <AlertMessage msg={searchErrors[status]} />}
            {
              status === 'processing' && query
                ? <Loader />
                : <ListOfRecipes type={`Search: ${query}`} isSearch data={recipes} handleClick={addRecipe}/>
            }
          </section>
      }
    </header>
  )
}

export default Header
