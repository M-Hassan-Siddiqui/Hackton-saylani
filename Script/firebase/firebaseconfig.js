
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyChmGxjkosAvXVa2824-aSKADisU-RKGhQ",
  authDomain: "saylani-assignment-no-1.firebaseapp.com",
  databaseURL: "https://saylani-assignment-no-1-default-rtdb.firebaseio.com",
  projectId: "saylani-assignment-no-1",
  storageBucket: "saylani-assignment-no-1.appspot.com",
  messagingSenderId: "623071492269",
  appId: "1:623071492269:web:08dbed9875cf93ffd0ee24",
  measurementId: "G-FNN4PKEQN1"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

//import { auth, db , storage} from "./firebaseconfig.js";
//import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
//import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

const db = getDatabase();

onAuthStateChanged(auth, (user) => {
  if (user) {
   console.log('user found', user);
   } else {
      console.log('user not found', user)
      if ((window.location.href.indexOf("login") > -1) == false) {
        window.location.replace('login.html')
      }
     // 
  }
});

