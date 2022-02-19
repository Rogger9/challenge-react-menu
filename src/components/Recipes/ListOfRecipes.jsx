import RecipeCard from './RecipesCard'

const ListOfRecipes = ({ type, data }) => {
  console.log(data)
  return (
    <section className='grid place-items-center w-full gap-8'>
      <h1>{type}</h1>
      {
        data?.map(recipe => <RecipeCard key={recipe.id} {...recipe} />)
      }
    </section>
  )
}

export default ListOfRecipes
