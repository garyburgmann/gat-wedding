import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import HomeComponent from './pages/Home';
import AuthComponent from './pages/Auth';
import fire from './fire';

class App extends Component {

  state = {
    auth: '',
    isLoggedIn: false
  }

  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let authRef = fire.database().ref('auth');
    authRef.once('value', snapshot => {
      /* Update React state when page loaded is added at Firebase Database */
      let a = { text: snapshot.val(), id: snapshot.key };
      // console.log('FIREBASE AUTH: ', a);
      this.setState({ auth: a.text });
    })
  }

  checkPassword(pw) {
    // console.log('CP PW: ', pw);
    // console.log('CP State: ', this.state.auth);
    if (pw === this.state.auth) {
      this.setState({ isLoggedIn: true });
    }
  }
  // renderLogin(){
  //   <div>
  //      <AuthComponent />
  //   </div>
  // }

  // renderHome(){
  //   <div>
  //      <HomeComponent />
  //   </div>
  // }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      return <HomeComponent />;
    } else {
      return <AuthComponent checkPassword={pw => this.checkPassword(pw)}/>;
    }
  }
}

export default App;
