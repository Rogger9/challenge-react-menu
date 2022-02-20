import RecipeCard from './RecipesCard'

const ListOfRecipes = ({ type, data, handleClick }) => {
  return (
    <section className='grid place-items-center w-full gap-8'>
      <h1>{type}</h1>
      {
        data?.map(recipe => <RecipeCard key={recipe.id} {...recipe} handleClick={handleClick} />)
      }
    </section>
  )
}

export default ListOfRecipes
