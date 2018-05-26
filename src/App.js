import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import HomeComponent from './pages/Home';
import AuthComponent from './pages/Auth';
import ExampleForm from './pages/RSVP';
import GoogleApiWrapper from './components/MapComponent';
import Loading from './components/Loading';
import Jedi from './components/Jedi';
import FixedMenu from './components/Menu';
import GiftsComponent from './pages/Gifts';
import AccommodationComponent from './pages/Accommodation';
// import AuthService from './services/AuthService';



class App extends Component {


  state = {
    auth: '',
    isLoggedIn: false
  }

  isLoggedIn = (data) => {
    if (data.success) {
      sessionStorage.setItem('isLoggedIn', true);
      this.setState({
        isLoggedIn: true,
        token: data.token
       });
      // sessionStorage.setItem('isLoggedIn', true);
    }
  }

  logout = () => {
    sessionStorage.setItem('isLoggedIn', false);
    this.setState({
      isLoggedIn: false
    });
    console.log('STATE: ', this.state.isLoggedIn);
  }

  componentWillMount(){
    // sessionStorage.setItem('isLoggedIn', false);
    // console.log('SS: ', sessionStorage.getItem('isLoggedIn'));
    // console.log('NINJA');
  }

  render() {
    // const isUser = true;  // (this.state.isLoggedIn);
    // const isUser = (this.state.isLoggedIn);
    const isUser = (sessionStorage['isLoggedIn'] === 'true');
    console.log(isUser);
    if (isUser) {
      return (
        <div style={{minHeight: '100vh'}}>

          <BrowserRouter>
            <div style={{minHeight: '100vh'}}>
              <FixedMenu  />
              <Switch>
                {/* <Route path="/listview" component={() => (<ListView />)} /> */}
                <Route path="/location" component={() => (<GoogleApiWrapper />)} />
                <Route path="/rsvp" component={() => (<ExampleForm />)} />
                <Route path="/auth" component={() => (<AuthComponent isLoggedIn={this.isLoggedIn} />)} />
                <Route path="/jedi" component={() => (<Jedi logout={this.logout} />)} />
                <Route path="/gifts" component={() => (<GiftsComponent />)} />
                <Route path="/accommodation" component={() => (<AccommodationComponent />)} />
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
