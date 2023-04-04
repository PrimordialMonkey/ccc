// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAV4MQZ6-o7GvxrepeaEEvjya12YYKmxZY",
//   authDomain: "webapptest-e6a00.firebaseapp.com",
//   projectId: "webapptest-e6a00",
//   storageBucket: "webapptest-e6a00.appspot.com",
//   messagingSenderId: "748409243315",
//   appId: "1:748409243315:web:13a302d0d43f451b1912c6",
//   measurementId: "G-KV7SEBGJJP"                                            AIzaSyAfg40Yp2_w4LMFhFHA-5uqDrnOzNcJuVQ
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAV4MQZ6-o7GvxrepeaEEvjya12YYKmxZY",
  authDomain: "webapptest-e6a00.firebaseapp.com",
  projectId: "webapptest-e6a00",
  storageBucket: "webapptest-e6a00.appspot.com",
  messagingSenderId: "748409243315",
  appId: "1:748409243315:web:13a302d0d43f451b1912c6",
  measurementId: "G-KV7SEBGJJP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
