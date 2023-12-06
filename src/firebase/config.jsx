import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCZvr6DYZ6ES4c0eukcqOwLat2ICKmEv-4",
    authDomain: "cooking-project-fe9dc.firebaseapp.com",
    projectId: "cooking-project-fe9dc",
    storageBucket: "cooking-project-fe9dc.appspot.com",
    messagingSenderId: "114558482742",
    appId: "1:114558482742:web:20a2a95976206308be1b97"
  };

  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore()

  export { projectFirestore }