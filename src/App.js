import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import HomeComponent from './pages/Home';
import AuthComponent from './pages/Auth';
import ExampleForm from './pages/RSVP';
// import GoogleApiWrapper from './components/MapComponent';
import MapComponent from './pages/MapComponent';
import Loading from './components/Loading';
import Jedi from './components/Jedi';
import FixedMenu from './components/Menu';
import GiftsComponent from './pages/Gifts';
import AccommodationComponent from './pages/Accommodation';
import DressCodeComponent from './pages/DressCode';
// import AuthService from './services/AuthService';
import axios from 'axios';
import {API_URL} from './settings';



class App extends Component {

  state = {
    auth: '',
    isLoggedIn: false
  }

  apiUrl = API_URL;

  isLoggedIn = (data) => {
    if (data.success) {
      // sessionStorage.setItem('isLoggedIn', true);
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('token', data.token);
      this.setState({
        isLoggedIn: true,
        token: data.token
       });
      // sessionStorage.setItem('isLoggedIn', true);
    }
  }

  logout = () => {
    // sessionStorage.setItem('isLoggedIn', false);
    localStorage.setItem('isLoggedIn', false);
    localStorage.setItem('token', false);
    this.setState({
      isLoggedIn: false
    });
    // console.log('STATE: ', this.state.isLoggedIn);
  }

  verifyToken = async () => {
    if (!localStorage['token']) {
      this.logout();
      return false;
    }
    const url = `${this.apiUrl}auth/me/`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${localStorage['token']}`
    }
    try {
      await axios.get(url, { headers: headers })
      return true;
    } catch(err) {
      console.log("TOKEN ERR: ", err);
      this.logout();
      return false;
    }
  }

  componentWillMount(){
    this.verifyToken();
  }

  render() {
    const isUser = (localStorage['isLoggedIn'] === 'true');

    console.log(isUser);
    if (isUser) {
      return (
        <div style={{minHeight: '100vh'}}>

          <BrowserRouter>
            <div style={{minHeight: '100vh'}}>
              <FixedMenu  />
              <Switch>
                {/* <Route path="/listview" component={() => (<ListView />)} /> */}
                {/* <Route path="/location" component={() => (<GoogleApiWrapper />)} /> */}
                <Route path="/location" component={() => (<MapComponent />)} />
                <Route path="/rsvp" component={() => (<ExampleForm />)} />
                <Route path="/auth" component={() => (<AuthComponent isLoggedIn={this.isLoggedIn} />)} />
                <Route path="/jedi" component={() => (<Jedi logout={this.logout} />)} />
                <Route path="/gifts" component={() => (<GiftsComponent />)} />
                <Route path="/accommodation" component={() => (<AccommodationComponent />)} />
                <Route path="/dress-code" component={() => (<DressCodeComponent />)} />
                <Route path="/" component={() => (<HomeComponent />)} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      );
    } else if (isUser === undefined){
      return <Loading />;
    } else {
      return <AuthComponent isLoggedIn={this.isLoggedIn} />;
    }
  }
}

export default App;
