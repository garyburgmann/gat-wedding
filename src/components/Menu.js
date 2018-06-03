import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  // Button,
  Container,
  Menu,
  Icon,
  // Link
  // Dropdown
} from 'semantic-ui-react'
import MediaQuery from 'react-responsive';


export default class FixedMenu extends Component {



  render() {
    return (
      <Container style={{maxWidth: '100%', minWidth: '100%', maxHeight: '100%', minHeight: '100%'}}>
        <MediaQuery query="(min-device-width: 850px)">
          <Menu  inverted fluid secondary size='massive' stackable text style={{alignItem: 'center'}} >
            <Menu.Item as={ Link } name='home' to='/' active> <Icon name='home'  /> Home </Menu.Item>
            <Menu.Item as={ Link } name='accommodation' to='accommodation' active> <Icon name='hotel'  /> Accommodation </Menu.Item>
            <Menu.Item as={ Link } name='location' to='location' active> <Icon name='map signs' /> Location </Menu.Item>
            <Menu.Item as={ Link } name='rsvp' to='rsvp' active> <Icon name='signup' /> RSVP </Menu.Item>
            <Menu.Item as={ Link } name='gifts' to='gifts' active> <Icon name='gift' /> Gifts </Menu.Item>
            <Menu.Item as={ Link } name='dresscode' to='dress-code' active> <Icon name='pied piper hat' /> What to Wear </Menu.Item>
          </Menu>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 849px)">
        <Menu inverted fluid secondary size='mini'  text style={{alignItem: 'center', marginBottom: '0'}} >
          <Menu.Item as={ Link } name='home' to='/' active> <Icon name='home'  /> Home </Menu.Item>
          <Menu.Item as={ Link } name='accommodation' to='accommodation' active> <Icon name='hotel'  /> Accommodation </Menu.Item>
          <Menu.Item as={ Link } name='location' to='location' active> <Icon name='map signs' /> Location </Menu.Item>
          {/* <Menu.Item as={ Link } name='rsvp' to='rsvp' active> <Icon name='signup' /> RSVP </Menu.Item>
          <Menu.Item as={ Link } name='gifts' to='gifts' active> <Icon name='empty star' /> Gifts </Menu.Item>
          <Menu.Item as={ Link } name='dresscode' to='dress-code' active> <Icon name='empty star' /> Dress </Menu.Item> */}
        </Menu>
        <Menu  inverted fluid secondary size='mini'  text style={{alignItem: 'center', marginTop: '0'}} >
          {/* <Menu.Item as={ Link } name='home' to='/' active> <Icon name='home'  /> Home </Menu.Item>
          <Menu.Item as={ Link } name='home' to='accommodation' active> <Icon name='hotel'  /> Accommodation </Menu.Item>
          <Menu.Item as={ Link } name='location' to='location' active> <Icon name='map signs' /> Location </Menu.Item> */}
          <Menu.Item as={ Link } name='rsvp' to='rsvp' active> <Icon name='signup' /> RSVP </Menu.Item>
          <Menu.Item as={ Link } name='gifts' to='gifts' active> <Icon name='gift' /> Gifts </Menu.Item>
          <Menu.Item as={ Link } name='dresscode' to='dress-code' active> <Icon name='pied piper hat' /> What to Wear </Menu.Item>
        </Menu>
      </MediaQuery>
    </Container>

    );
  }

}
