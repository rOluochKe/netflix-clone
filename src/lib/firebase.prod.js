import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'netflix-app-d382d.firebaseapp.com',
  projectId: 'netflix-app-d382d',
  storageBucket: 'netflix-app-d382d.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
