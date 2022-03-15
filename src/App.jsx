import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './components/Loader'

const Home = lazy(() => import('./components/Home'))
const RecipesDetail = lazy(() => import('./components/Recipes/RecipeDetail'))
const Login = lazy(() => import('./components/Forms/Login'))
const Page404 = lazy(() => import('./components/Page404'))

function App () {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/recipes' element={<Home />} />
          <Route path='/recipes/detail/:id' element={<RecipesDetail />} />
          <Route path='/recipes/login' element={<Login />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
