
  // Initialize Firebase
  
  import app from 'firebase/app';
  import 'firebase/auth';
  
  const config = {
    apiKey: "AIzaSyDBJH8z5eJDf7cgAWMiRGXE2U1vBnQVa2g",
    authDomain: "truck-firebase.firebaseapp.com",
    databaseURL: "https://truck-firebase.firebaseio.com",
    projectId: "truck-firebase",
    storageBucket: "truck-firebase.appspot.com",
    messagingSenderId: "810502901238"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
    }
      // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);
  
  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);  

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}
  
  export default Firebase;