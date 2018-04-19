import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 41.47989, lng: 1.914621 }}
      defaultOptions={{
        disableDefaultUI: false,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >
      {props.isMarkerShown && (
        <Marker
          onClick={props.onMarkerClick}
          position={{ lat: 41.47375, lng: 1.915539 }}
        />
      )}
    </GoogleMap>
  ))
)

export default MyMapComponent

// TODO: Fer un bucle amb tots els Marker amb l'objecte de lat-long que rep per props
