import RecipeCard from './RecipesCard'

const ListOfRecipes = ({ type }) => {
  return (
    <section>
      <h1>{type}</h1>
      <RecipeCard />
    </section>
  )
}

export default ListOfRecipes
