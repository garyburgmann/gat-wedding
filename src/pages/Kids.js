import React, {Component} from 'react';
import {
  Container,
  Header,
  Image
} from 'semantic-ui-react';
import seahorses from '../assets/images/seahorses.png'

export default class KidsComponent extends Component {
  render() {
    return (
      <Container text style={{fontFamily: `'Allura', cursive`, padding: '1em 1em', fontSize: '2em', background: `#F7F7F7`}} textAlign='center'>
        <Header style={{fontFamily: `'Allura', cursive`, padding: '0em 0em', fontSize: '1em'}} as='h2'>
          Kids
        </Header>
        <p>Due to space restricitons we won't be having kids at the reception. 
          If your child is under 1 and still breastfeeding get in touch with us at gatpad5@gmail.com, 
          but otherwise we can't facilitate sorry.
        </p>
        <p>Love Kat and Gary</p>
        <Image src={seahorses} size='small' centered style={{padding: '1em 0em'}}/>
      </Container>
    ) 
  }
}

