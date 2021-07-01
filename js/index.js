document.getElementById('gifs').addEventListener('click', event => {
  event.preventDefault()
  axios.get('/api/')
})