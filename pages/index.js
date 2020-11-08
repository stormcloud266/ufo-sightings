import { useState } from "react"
import Head from "next/head"
import styled from "styled-components"
import Map from "../components/map"
import Header from "../components/header"
import SightingsContext from "../context/sightings-context"

const Home = () => {
  const [sightings, setSightings] = useState([])

  return (
    <SightingsContext.Provider value={{ sightings, setSightings }}>
      <div>
        <Head>
          <title>UFO Sightings</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <Map />

      </div>
    </SightingsContext.Provider>
  )
}

export default Home
