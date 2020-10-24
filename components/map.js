import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import MapMarker from './mapMarker'

const Map = () => {
  
  const [mapOptions, setMapOptions ] = useState({
    width: 700,
    height: 300,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 7
  })

  return (
    <ReactMapGL
      {...mapOptions}
      mapboxApiAccessToken={process.env.mapAPI}
      mapStyle="mapbox://styles/tawnee/ckgo2x2nv1ons19mig9z8987p"
      onViewportChange={(viewport) => setMapOptions(viewport)}
    >
      <MapMarker latitude={37.78} longitude={-122.41} />
    </ReactMapGL>
  )
}

export default Map