document.getElementById('gifSearch').addEventListener('click', event => {
  event.preventDefault()
  axios.get('/api/gifs')
    .then(gif => {
      document.getElementById('gifs').innerHTML += `
        <img src="${gif.url}" alt="gif" />
      `
    })
    .catch(err => console.error(err))
})