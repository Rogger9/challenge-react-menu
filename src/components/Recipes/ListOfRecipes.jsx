import RecipeCard from './RecipesCard'

const ListOfRecipes = ({ type, data, handleClick, isSearch }) => (
  <section className='grid place-items-center w-full gap-8'>
    {type && <h1>{type}</h1>}
    <div className='grid w-full place-items-center md:flex md:justify-center lg:grid gap-4'>
      {
        data?.map(recipe => <RecipeCard key={recipe.id} {...recipe} handleClick={handleClick} search={isSearch} />)
      }
    </div>
  </section>
)

export default ListOfRecipes
