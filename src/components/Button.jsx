import { Link } from 'react-router-dom'

const Button = ({ value, link = '#', handleClick = null, specificStyles = '' }) => (
  <Link to={link} className={`py-1 px-4 border-2 rounded-md ${value === 'Delete' ? 'bg-red-200 border-red-300 hover:bg-red-300' : 'bg-cyan-200 border-cyan-300 hover:bg-cyan-300'} ${specificStyles}`}>
    <button onClick={handleClick} aria-label={value} >{value}</button>
  </Link>
)

export default Button
