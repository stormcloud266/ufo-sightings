import React, { useEffect } from 'react'; 
import './my-map.module.css'
import mapboxgl from 'mapbox-gl';

function MyMap() {

 let mapContainer;

 useEffect(() => {
   const myAPIKey = process.env.mapAPI 
   const mapStyle = 'https://maps.geoapify.com/v1/styles/dark-matter-dark-grey/style.json'
   const initialState = {
     lng: `-73.9865811`,
     lat: `40.7305991`,
     zoom: 4
   };

   const map = new mapboxgl.Map({
     container: mapContainer,
     style: `${mapStyle}?apiKey=${myAPIKey}`,
     center: [initialState.lng, initialState.lat],
     zoom: initialState.zoom
   });
 }, [mapContainer]);

 return (<div className="map-container" ref={el => mapContainer = el}></div>);
}
export default MyMap;