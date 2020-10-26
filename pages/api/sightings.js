import axios from 'axios'

export default (req, res) => {

  if (req.method !== 'GET') {
    return res.json({ errorMessage: 'BAD_REQUEST' })
  }

  // axios.get('http://ufo-api.herokuapp.com/api/sightings/search?state=or')
  // axios.get('https://official-joke-api.appspot.com/jokes/random')
  axios.get('http://localhost:3000/api/ufo-sightings')
  .then(response => {
      res.json({ response: response.data })
    })
    .catch(err => {
      res.json({ errorMessage: 'NO_DATA' })
    })
  
}