import React, {Component} from 'react';
import {
  Container,
  Header,
  Image
} from 'semantic-ui-react';
import seahorses from '../assets/images/seahorses.png'
import chris from '../assets/images/Chris_Franklin.jpg'
import gaga from '../assets/images/lady_gaga.jpg'

export default class DressCodeComponent extends Component {
  render() {
    return (
      <Container text style={{fontFamily: `'Allura', cursive`, padding: '1em 1em', fontSize: '2em', background: `#F7F7F7`}} textAlign='center'>
        <Header style={{fontFamily: `'Allura', cursive`, padding: '0em 0em', fontSize: '1em'}} as='h2'>What To Wear</Header>
        <p>
          We don't really have a dress code for the wedding. <br />
          Just wear something nice. <br />
          However......
        </p>
        If you look like this:
        {/* <Image.Group size='medium'> */}
        <Image src={chris} size='medium' centered style={{padding: '1em 0em'}}/>
        Or this:
        <Image src={gaga} size='medium' centered style={{padding: '1em 0em'}}/>
        {/* </Image.Group> */}
        You are probably doing it wrong!
        
        <p>
          <br />
          Love Kat and Gary
        </p>

        <Image src={seahorses} size='small' centered style={{padding: '1em 0em'}}/>
      </Container>
    ) 
  }
}

