export const getSearchImages = async (query, key) => {
  const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${key}`)

  if (!response.ok) {
    throw Error(`Failed to fetch images`)
  }
  const filteredImages = await response.json()
  return filteredImages.results
}