const ExtraInformation = ({ data }) => (
  <aside className='bg-cyan-400 grid content-evenly p-2 w-full col-span-4 lg:col-span-1 gap-2 text-sm md:text-base shadow-md'>
    <h1 className='font-bold'>Extra information</h1>
    {
      Object.entries(data).map(([key, value]) => <span key={key} className='bg-cyan-50 h-min m-auto p-2 rounded'>{key}: <span className='text-orange-700'>{value}</span></span>)
    }
  </aside>
)

export default ExtraInformation
