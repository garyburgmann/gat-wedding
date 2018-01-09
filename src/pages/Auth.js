import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
// import { Link } from 'react-router-dom';
import xavier from '../assets/images/Xavier.jpg'; // Tell Webpack this JS file uses this image
// import AuthService from '../services/AuthService';
import fire from '../environments/fire';


export default class AuthComponent extends Component {

  state = { password: '', email: 'user@user.com', submittedPassword: '', submittedEmail: '' }

  // _authService = new AuthService();
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { password, email } = this.state;

    this.setState({ submittedPassword: password, submittedEmail: email });
    // console.log("PW: ", this.state.password)

    // this._authService.fireLogin(password);
    // this.props.checkLogin(password);
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        // console.log(res);
      })
      .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });
    
  }

  render() {
    const { password, email, submittedPassword, submittedEmail } = this.state
    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Image src={xavier} />
            <Header as='h2' color='teal' textAlign='center'>
              Please enter the password
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name="password"
                  onChange={this.handleChange}
                />

                <Button color='teal' fluid size='large' type='submit' value='Submit' >Login</Button>
              </Segment>
            </Form>
            <Message>
              Password is on your invitation :) <br />
              (Hint: 'open seasame' won't work)
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}


