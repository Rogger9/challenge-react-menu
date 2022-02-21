import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecipesDetail from './components/Recipes/RecipeDetail'
import Home from './components/Home'
import Login from './components/Login'
import PriveteRoute from './components/PrivateRoute'

const getInicialState = () => localStorage.getItem('auth')

function App () {
  const [auth] = useState(getInicialState)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PriveteRoute token={auth}><Home /></PriveteRoute>} />
        <Route path='/detail/:id' element={<PriveteRoute token={auth}><RecipesDetail /></PriveteRoute>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
