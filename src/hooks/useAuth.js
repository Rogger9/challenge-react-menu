import { useState, useEffect } from 'react'

export const useAuth = () => {
  const [auth, setAuth] = useState(null)

  useEffect(() => {
    setAuth(window.localStorage.getItem('auth'))
  }, [auth])

  return { auth }
}
