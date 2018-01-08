import React, {Component} from 'react';
import config from '../gmapsKey';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import FixedMenu from './Menu';

export class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }
  
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <div>
        {/* <FixedMenu  /> */}
        <Map google={this.props.google}
            onClick={this.onMapClicked}
            initialCenter={{
              lat: -28.2569834,
              lng: 153.580499
            }}
            zoom={17}
        >
          <Marker onClick={this.onMarkerClick}
                  name={'Gat Ceremony Location'} />
          <Marker
          onClick={this.onMarkerClick}
            title={'The marker`s title will appear as a tooltip.'}
            name={'Gat Reception Location (Babalou is upstairs)'}
            position={{lat: -28.2554067, lng: 153.5760453}} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB56-QFW1QRhr8lMDXD-NBYWUoswCUUrgA'
})(MapComponent)