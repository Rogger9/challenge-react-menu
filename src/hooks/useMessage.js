import { useEffect } from 'react'
// const AlertMessage = lazy(() => import('../components/AlertMessage'))

export const useMessage = ({ status, setStatus }) => {
  return useEffect(() => {
    const timeOut = setTimeout(() => /rejected|alert/.test(status) && setStatus('idle'), 4000)
    return () => clearTimeout(timeOut)
  }, [status])

  // const Alert = (msg = 'alert') => (<AlertMessage msg={msg} />)
  // return { Alert }
}
