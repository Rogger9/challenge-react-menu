const ExtraInformation = ({ data }) => (
  <aside className=' grid content-evenly p-2'>
    <h1 className='bg-cyan-500 p-4 font-bold rounded-sm'>Extra information</h1>
    {
      Object.entries(data).map(([key, value]) => <span key={key}>{key}: <span className='text-orange-700'>{value}</span></span>)
    }
  </aside>
)

export default ExtraInformation
