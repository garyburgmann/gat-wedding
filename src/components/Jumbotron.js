import React, { Component } from 'react';
import {
  Container,
  Header,
  Segment,
  Button
} from 'semantic-ui-react';
// import _ from 'lodash';
import FixedMenu from './Menu';
import TimerComponent from './Timer';
import banner from '../assets/images/cover.jpg'; // Tell Webpack this JS file uses this image
import fire from '../fire';


export default class Jumbotron extends Component {

  state = {

  }

  render() {
    return (
      <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 800, padding: '1em 0em', background: `#000 url('${banner}') no-repeat center center `, backgroundSize: 'cover'}}
            vertical
            raised
      >
        <Container style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>
          {/* <p className="test"> Hello </p> */}
          <FixedMenu  />
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
      </Segment>
    );
  }
  
}

