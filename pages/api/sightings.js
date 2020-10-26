import axios from 'axios'

export default (req, res) => {

  axios.get('http://ufo-api.herokuapp.com/api/sightings/search?state=or')
    .then(response => {
      res.json({ response: response.data })
    })
    .catch(err => res.json({ err }))
  
}