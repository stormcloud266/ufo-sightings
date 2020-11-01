import React, { useState, useContext, useEffect } from 'react'
import ReactMapGL from 'react-map-gl'
import MapMarker from './mapMarker'
import SightingsContext from '../context/sightings-context'

const Map = () => {

  const { sightings } = useContext(SightingsContext)

  const [mapOptions, setMapOptions ] = useState({
    width: '100vw',
    height: 500,
    zoom: 4,
    latitude: 39.0119,
    longitude: -98.4842
  })

  useEffect(() => {
    if (sightings.length > 0) {
      setMapOptions(prevState => ({
        ...prevState,
        latitude: sightings[0].loc[1],
        longitude: sightings[0].loc[0]
      }))
    }
  }, [sightings])

  return (
    <ReactMapGL
      {...mapOptions}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAP_API}
      mapStyle="mapbox://styles/tawnee/ckgo2x2nv1ons19mig9z8987p"
      onViewportChange={(viewport) => setMapOptions(viewport)}
      onResize={() => {
        setMapOptions(prevState => ({
          ...prevState,
          width: '100vw',
        }))
      }}
    >
      {
        sightings.map(sighting => (
          <MapMarker
            key={sighting._id}
            latitude={sighting.loc[1]} 
            longitude={sighting.loc[0]}
          />
        ))
      }
      
    </ReactMapGL>
  )
}

export default Map