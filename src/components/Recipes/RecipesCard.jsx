import { lazy } from 'react'
import { Link, useLocation } from 'react-router-dom'
const Button = lazy(() => import('../Button'))

const RecipeCard = ({ id, title, image, handleClick, ...rest }) => {
  const { pathname } = useLocation()
  const isDetailPath = /detail/i.test(pathname)
  const detailsList = ['pricePerServing', 'servings', 'readyInMinutes', 'vegetarian', 'glutenFree', 'healthScore', 'dairyFree']
  const detailsToShow = Object.entries(rest).filter(([key]) => detailsList.includes(key))

  return (
    <div className='bg-cyan-100 max-w-lg grid place-items-center px-2 py-4 gap-4 shadow shadow-gray-200 rounded'>
      <h1>{title}</h1>
      <Link to={`/detail/${id}`} className=' hover:scale-105 transition-transform'>
        <img loading='lazy' src={image} alt={`image ${title}`} width='260' />
      </Link>
      <ul className='grid grid-cols-2 justify-items-start gap-y-2 gap-x-6 text-sm'>
        {
          detailsToShow.map(([name, value]) => (value || value !== 0) && <li key={name}>{name} <span className='text-orange-700'>{value}</span></li>)
        }
      </ul>
      {
        !isDetailPath &&
          <section className='flex justify-between w-full px-8'>
            <Button value='Details' link={`/detail/${id}`} />
            <Button value='Delete' handleClick={() => handleClick(id)} />
          </section>
      }
    </div>
  )
}

export default RecipeCard
