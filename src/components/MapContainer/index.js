import React, {Component} from 'react';

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
    }, 3000)
  }

//Funció per gestionar el click als macadors.
// TODO: incloure mostrar el nom de l'espai en fer click o per defecte, estudiar.

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }
  
// TODO: passa a MyMapComponent un objecte com a props amb les lat-lon dels punts.
  render(){
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

    )
  }
}

export default MapContainer
