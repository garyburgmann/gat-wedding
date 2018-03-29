import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  // Button,
  Container,
  Menu,
  Icon
  // Link
} from 'semantic-ui-react'


export default class FixedMenu extends Component {

    render() {
      return (
        <Container>
          <Menu inverted fluid secondary size='massive' stackable text widths={4} >
            <Menu.Item as={ Link } name='home' to='/' active> <Icon name='home'  /> Home </Menu.Item>
            <Menu.Item as='a' href="https://docs.google.com/forms/d/e/1FAIpQLSfEKfbEKuVcF6NPI2w0JjyyOQVIoDND0blOdpDDLf-JAWg6_A/viewform?usp=sf_link"> <Icon name='hotel'  /> Accommodation </Menu.Item>
            <Menu.Item as={ Link } name='location' to='location'> <Icon name='map signs' /> Location </Menu.Item>
            <Menu.Item as={ Link } name='rsvp' to='rsvp' > <Icon name='signup' /> RSVP </Menu.Item>
          </Menu>
        </Container>
      );
  }

}
