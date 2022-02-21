import RecipesDetail from './components/Recipes/RecipeDetail'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<RecipesDetail />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
