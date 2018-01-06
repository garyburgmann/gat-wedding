import React, { Component } from 'react';
import {
  Container,
  Header,
  
} from 'semantic-ui-react';
// import _ from 'lodash';
import FixedMenu from './Menu';
import TimerComponent from './Timer';

export default class Jumbotron extends Component {
  state = {
    //
  }

  render() {
    return (
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
        {/* <TimerComponent setTimer={this.state.setTimer} /> */}
        {/* <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button> */}
      </Container>
    );
  }
  
}

