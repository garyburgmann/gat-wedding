import React, {Component} from 'react';
import {
  Container,
  Header,
  Image,
  Grid,
  Segment
} from 'semantic-ui-react';
import seahorses from '../assets/images/seahorses.png'
import MapComponent from './MapComponent';
import MediaQuery from 'react-responsive';

export default class LocationComponent extends Component {
  render() {
    return (
      <div style={{minHeight: '100%', maxHeight: '100%'}}>
        <MediaQuery query="(min-device-width: 850px)">
          <Grid style={{minHeight: '100%', maxHeight: '100%'}}>
            <Grid.Row columns={2}>
              <Grid.Column>
                <MapComponent />
              </Grid.Column>
              <Grid.Column>
                <Container text style={{fontFamily: `'Allura', cursive`, padding: '1em 1em', fontSize: '2em', background: `#F7F7F7`}} textAlign='center'>
                  <Header style={{fontFamily: `'Allura', cursive`, padding: '0em 0em', fontSize: '1em'}} as='h2'>Ceremony</Header>
                  <p>
                    The ceremony is at 4pm NSW time (3pm QLD time), in Lions Park. 
                    There is limted parking immediately around the park, 
                    but you should at least be able to find parking in a street nearby.
                  </p>

                  <Header style={{fontFamily: `'Allura', cursive`, padding: '0em 0em', fontSize: '1em'}} as='h2'>Reception</Header>
                  <p>
                    The reception is at 6pm NSW time (5pm QLD time), at Babalou. 
                    It is only a couple hundred meteres down the road from the ceremony, 
                    so you can easily walk straight there after the ceremony and 
                    have a drink downstairs at the Kingscliff Hotel while we do 
                    our photos etc.
                  </p>

                  <p>
                    Love Kat and Gary
                  </p>

                  <Image src={seahorses} size='small' centered style={{padding: '1em 0em'}}/>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 849px)">

          <Grid style={{minHeight: '100%', maxHeight: '100%'}}>
            <Grid.Row columns={1}>
              <Grid.Column>

                <Segment style={{padding: '0 0', margin: '0'}}>
                  <Container text style={{fontFamily: `'Allura', cursive`, padding: '1em 1em', fontSize: '1em', background: `#F7F7F7`}} textAlign='center'>
                    <Header style={{fontFamily: `'Allura', cursive`, padding: '0em 0em', fontSize: '1em'}} as='h2'>Ceremony</Header>
                    <p>
                      The ceremony is at 4pm NSW time (3pm QLD time), in Lions Park.
                      There is limted parking immediately around the park,
                      but you should at least be able to find parking in a street nearby.
                    </p>

                    <Header style={{fontFamily: `'Allura', cursive`, padding: '0em 0em', fontSize: '1em'}} as='h2'>Reception</Header>
                    <p>
                      The reception is at 6pm NSW time (5pm QLD time), at Babalou.
                      It is only a couple hundred meteres down the road from the ceremony,
                      so you can easily walk straight there after the ceremony and
                      have a drink downstairs at the Kingscliff Hotel while we do
                      our photos etc.
                    </p>

                  </Container>
                </Segment>

                <Segment style={{minHeight: '100%', maxHeight: '100%', padding: '0 0', margin: '0'}}>
                  <MapComponent />
                </Segment>

              </Grid.Column>
            </Grid.Row>
          </Grid>

        </MediaQuery>
      </div>
    )
  }
}
