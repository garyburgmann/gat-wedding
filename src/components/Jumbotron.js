import React, { Component } from 'react';
import {
  Container,
  Header,
  
} from 'semantic-ui-react';


const Jumbotron = () => {
  return (
    <Container style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>
      {/* <p className="test"> Hello </p> */}
      <Header
        as='h1'
        content='Gat Wedding'
        inverted
        style={{ fontSize: '10em', fontWeight: 'bold', marginBottom: 0, marginTop: '1em' }}
      />
      <Header
        as='h2'
        content='Saturday, November 03, 2018'
        inverted
        style={{ fontSize: '4em', fontWeight: 'normal' }}
      />
      <Header
        as='h2'
        content='Kingscliff, NSW'
        inverted
        style={{ fontSize: '4em', fontWeight: 'normal' }}
      />
      {/* <Button primary size='huge'>
        Get Started
        <Icon name='right arrow' />
      </Button> */}
    </Container>
  );

  
}

export default Jumbotron;
