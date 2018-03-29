import React, {Component} from 'react'
import { Button,
         Form,
         Grid,
         Header,
         Image,
         Message,
         Segment
} from 'semantic-ui-react'
import axios from 'axios';
// import { Link } from 'react-router-dom';
import xavier from '../assets/images/Xavier.jpg'; // Tell Webpack this JS file uses this image
import {API_URL} from '../settings';

export default class AuthComponent extends Component {

  constructor(props){
    super(props);
  }

  state = {
    password: '',
    submittedPassword: '',
  }

  apiUrl = API_URL;

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
    console.log(name, value);
  }

  handleSubmit = () => {
    const { password } = this.state;

    const data = {
      username: 'user',
      password: password
    }

    const url = `${this.apiUrl}authenticate/`;

    axios.post(url, data)
      .then((res) => {
        console.log("DJANGO RES: ", res.data)
        this.props.isLoggedIn(res.data);
      })
      .catch((err) => {
        console.log("DJANGO ERR: ", err);
      })
  }

  render() {
    const { password, submittedPassword } = this.state;
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
              (Hint: 'open sesame' won't work!)
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
