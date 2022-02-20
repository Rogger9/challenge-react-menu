import { Link, useLocation } from 'react-router-dom'
import Button from '../Button'

const RecipeCard = ({ id, title, image, handleClick, ...rest }) => {
  const { pathname } = useLocation()
  const isDetailPath = /detail/i.test(pathname)

  return (
    <div className='bg-cyan-100 w-80 grid place-items-center px-2 py-4 gap-4 shadow shadow-gray-200 rounded'>
      <h1>{title}</h1>
      <Link to={`/detail/${id}`} className=' hover:scale-105 transition-transform'>
        <img src={image} alt={`image ${title}`} width='260' />
      </Link>
      <ul className='grid grid-cols-2 justify-items-start gap-y-2 gap-x-6 text-sm'>
        <li>Price/servings: <span className='text-orange-700'>{rest.pricePerServing}</span></li>
        <li>Servings: <span className='text-orange-700'>{rest.servings}</span></li>
        <li>ReadyInMinutes: <span className='text-orange-700'>{rest.readyInMinutes}</span></li>
        <li>Vegetarian: <span className='text-orange-700'>{rest.vegetarian ? 'yes' : 'no'}</span></li>
        <li>Gluttenfree: <span className='text-orange-700'>{rest.glutenFree ? 'yes' : 'no'}</span></li>
        <li>Healthscore: <span className='text-orange-700'>{rest.healthScore}</span></li>
        <li>DairyFree: <span className='text-orange-700'>{rest.dairyFree ? 'yes' : 'no'}</span></li>
        {/* {
          info?.map(({ name, value }) => <li key={name}>{name}: <span className='text-orange-700'>{value}</span></li>)
        } */}
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
