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
      <Container>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <Map />

      </Container>
    </SightingsContext.Provider>
  )
}

export default Home


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`