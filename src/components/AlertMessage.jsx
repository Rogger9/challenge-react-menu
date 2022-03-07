const AlertMessage = ({ msg, alert }) => (
  <div role='alert' className='grid place-items-center w-screen h-screen absolute text-center font-bold'>
    <section className='bg-red-500/90 grid place-items-center gap-4 p-4 w-1/2 rounded'>
      {alert && <h1 className=''>Error!</h1>}
      <p>{msg}</p>
    </section>
  </div>
)

export default AlertMessage
