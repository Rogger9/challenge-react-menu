import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = ({ getInfo = [] }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  getInfo.map(({ url, method }) => {
    return useEffect(() => {
      setIsLoading(true)
      axios.get(url)
        .then(({ data }) => method(data))
        .catch(setError)
        .finally(() => setIsLoading(false))
    }, [url])
  })

  return { isLoading, error }
}
