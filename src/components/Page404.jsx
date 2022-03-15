import { Link } from 'react-router-dom'

const Page404 = () => (
  <section className='grid place-items-center font-bold text-3xl gap-8'>
    <h1>Sorry! This page does not exist.</h1>
    <h2>Go <Link to='/recipes' className='text-cyan-500'>Home</Link></h2>
  </section>
)

export default Page404
