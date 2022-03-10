import { lazy } from 'react'
import { useParams } from 'react-router-dom'
import { RECIPE_INFO } from '../../../config'
import { useFetchHome } from '../../hooks/useFetchHome'

const Button = lazy(() => import('../Button'))
const RecipeCard = lazy(() => import('./RecipesCard'))
const Loader = lazy(() => import('../Loader'))

const RecipesDetail = () => {
  const { id } = useParams()
  const url = RECIPE_INFO(id) + import.meta.env.VITE_API_KEY

  const { status, info } = useFetchHome([url])

  if (status === 'rejected' || !info[0]) return <h1>Sorry! data not found</h1>
  if (status === 'processing') return <Loader />

  const { data: recipe } = info[0]
  const { summary, nutrition, instructions } = recipe

  return (
    <div className='grid place-items-center min-h-screen h-full py-16 px-2 md:p-8 gap-8'>
      <Button value='Go Home' className='absolute ' specificStyles='absolute top-4 left-4' link='/' />
      <RecipeCard {...recipe} />
      <p dangerouslySetInnerHTML={{ __html: summary }}></p>
      <section className='grid md:grid-cols-2 w-full gap-4'>
        <ul className='grid grid-cols-2 gap-x-2'>
          <h1 className='font-bold'>Ingrediets</h1>
          {
            nutrition?.ingredients.map(({ id, name, amount, unit }) => <li key={id + name}>{name}: <span>{amount + unit}</span></li>)
          }
        </ul>
        <ul className='grid grid-cols-2'>
          <h1 className='font-bold'>Nutrients</h1>
          {
            nutrition?.nutrients.map(({ name, amount, unit }) => <li key={name}>{name}: <span>{amount + unit}</span></li>)
          }
        </ul>
      </section>
      <p dangerouslySetInnerHTML={{ __html: instructions }}></p>
    </div>
  )
}

export default RecipesDetail
