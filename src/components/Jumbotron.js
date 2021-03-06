import React, { Component } from 'react';
import {
  Container,
  Header,
  Segment
  // Button
} from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// import _ from 'lodash';
// import FixedMenu from './Menu';
import TimerComponent from './Timer';
// import desktop from '../assets/images/gat-desktop.jpg'; // Tell Webpack this JS file uses this image
// import mobile from '../assets/images/gat-mobile.jpg'; // Tell Webpack this JS file uses this image
// import pack from '../assets/images/gat-pack.jpg'; // Tell Webpack this JS file uses this image
import portrait from '../assets/images/gat-portrait.jpg'; // Tell Webpack this JS file uses this image
import landscape from '../assets/images/gat-landscape.jpg'; // Tell Webpack this JS file uses this image

export default class Jumbotron extends Component {

  state = {

  }

  content = (
    <Container style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>
      {/* <p className="test"> Hello </p> */}

      <Header
        as='h1'
        content='Katrina & Gary'
        inverted
        style={{ fontSize: '6em', fontWeight: 'bold', marginBottom: 0, marginTop: '.6em', fontFamily: `'Libre Baskerville', serif` }}
      />
      <Header
        as='h2'
        content='November 03, 2018'
        inverted
        style={{ fontSize: '2em', fontWeight: 'normal', fontFamily: `'Libre Baskerville', serif` }}
      />
      <Header
        as='h2'
        content='Kingscliff, NSW'
        inverted
        style={{ fontSize: '3em', fontWeight: 'bold', fontFamily: `'Libre Baskerville', serif` }}
      />
      <TimerComponent />
    </Container>
);

  render() {
    return (
      <div style={{height: '95vh !important'}}>
        <MediaQuery query="(min-device-width: 850px)">
          <Segment
                inverted
                textAlign='center'
                style={{height: '90vh', background: `linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1)), url('${landscape}') no-repeat  fixed`, backgroundSize: 'cover'}}
                vertical
                raised
          >
          {this.content}
          </Segment>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 849px)">
          <Segment
                inverted
                textAlign='center'
                style={{ minWidth: '100%', padding: '1em 0em', background: `linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1)), url('${portrait}') no-repeat center center fixed`, backgroundSize: 'cover'}}
                vertical
                raised
          >
          {this.content}
          </Segment>
        </MediaQuery>
      </div>

    );
  }

}
