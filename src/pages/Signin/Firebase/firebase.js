
  // Initialize Firebase
  
  const app = require('firebase/app');
  require('firebase/auth');
  require('firebase/database');

// import 'firebase/app'
// import 'firebase/firestore'

  
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
      
      if(!app.apps.length){
      app.initializeApp(config);
    }
  
      this.auth = app.auth();
      this.db = app.database();
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
  

        // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
  this.auth.onAuthStateChanged(authUser => {
    if (authUser) {
      this.user(authUser.uid)
        .once('value')
        .then(snapshot => {
          var dbUser = snapshot.val();

          // default empty roles
          if (!dbUser.roles) {
            dbUser.roles = {};
          }

          // merge auth and db user
          authUser = {
            uid: authUser.uid,
            email: authUser.email,
            ...dbUser,
          };

          next(authUser);
        });
    } else {
      fallback();
    }
  });



    // *** User API ***
  
    user = uid => this.db.ref(`users/${uid}`);
  
    users = () => this.db.ref('users');
  }
  
  export default Firebase;