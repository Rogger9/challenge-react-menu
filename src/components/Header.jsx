import { lazy, useEffect, useState } from 'react'
import Search from './Search'
import axios from 'axios'
import { useMessage } from '../hooks/useMessage'

const Loader = lazy(() => import('./Loader'))
const ListOfRecipes = lazy(() => import('./Recipes/ListOfRecipes'))
const Button = lazy(() => import('./Button'))
const AlertMessage = lazy(() => import('./AlertMessage'))

const MAX_RECIPES = 2

const Header = ({ veganAmount, randomAmount, setRecipesVegan, setRecipesRandom }) => {
  const [query, setQuery] = useState(null)
  const [status, setStatus] = useState('idle')
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState([])
  const { results: recipes, offset = 0 } = search
  const numbersQuery = 4
  const maxVegan = veganAmount === MAX_RECIPES
  const maxRandom = randomAmount === MAX_RECIPES
  const messagesError = {
    rejected: 'Sorry! Search failed. Please try again later',
    alert1: 'The menu is already complete',
    alert2: 'The vegan menu already has 2 recipes',
    alert3: 'The random menu already has 2 recipes'
  }

  useMessage({ status, setStatus })

  const URL_SEARCH = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${numbersQuery}&offset=${page}&addRecipeInformation=true&apiKey=` + import.meta.env.VITE_API_KEY

  useEffect(() => {
    if (!query) return
    setStatus('processing')
    axios.get(URL_SEARCH)
      .then(({ data }) => {
        setSearch(data)
        setStatus('resolved')
      })
      .catch(() => setStatus('rejected'))
  }, [query, page])

  const closeSearch = () => {
    setQuery(null)
    setPage(0)
    setSearch([])
    setStatus('idle')
  }

  const handlePage = () => setPage(offset + numbersQuery)

  const addRecipe = (id, isVegan) => {
    if (maxVegan && maxRandom) return setStatus('alert1')
    if (isVegan && maxVegan) return setStatus('alert2')
    if (!isVegan && maxRandom) return setStatus('alert3')

    let recipeToAdd
    const filteredRecipes = recipes.filter(recipe => {
      if (recipe.id === id) recipeToAdd = recipe
      return !(recipe.id === id)
    })

    isVegan
      ? setRecipesVegan(({ results }) => ({ results: [...results, recipeToAdd] }))
      : setRecipesRandom(({ recipes }) => ({ recipes: [...recipes, recipeToAdd] }))

    return setSearch({ recipes: filteredRecipes })
  }

  if (status === 'processing' && search.length === 0) return <section className='grid place-items-center'><Loader /></section>

  return (
    <header className='bg-cyan-400 flex items-center justify-center w-full relative'>
      <Search getQuery={setQuery} />
      {status === 'rejected' && <AlertMessage msg={messagesError[status]} />}
      {
        (status === 'resolved' || query) &&
          <section className='w-full [height:52.8rem] pt-20 pb-32 lg:p-4 absolute top-full backdrop-blur-md overflow-y-auto'>
            <Button value='Close' specificStyles='px-6 py-2 absolute top-4 left-4' handleClick={closeSearch}/>
            <Button value='More' specificStyles='px-6 py-2 absolute top-4 right-4' handleClick={handlePage} />
            {/alert/.test(status) && <AlertMessage msg={messagesError[status]} />}
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
