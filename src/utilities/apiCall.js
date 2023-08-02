export const getStories = async () => {
  return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c208bae7a8e64fcc80db687550c678a6')
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(response.message)
    }
  })
  .then(data => data)
  .catch(error => {
    throw new Error(error)
  })
}