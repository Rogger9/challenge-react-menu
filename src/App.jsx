import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecipesDetail from './components/Recipes/RecipeDetail'
import Home from './components/Home'
import Login from './components/Login'
import PriveteRoute from './components/PrivateRoute'
import Page404 from './components/Page404'

const getInicialState = () => localStorage.getItem('auth')

function App () {
  const [auth] = useState(getInicialState)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PriveteRoute token={auth}><Home /></PriveteRoute>} />
        <Route path='/detail/:id' element={<PriveteRoute token={auth}><RecipesDetail /></PriveteRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
