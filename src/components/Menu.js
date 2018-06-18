import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  // Button,
  Container,
  Menu,
  Icon,
  // Link
  Dropdown
} from 'semantic-ui-react'
import MediaQuery from 'react-responsive';


class FixedMenu extends Component {



  render() {
    return (
      <Container style={{maxWidth: '100%', minWidth: '100%', maxHeight: '100%', minHeight: '100%'}}>

        <MediaQuery query="(min-device-width: 850px)">

          <Menu  inverted fluid secondary size='massive' stackable text style={{alignItems: 'center'}} >
            <Menu.Item as={ Link } name='home' to='/' active> <Icon name='home'  /> Home </Menu.Item>
            <Menu.Item as={ Link } name='accommodation' to='accommodation' active> <Icon name='hotel'  /> Accommodation </Menu.Item>
            <Menu.Item as={ Link } name='location' to='location' active> <Icon name='map signs' /> Location </Menu.Item>
            <Menu.Item as={ Link } name='rsvp' to='rsvp' active> <Icon name='signup' /> RSVP </Menu.Item>
            <Menu.Item as={ Link } name='gifts' to='gifts' active> <Icon name='gift' /> Gifts </Menu.Item>
            <Menu.Item as={ Link } name='dresscode' to='dress-code' active> <Icon name='pied piper hat' /> What to Wear </Menu.Item>
            <Menu.Item as={ Link } name='kids' to='kids' active> <Icon name='child' /> Kids </Menu.Item>
          </Menu>

        </MediaQuery>

        <MediaQuery query="(max-device-width: 849px)">
        {/* <Button.Group color='teal'> */}
        <Menu secondary fluid>
          <Menu.Menu position='right'>
            <Dropdown icon='bars' className='icon' direction='left' style={{fontSize: '2em', padding: '12px 12px 12px 0', color: 'white'}}>
              <Dropdown.Menu>
                <Dropdown.Item icon='home' text='Home' onClick={() => { this.props.history.push('/') }} />
                <Dropdown.Item icon='hotel' text='Accommodation' onClick={() => { this.props.history.push('accommodation') }} />
                <Dropdown.Item icon='map signs' text='Location' onClick={() => { this.props.history.push('location') }} />
                <Dropdown.Item icon='signup' text='RSVP' onClick={() => { this.props.history.push('rsvp') }} />
                <Dropdown.Item icon='gift' text='Gifts' onClick={() => { this.props.history.push('gifts') }} />
                <Dropdown.Item icon='pied piper hat' text='What to Wear' onClick={() => { this.props.history.push('dress-code') }} />
                <Dropdown.Item icon='child' text='Kids' onClick={() => { this.props.history.push('kids') }} />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
          </Menu>
        {/* </Button.Group> */}
        </MediaQuery>

      </Container>

    );
  }

}

export default withRouter(FixedMenu);