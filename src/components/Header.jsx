import { lazy, useEffect, useState } from 'react'
import Search from './Search'
import axios from 'axios'

const Loader = lazy(() => import('./Loader'))
const ListOfRecipes = lazy(() => import('./Recipes/ListOfRecipes'))
const Button = lazy(() => import('./Button'))

const MAX_RECIPES = 2

const AlertMessage = () => (
  <div role='alert' className='grid place-items-center w-screen h-screen absolute text-center font-bold'>
    <section className='bg-red-500/90 grid place-items-center p-2 w-3/4 h-1/5 rounded'>
      <h1 className=''>Error!</h1>
      <p>Sorry! Search failed. Please try again later</p>
    </section>
  </div>
)

const Header = ({ veganAmount, randomAmount, setRecipesVegan, setRecipesRandom }) => {
  const [query, setQuery] = useState(null)
  const [status, setStatus] = useState('idle')
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState([])
  const { results: recipes, offset = 0 } = search
  const numbersQuery = 4
  const maxVegan = veganAmount === MAX_RECIPES
  const maxRandom = randomAmount === MAX_RECIPES

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

  useEffect(() => {
    const timeOut = setTimeout(() => status === 'rejected' && setStatus('idle'), 4000)
    return () => clearTimeout(timeOut)
  }, [status])

  const closeSearch = () => {
    setQuery(null)
    setPage(0)
    setSearch([])
    setStatus('idle')
  }

  const handlePage = () => setPage(offset + numbersQuery)

  const addRecipe = (id, isVegan) => {
    if (maxVegan && maxRandom) return console.error('The menu is already complete')
    if (isVegan && maxVegan) return console.error('The vegan menu already has 2 recipes')
    if (!isVegan && maxRandom) return console.error('The random menu already has 2 recipes')

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
      {status === 'rejected' && <AlertMessage />}
      {
        (status === 'resolved' || query) &&
          <section className='w-full [height:52.8rem] pt-20 pb-32 lg:p-4 absolute top-full backdrop-blur-md overflow-y-auto'>
            <Button value='Close' specificStyles='px-6 py-2 absolute top-4 left-4' handleClick={closeSearch}/>
            {
              status === 'processing' && query
                ? <Loader />
                : <ListOfRecipes type={`Search: ${query}`} isSearch data={recipes} handleClick={addRecipe}/>
            }
            <Button value='More' specificStyles='px-6 py-2 absolute top-4 right-4' handleClick={handlePage} />
          </section>
      }
    </header>
  )
}

export default Header
