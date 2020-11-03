import axios from 'axios'

export default (req, res) => {

  if (req.method !== 'GET') {
    return res.json({ errorMessage: 'BAD_REQUEST' })
  }

  const URL = `http://ufo-api.herokuapp.com/api/sightings/search?state=${req.query.stateCode}`

  axios.get(URL)
  // axios.get('https://official-joke-api.appspot.com/jokes/random')
  axios.get('http://localhost:3000/api/tx')
  .then(response => {
      res.json({ sightings: response.data.sightings })
    })
    .catch(err => {
      res.json({ errorMessage: 'NO_DATA' })
    })
  
}