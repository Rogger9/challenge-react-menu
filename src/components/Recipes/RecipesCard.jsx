import Button from '@/components/Button'
import { Link, useLocation } from 'react-router-dom'

const RecipeCard = () => {
  const { pathname } = useLocation()
  const isDetailPath = /detail/i.test(pathname)

  return (
    <div className='bg-cyan-100 w-80 grid place-items-center px-2 py-4 gap-4 shadow shadow-gray-200 rounded'>
      <h1>Title</h1>
      <Link to='#' className=' hover:scale-105 transition-transform'>
        <img src='https://spoonacular.com/recipeImages/657579-556x370.jpg' alt='image' width='260' />
      </Link>
      <ul className='grid grid-cols-2 justify-items-start gap-y-2 gap-x-6 '>
        <li>Price: <span className='text-amber-500'>22</span></li>
        <li>porciones: <span className='text-amber-500'>22</span></li>
        <li>Time: <span className='text-amber-500'>22</span></li>
        <li>vegetarian: <span className='text-amber-500'>22</span></li>
        <li>gluttenfree: <span className='text-amber-500'>22</span></li>
        <li>healthscore: <span className='text-amber-500'>22</span></li>
        <li>dairyFree: <span className='text-amber-500'>22</span></li>
      </ul>
      {
        !isDetailPath &&
          <section className='flex justify-between w-full px-8'>
            <Button value='Details' />
            <Button value='Delete' />
          </section>
      }
    </div>
  )
}

export default RecipeCard
