import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import ufoSightings from './api/ufo-sightings'
import MyMap from '../components/map'

const Home = () => {

  const [search, setSearch] = useState('')
  const [sightings, setSightings] = useState([])

  const getData = () => {
    axios.get(`/api/ufo-sightings`)
      .then(res => {
        setSightings(res.data.sightings)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>hello there</h1>
      <button onClick={() => getData()}>hey</button>

      {
        sightings.map(sighting => (
          <div key={sighting._id}>
            <h3>{sighting.summary}</h3>
          </div>
        ))
      }

      <MyMap />
      
    </div>
  )
}

export default Home