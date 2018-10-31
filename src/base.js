import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCifqMpbbTwMMS-SCYZDXF1VzOBOsNKPI",
  authDomain: "catch-of-the-day-trent-s.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-trent-s.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;
