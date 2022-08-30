// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_AAP_API_KEY,
//   authDomain: process.env.REACT_AAP_AUTH_DOMAIN,
//   projectId: process.env.REACT_AAP_PROJECT_ID,
//   storageBucket: process.env.REACT_AAP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_AAP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_AAP_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDAQj_EJZbrDw9sQBhTTmyfWLMBWN-fI5w",
  authDomain: "fun-chat-939b5.firebaseapp.com",
  projectId: "fun-chat-939b5",
  storageBucket: "fun-chat-939b5.appspot.com",
  messagingSenderId: "533871271761",
  appId: "1:533871271761:web:080a396e930b2c61c77d70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
