import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RECIPE_INFO } from '../../../config'
import Button from '../Button'
import Loader from '../Loader'
import RecipeCard from './RecipesCard'

const RecipesDetail = () => {
  const [recipe, setRecipe] = useState([])
  const [error, setError] = useState(null)
  const { id } = useParams()
  const { summary, nutrition, instructions } = recipe

  useEffect(() => {
    axios.get(RECIPE_INFO(id))
      .then(({ data }) => setRecipe(data))
      .catch(setError)
  }, [RECIPE_INFO(id)])

  if (error) return <h1>Sorry! data not found</h1>
  if (recipe.length === 0) return <Loader />

  return (
    <div className='grid place-items-center min-h-screen h-full py-16 px-2 md:p-8 gap-8'>
      <Button value='Go Home' className='absolute ' specificStyles='absolute top-4 left-4' link='/' />
      <RecipeCard {...recipe} />
      <p dangerouslySetInnerHTML={{ __html: summary }}></p>
      <section className='grid md:grid-cols-2 w-full gap-4'>
        <ul className='grid grid-cols-2 gap-x-2'>
          <h1 className='font-bold'>Ingrediets</h1>
          {
            nutrition.ingredients.map(({ id, name, amount, unit }) => <li key={id + name}>{name}: <span>{amount + unit}</span></li>)
          }
        </ul>
        <ul className='grid grid-cols-2'>
          <h1 className='font-bold'>Nutrients</h1>
          {
            nutrition.nutrients.map(({ name, amount, unit }) => <li key={name}>{name}: <span>{amount + unit}</span></li>)
          }
        </ul>
      </section>
      <p dangerouslySetInnerHTML={{ __html: instructions }}></p>
    </div>
  )
}

export default RecipesDetail
