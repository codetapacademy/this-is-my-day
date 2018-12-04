import firebase from 'firebase';
// import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDTJqL5eTash5BjiGyBeuuUetBdwSPnxrw",
  authDomain: "this-is-my-day-1e528.firebaseapp.com",
  databaseURL: "https://this-is-my-day-1e528.firebaseio.com",
  projectId: "this-is-my-day-1e528",
  storageBucket: "",
  messagingSenderId: "376353538044"
};
firebase.initializeApp(config);

export default firebase;