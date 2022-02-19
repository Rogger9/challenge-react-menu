import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = ({ urlVegan, urlRandom }) => {
  const [recipesVegan, setRecipesVegan] = useState(null)
  const [recipesRandom, setRecipesRandom] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    axios.get(urlVegan)
      .then(({ data: { results } }) => setRecipesVegan(results))
      .catch(setError)
  }, [urlVegan])

  useEffect(() => {
    axios.get(urlRandom)
      .then(({ data: { recipes } }) => setRecipesRandom(recipes))
      .catch(setError)
      .finally(() => setIsLoading(false))
  }, [urlRandom])

  return { recipesVegan, recipesRandom, isLoading, error }
}
