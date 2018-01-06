import React, { Component } from 'react'
import {
  Button,
  Container,
  Menu,
} from 'semantic-ui-react'


const FixedMenu = (props) => {
  // console.log(props.visible);
  if (props.visible) {
    return (
      <Container>
        <Menu fixed='top' pointing borderless size='large' inverted color='blue'>
          <Menu.Item as='a' active>Home</Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Career</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item className='item'>
              <Button as='a'>Log in</Button>
            </Menu.Item>
            <Menu.Item>
              <Button as='a' primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  } else {
    return (
      <Container>
        <Menu inverted secondary size='large'>
          <Menu.Item as='a' active>Home</Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Career</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item className='item'>
              <Button as='a'>Log in</Button>
            </Menu.Item>
            <Menu.Item>
              <Button as='a' color='green'  >Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }

}

export default FixedMenu;
