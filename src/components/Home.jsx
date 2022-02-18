import Header from './Header'

const Home = () => {
  return (
    <div className='bg-cyan-50 grid auto-rows-fr h-screen text-center'>
      <Header />
      <main className='row-span-6 grid grid-cols-5'>
        <h1 className='bg-gray-600 col-span-4 grid place-items-center'>Home</h1>
        <aside className='bg-sky-400 grid place-items-center'>Aside</aside>
      </main>
    </div>
  )
}

export default Home
