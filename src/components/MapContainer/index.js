import React, { Component } from 'react'

import MyMapComponent from '../Map'

class MapContainer extends Component {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 500)
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCi5RT-WlZDSrTXiFyRlUJ2o9t6FmdXim0&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `200px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        latitude={this.props.latitude}
        longitude={this.props.longitude}
      />
    )
  }
}

export default MapContainer
