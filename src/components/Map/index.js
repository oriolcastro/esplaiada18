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
      defaultZoom={16}
      defaultCenter={{ lat: props.latitude, lng: props.longitude }}
      defaultOptions={{
        disableDefaultUI: false,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: props.latitude, lng: props.longitude }} />
      )}
    </GoogleMap>
  ))
)

export default MyMapComponent
