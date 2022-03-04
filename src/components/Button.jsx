import { Link } from 'react-router-dom'

const Button = ({ value, link = '#', handleClick = null, specificStyles = '' }) => {
  const redBackground = ['Delete', 'Close']
  return (
    <Link to={link} className={`py-1 px-4 border-2 rounded-md outline-hidden ${redBackground.includes(value) ? 'bg-red-200 border-red-300 hover:bg-red-300' : 'bg-cyan-200 border-cyan-300 hover:bg-cyan-300'} ${specificStyles}`}>
      <button onClick={handleClick} aria-label={value} className='border-none outline-none'>{value}</button>
    </Link>
  )
}

export default Button
