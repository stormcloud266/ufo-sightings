import React, { useState, useContext, useEffect } from "react"
import ReactMapGL from "react-map-gl"
import MapMarker from "./mapMarker"
import SightingsContext from "../context/sightings-context"
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = () => {
  const { sightings } = useContext(SightingsContext)

  const [mapOptions, setMapOptions] = useState({
    width: "100vw",
    height: "calc(100vh - 80px)",
    zoom: 4,
    latitude: 39.0119,
    longitude: -98.4842,
  })

  useEffect(() => {
    if (sightings.length > 0) {
      setMapOptions((prevState) => ({
        ...prevState,
        latitude: parseFloat(sightings[0].latitude),
        longitude: parseFloat(sightings[0].longitude),
      }))
    }
  }, [sightings])

  return (
    <ReactMapGL
      {...mapOptions}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAP_API}
      mapStyle="mapbox://styles/tawnee/ckgo2x2nv1ons19mig9z8987p"
      onViewportChange={(viewport) => setMapOptions(viewport)}
      style={{ flex: 1 }}
      onResize={() => {
        setMapOptions((prevState) => ({
          ...prevState,
          width: "100vw",
          height: "calc(100vh - 80px)"
        }))
      }}
    >
      {sightings.map((sighting, i) => (
        <MapMarker
          key={i}
          latitude={parseFloat(sighting.latitude)}
          longitude={parseFloat(sighting.longitude)}
        />
      ))}
    </ReactMapGL>
  )
}

export default Map
