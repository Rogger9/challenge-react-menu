import { useEffect, useState } from 'react'
import { api } from '../utils/api'

export const useFetchHome = (URL = []) => {
  const [status, setStatus] = useState('idle')
  const [info, setInfo] = useState([])

  useEffect(() => {
    setStatus('processing')

    const req = URL.map(url => api.get(url))

    Promise.all(req)
      .then(res => {
        setInfo(res)
        setStatus('resolved')
      })
      .catch(setStatus('rejected'))
  }, [])

  return { status, info }
}
