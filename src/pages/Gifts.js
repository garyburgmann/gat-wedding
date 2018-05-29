import React, {Component} from 'react';
import {
  Container,
  Header,
  Image
} from 'semantic-ui-react';
import seahorses from '../assets/images/seahorses.png'

export default class GiftsComponent extends Component {
  render() {
    return (
      <Container text style={{fontFamily: `'Allura', cursive`, padding: '1em 1em', fontSize: '2em', background: `#F7F7F7`}} textAlign='center'>
        <Header style={{fontFamily: `'Allura', cursive`, padding: '0em 0em', fontSize: '1em'}} as='h2'>Wishing Well</Header>
        <p>The most important thing is to have you with us for our special day. No
          gifts are needed or expected. However, we have been asked what we need
          or would like, and if you do wish to give us something, a little cash to
          spend on our honeymoon would be very much appreciated.</p>
        <p>Love Kat and Gary</p>
        <Image src={seahorses} size='small' centered style={{padding: '1em 0em'}}/>
      </Container>
    ) 
  }
}

