import React, { Component } from 'react';
import {
  // Button,
  // Container,
  // Divider,
  // Grid,
  // Header,
  // Icon,
  // Image,
  // List,
  // Menu,
  // Segment,
  // Visibility,
} from 'semantic-ui-react';
// import FixedMenu from '../components/Menu';
import Jumbotron from '../components/Jumbotron';


export default class HomeComponent extends Component {
  state = {
  }

  // hideFixedMenu = () => this.setState({ visible: false })
  // showFixedMenu = () => this.setState({ visible: true })

  render() {
    // const { visible } = this.state

    return (
      <div style={{minHeight: '100%'}}>
       <Jumbotron />
      </div>
    )
  }
}