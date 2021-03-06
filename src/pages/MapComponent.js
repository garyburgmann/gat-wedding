import React, {Component} from 'react';
// import config from '../environments/gmaps';
import {GMAPS_KEY} from '../settings';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import FixedMenu from './Menu';

const style = {
  width: '100%',
  height: '100%'
}

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
    // console.log(this.state.showingInfoWindow);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    // console.log(this.state.selectedPlace);
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  fetchPlaces(mapProps, map) {
    // const {google} = mapProps;
    // const service = new google.maps.places.PlacesService(map);
    // // ...
    // console.log(mapProps);
  }

  destinations = [
    {
      name: 'ceremony',
      title: 'Gat Ceremony: Lions Park',
      detail: `This is where we will be having the ceremony
               at 4pm NSW time. There is a little enclosed section of
               grass by the sea. There is some parking
               spaces nearby, but plan ahead as you may need
               to park in a street nearby and walk to the
               park.`,
      position: {
        lat: -28.2569834,
        lng: 153.580499
      }
    },
    {
      name: 'babalou',
      title: 'Gat Reception: Babalou',
      detail: `The reception will kick off around 6pm
               NSW time upstairs at the Kingscliff Hotel in the
               'Babalou' function room.`,
      position: {
        lat: -28.2554067,
        lng: 153.5760453
      }
    }
  ];

  renderMarkers = () => {
    return this.destinations.map((each, index) => {
      return (
        <Marker name={each.name}
                      title={each.title}
                      detail={each.detail}
                      position={each.position}
                      onClick={this.onMarkerClick}
                      key={index}
        />
      )
    });
  }

  render() {
    const markers = this.renderMarkers();
    return (
      <div >

        <Map google={this.props.google}
            onReady={this.fetchPlaces}
            onClick={this.onMapClicked}
            initialCenter={{
              lat: -28.2562241,
              lng: 153.5780
            }}
            zoom={16}
            style={style}
        >

        {markers}

          <InfoWindow
            marker={this.state.activeMarker}
            onOpen={this.windowHasOpened}
            onClose={this.windowHasClosed}
            visible={this.state.showingInfoWindow}>
              <div style={{textAlign: 'center', color: 'teal'}}>
                <h1>{this.state.selectedPlace.title}</h1>
                <h3>{this.state.selectedPlace.detail}</h3>
              </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: GMAPS_KEY
})(MapComponent)
