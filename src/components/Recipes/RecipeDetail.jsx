import Button from '@/components/Button'
import { useParams } from 'react-router-dom'
import RecipeCard from './RecipesCard'

const RecipesDetail = () => {
  const { id } = useParams()
  console.log(id)

  return (
    <div className='grid place-items-center h-screen p-8 gap-8'>
      <Button value='Go Home' className='absolute ' specificStyles='absolute top-4 left-4' link='/' />
      <RecipeCard />
      <p>Sumary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nihil asperiores iusto officia nostrum quia enim praesentium dolore nesciunt culpa ullam molestiae consectetur dignissimos sed officiis, odit, impedit hic nulla tempore, aut dolorum rem numquam. Modi laborum quidem fuga nemo, expedita suscipit autem asperiores.</p>
      <section className='grid grid-cols-2 w-full'>
        <ul>
          ingrediet
          <li>LIst</li>
          <li>LIst</li>
          <li>LIst</li>
          <li>LIst</li>
          <li>LIst</li>
          <li>LIst</li>
        </ul>
        <p>info nutricional</p>
      </section>
    </div>
  )
}

export default RecipesDetail
