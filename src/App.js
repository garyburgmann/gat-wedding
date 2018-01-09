import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import HomeComponent from './pages/Home';
import AuthComponent from './pages/Auth';
import ExampleForm from './pages/RSVP';
import GoogleApiWrapper from './components/MapComponent';
import Loading from './components/Loading';
import AuthService from './services/AuthService';

import fire from './environments/fire';


class App extends Component {


  state = {
    auth: '',
    // isLoggedIn: 
  }

  _authService = new AuthService();


  componentDidMount(){
    // console.log(fire);
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('User currently signed in');
        this.setState({ isLoggedIn: true });
      } else {
        console.log('No user currently signed in');
        this.setState({ isLoggedIn: false });
      }
      this.render();
    });
    
    
    // /* Create reference to messages in Firebase Database */
    // localStorage.setItem('loggedIn', false);
    // console.log(localStorage.getItem('loggedIn'));
    // let authRef = fire.database().ref('auth');
    // authRef.once('value', snapshot => {
    //   /* Update React state when page loaded is added at Firebase Database */
    //   let a = { text: snapshot.val(), id: snapshot.key };
    //   // console.log('FIREBASE AUTH: ', a);
    //   this.setState({ auth: a.text });
    // })
  }

  componentWillUnmount() {
    this._authService.fireLogout();
  }

  // checkLogin(pw) {
  //   let _authService = new AuthService();
  //   _authService.fireLogin(pw);
  //   let jedi = _authService.fireIsUser();
  //   setTimeout(() => {
  //     console.log(jedi);
  //     this.setState({ isLoggedIn: jedi });
  //   }, 100);
  // }


  render() {
    const isUser = this.state.isLoggedIn;
    // console.log(isUser);
    if (isUser) {
      return (
        <div style={{height: '100vh'}}>
          <BrowserRouter>
            <div>
              <Switch>
                {/* <Route path="/listview" component={() => (<ListView />)} /> */}
                <Route path="/location" component={() => (<GoogleApiWrapper />)} />
                <Route path="/rsvp" component={() => (<ExampleForm />)} />
                <Route path="/auth" component={() => (<AuthComponent  />)} />
                <Route path="/" component={() => (<HomeComponent />)} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      );
    } else if (isUser === undefined){
      return <Loading />;
    } else {
      return <AuthComponent  />;
    }
  }
}

export default App;
