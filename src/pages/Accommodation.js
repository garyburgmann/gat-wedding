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
  render() {
    return (
      <Container text style={{fontFamily: `'Allura', cursive`, padding: '1em 1em', fontSize: '2em', background: `#F7F7F7`}} textAlign='center'>
        <Header style={{fontFamily: `'Allura', cursive`, padding: '0em 0em', fontSize: '1em'}} as='h2'>Accommodation</Header>
        <p>Some places to stay nearby the reception:
          <br />
          <table align='center'>
            <tr>
              <td> Peppers </td>
              <td></td>
              <td> <Button href='https://www.peppers.com.au/salt/' inverted style={{color: 'teal'}}>Take me there</Button> </td>
            </tr>
            <tr>
              <td> Mantra </td>
              <td></td>
              <td> <Button href='https://www.mantra.com.au/new-south-wales/tweed-coast/kingscliff/accommodation/resorts/mantra-on-salt-beach/' inverted style={{color: 'teal'}}>Take me there</Button> </td>
            </tr>
            <tr>
              <td> Blue Waters Motel </td>
              <td></td>
              <td> <Button href='http://bluewatersmotel.com.au/' inverted style={{color: 'teal'}}>Take me there</Button> </td>
            </tr>
          </table>
          <br />
          Booking Websites:
          <br />
          <table align='center'>
            <tr>
              <td> Airbnb </td>
              <td></td>
              <td> <Button href='https://www.airbnb.com.au/s/Kingscliff--New-South-Wales/all?refinement_paths%5B%5D=%2Ffor_you&place_id=ChIJy10061P_kGsR8C9EkLQJBgU&query=Kingscliff%2C%20New%20South%20Wales&checkin=2018-11-03&checkout=2018-11-04' inverted style={{color: 'teal'}}>Take me there</Button> </td>
            </tr>
            <tr>
              <td> Booking.com </td>
              <td></td>
              <td> <Button href='https://www.booking.com/searchresults.en-gb.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGgPiAEBmAEuuAEHyAEM2AEB6AEB-AELkgIBeagCAw&sid=d478a391d9e933b5e3d37fb9dc7782f8&sb=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.en-gb.html%3Flabel%3Dgen173nr-1FCAEoggJCAlhYSDNYBGgPiAEBmAEuuAEHyAEM2AEB6AEB-AELkgIBeagCAw%3Bsid%3Dd478a391d9e933b5e3d37fb9dc7782f8%3Bsb_price_type%3Dtotal%26%3B&ss=Kingscliff%2C+New+South+Wales%2C+Australia&checkin_monthday=3&checkin_month=11&checkin_year=2018&checkout_monthday=4&checkout_month=11&checkout_year=2018&no_rooms=1&group_adults=2&group_children=0&from_sf=1&ss_raw=kingscl&ac_position=0&ac_langcode=en&dest_id=-1581789&dest_type=city&place_id_lat=-28.25627&place_id_lon=153.577&search_pageview_id=23d0340b1b63000b&search_selected=true&search_pageview_id=23d0340b1b63000b&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0' inverted style={{color: 'teal'}}>Take me there</Button> </td>
            </tr>
          </table>

        </p>
        <Image src={seahorses} size='small' centered style={{padding: '1em 0em'}}/>
      </Container>
    ) 
  }
}

