import RecipesDetail from './components/Recipes/RecipeDetail'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<RecipesDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
