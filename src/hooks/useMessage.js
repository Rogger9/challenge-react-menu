import { useEffect } from 'react'

export const useMessage = ({ status, setStatus }) => {
  return useEffect(() => {
    const timeOut = setTimeout(() => /rejected|alert/.test(status) && setStatus('idle'), 4000)
    return () => clearTimeout(timeOut)
  }, [status])
}
