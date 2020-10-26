import React, { useState, useContext, useEffect } from 'react'
import ReactMapGL from 'react-map-gl'
import MapMarker from './mapMarker'
import SightingsContext from '../context/sightings-context'

const Map = () => {

  const { sightings } = useContext(SightingsContext)

  const [mapOptions, setMapOptions ] = useState({
    width: 700,
    height: 300,
    latitude: 39.0119,
    longitude: -98.4842,
    zoom: 3
  })

  useEffect(() => {
    if (sightings.length > 0) {
      setMapOptions({
        width: 700,
        height: 300,
        latitude: sightings[0].loc[1],
        longitude: sightings[0].loc[0],
        zoom: 3
      })
    }
  }, [sightings])

  return (
    <ReactMapGL
      {...mapOptions}
      mapboxApiAccessToken={process.env.mapAPI}
      mapStyle="mapbox://styles/tawnee/ckgo2x2nv1ons19mig9z8987p"
      onViewportChange={(viewport) => setMapOptions(viewport)}
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