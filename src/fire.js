import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyAA-wa1S1u8eL81-NCL32db_UvjNJxMVv8",
    authDomain: "webopensource2021.firebaseapp.com",
    projectId: "webopensource2021",
    storageBucket: "webopensource2021.appspot.com",
    messagingSenderId: "263386431642",
    appId: "1:263386431642:web:9196fc640088d345d9df23",
    measurementId: "G-TZ2SF2DSPF"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;