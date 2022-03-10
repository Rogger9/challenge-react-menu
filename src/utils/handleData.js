import { useMemo } from 'react'

export const handleData = (info, { vegan, random }) => useMemo(
  () => info.forEach(
    ({ data: { results, recipes } }) => (results && !recipes) ? vegan(results) : random(recipes)
  ),
  [info]
)
