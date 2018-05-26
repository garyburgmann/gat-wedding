import React, {Component} from 'react'
import { Button
} from 'semantic-ui-react'
// import { Link, Redirect } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
// import axios from 'axios';


class Jedi extends Component {

  state = {
    redirect: false
  }

  logout = () => {

    setTimeout(() => {
      this.props.logout();
    }, 10);
    this.setState({redirect: true});
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return (
        <Redirect to='/' />
      )
    }
    return (
        <div>
          <Button onClick={this.logout}>Logout</Button>
          {/* <button onClick = {this.googleSignout()}>Google Signout</button> */}
        </div>
    );
  }
}


export default Jedi;
