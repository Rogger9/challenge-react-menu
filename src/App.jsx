import { Suspense, lazy, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './components/Loader'

const Home = lazy(() => import('./components/Home'))
const RecipesDetail = lazy(() => import('./components/Recipes/RecipeDetail'))
const Login = lazy(() => import('./components/Login'))
const PrivateRoute = lazy(() => import('./components/PrivateRoute'))
const Page404 = lazy(() => import('./components/Page404'))

const getInicialState = () => localStorage.getItem('auth')

function App () {
  const [auth] = useState(getInicialState)

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<PrivateRoute token={auth}><Home /></PrivateRoute>} />
          <Route path='/detail/:id' element={<PrivateRoute token={auth}><RecipesDetail /></PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
