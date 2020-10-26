import { useEffect, useState,  } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ufoSightings from './api/ufo-sightings'
import Map from '../components/map'
import SightingsContext from '../context/sightings-context'
import Form from '../components/form'

const Home = () => {

  const [search, setSearch] = useState('')
  const [sightings, setSightings] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <SightingsContext.Provider value={{sightings, setSightings}}>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>hello there</h1>

        {
          loading && <h2>loading...</h2>
        }
        
        <Form setLoading={setLoading}/>

        <Map />
        
      </div>
    </SightingsContext.Provider>
  )
}

export default Home