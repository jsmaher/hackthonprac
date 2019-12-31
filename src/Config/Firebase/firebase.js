import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyB7dlf_BgPujqYrg9ZjG6Sj_Gr6FqrME7o",
  authDomain: "hecathon-9900.firebaseapp.com",
  databaseURL: "https://hecathon-9900.firebaseio.com",
  projectId: "hecathon-9900",
  storageBucket: "hecathon-9900.appspot.com",
  messagingSenderId: "339375125602",
  appId: "1:339375125602:web:87aa7880d58b23e1ca8d3b",
  measurementId: "G-XKC83E4ERE"
};

  // Initialize Firebase
 const firebaseApp= firebase.initializeApp(firebaseConfig);



 const provider = new firebase.auth.FacebookAuthProvider();
export{
  firebaseApp,provider
}