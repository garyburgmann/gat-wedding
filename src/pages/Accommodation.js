import React, {Component} from 'react';
import {
  Container,
  Header,
  Image
} from 'semantic-ui-react';
import seahorses from '../assets/images/seahorses.png'

export default class AccommodationComponent extends Component {
  render() {
    return (
      <Container text style={{fontFamily: `'Allura', cursive`, padding: '1em 1em', fontSize: '2em', background: `#F7F7F7`}} textAlign='center'>
        <Header style={{fontFamily: `'Allura', cursive`, padding: '0em 0em', fontSize: '1em'}} as='h2'>Accommodation</Header>
        <p>Insert Content Here</p>
        <Image src={seahorses} size='small' centered style={{padding: '1em 0em'}}/>
      </Container>
    ) 
  }
}

