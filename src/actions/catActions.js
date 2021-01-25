export const fetchCats = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' })
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
    .then( res => {
      return res.json()
    })
    .then(responseJSON => {
      dispatch({ type: 'ADD_CATS', cats: responseJSON.images})
    })
  }
}
