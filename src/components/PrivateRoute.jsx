import { Navigate } from 'react-router-dom'

const PriveteRoute = ({ token, children }) => (
  token ? children : <Navigate to='/login' />
)

export default PriveteRoute
