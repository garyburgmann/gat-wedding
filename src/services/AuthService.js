import fire from '../fire';


export default class AuthService {

  defaultEmail = 'admin@admin.com';

  fireLogin = (password) => {
    // console.log('fireLogin: ', password);
    fire.auth().signInWithEmailAndPassword(this.defaultEmail, password)
      .then((res) => {
        console.log(res);
      })
      .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });
      
  }

  fireLogout = () => {
    fire.auth().signOut().then(function() {
      console.log("Logged out!")
    }, function(error) {
      console.log(error.code);
      console.log(error.message);
    });
  }

  fireIsUser() {
    let result;
    fire.auth().onAuthStateChanged(function(user) {
      if (user) {
        result = true;
        console.log('User currently signed in');
        // return result;
        // console.log(result);
        // return Boolean([result]);
      } else {
        result = false;
        console.log('No user currently signed in');
         // return false;
        //  console.log(result);
        //  return result;
      }
      // console.log(result);
      return result;
    });
    
  }
  
}
