import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC51-wQ5cTynjRcUHQDPH_aEhfQpi5FlOs",
    authDomain: "cooking-recipe-site-d9b31.firebaseapp.com",
    projectId: "cooking-recipe-site-d9b31",
    storageBucket: "cooking-recipe-site-d9b31.appspot.com",
    messagingSenderId: "488687727000",
    appId: "1:488687727000:web:f8f746d3d04ae4b170fbed"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);

  //init services
  const projectFirestore = firebase.firestore()  //firestore is used to interact with the firestore database we made

  export { projectFirestore };