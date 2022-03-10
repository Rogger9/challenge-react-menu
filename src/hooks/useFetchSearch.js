import { useState, useEffect } from 'react'
import { api } from '../utils/api'

export const useFetchSearch = ({ url, query, page }) => {
  const [status, setStatus] = useState('idle')
  const [info, setInfo] = useState([])

  useEffect(() => {
    if (!query) return null
    setStatus('processing')
    api.get(url)
      .then(({ data: { results, numbers, offset } }) => {
        setInfo({ results, numbers, offset })
        setStatus('resolved')
      })
      .catch(() => setStatus('rejected'))
  }, [query, page])

  return { status, info, setStatus, setInfo }
}
