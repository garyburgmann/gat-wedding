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
  // console.log(props.visible);
  // if (props.visible) {
  //   return (
  //     <Container>
  //       <Menu fixed='top' pointing borderless size='large' inverted color='blue'>
  //         <Menu.Item as='a' active>Home</Menu.Item>
  //         <Menu.Item as='a'>Work</Menu.Item>
  //         <Menu.Item as='a'>Company</Menu.Item>
  //         <Menu.Item as='a'>Career</Menu.Item>
  //         <Menu.Menu position='right'>
  //           <Menu.Item className='item'>
  //             <Button as='a'>Log in</Button>
  //           </Menu.Item>
  //           <Menu.Item>
  //             <Button as='a' primary>Sign Up</Button>
  //           </Menu.Item>
  //         </Menu.Menu>
  //       </Menu>
  //     </Container>
  //   );
  // } else {
    render() {
      return (
        <Container>
          <Menu inverted fluid secondary size='massive' stackable text widths={4} >
            <Menu.Item as={ Link } name='home' to='/' active> <Icon name='home'  /> Home </Menu.Item>
            <Menu.Item as='a'> <Icon name='hotel'  /> Accommodation </Menu.Item>
            <Menu.Item as={ Link } name='location' to='location'> <Icon name='map signs' /> Location </Menu.Item>
            <Menu.Item as={ Link } name='rsvp' to='rsvp' > <Icon name='signup' /> RSVP </Menu.Item>
            {/* <Menu.Menu position='right'>
              <Menu.Item className='item'>
                <Button as='a'>Log in</Button>
              </Menu.Item>
              <Menu.Item>
                <Button as='a' color='green'  >Sign Up</Button>
              </Menu.Item>
            </Menu.Menu> */}
          </Menu>
        </Container>
      );
  }

}
