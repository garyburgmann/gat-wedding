import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Image,
  Button
} from 'semantic-ui-react';
import seahorses from '../assets/images/seahorses.png'

export default class AccommodationComponent extends Component {

  places = [
    {
      name: 'Blue Waters Motel',
      url: 'https://bluewatersmotel.com.au/'
    },
    {
      name: 'Sunrise Cove Holiday Apartments',
      url: 'http://www.sunrisecove.com.au/'
    },
    {
      name: 'Kingscliff Paradiso Resort',
      url: 'http://www.paradisoresort.com.au/'
    },
    {
      name: 'Tweed Coast Holiday Parks',
      url: 'http://www.tchp.com.au/'
    },
    {
      name: 'Peppers',
      url: 'https://www.peppers.com.au/salt/'
    },
    {
      name: 'Mantra',
      url: 'https://www.mantra.com.au/new-south-wales/tweed-coast/kingscliff/accommodation/resorts/mantra-on-salt-beach/'
    },
  ]
  getPlaces = () => {
    return this.places.map((p, i) => {
      return (
        <tr key={i}>
          <td> {p.name} </td>
          <td></td>
          <td> <Button href={p.url} style={{color: 'white'}} color='teal' >Take me there</Button> </td>
        </tr>
      )
    });
  }

  render() {
    const places = this.getPlaces();
    return (
      <Container text style={{fontFamily: `'Allura', cursive`, padding: '1em 1em', fontSize: '2em', background: `#F7F7F7`}} textAlign='center'>
        <Header style={{fontFamily: `'Allura', cursive`, padding: '0em 0em', fontSize: '1em'}} as='h2'>Accommodation</Header>
        <div>Some places to stay in the area: </div>
          {/* <br /> */}
          <table align='center' cellSpacing="10">
            <tbody>
              {places}
            </tbody>
          </table>
          <div>Note: Some accomodation options such as the Mantra have a minimum of 2 nights stay</div>
          <br />
          Booking Websites:
          <br />
          <table align='center' cellSpacing="10">
            <tbody>
              <tr>
                <td> Airbnb </td>
                <td></td>
                <td> <Button href='https://www.airbnb.com.au/s/Kingscliff--New-South-Wales/all?refinement_paths%5B%5D=%2Ffor_you&place_id=ChIJy10061P_kGsR8C9EkLQJBgU&query=Kingscliff%2C%20New%20South%20Wales&checkin=2018-11-03&checkout=2018-11-04' style={{color: 'white'}} color='teal' >Take me there</Button> </td>
              </tr>
              <tr>
                <td> Expedia </td>
                <td></td>
                <td> <Button href='https://www.expedia.com.au' style={{color: 'white'}} color='teal' >Take me there</Button> </td>
              </tr>
            </tbody>  
          </table>

        {/* </p> */}
        <Image src={seahorses} size='small' centered style={{padding: '1em 0em'}}/>
      </Container>
    ) 
  }
}

