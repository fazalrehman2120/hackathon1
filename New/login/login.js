// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_23ZcKcc-90m72C-9wbzRfV3nDQzlUvE",
  authDomain: "registration-2c1d5.firebaseapp.com",
  databaseURL: "https://registration-2c1d5-default-rtdb.firebaseio.com",
  projectId: "registration-2c1d5",
  storageBucket: "registration-2c1d5.appspot.com",
  messagingSenderId: "319870019886",
  appId: "1:319870019886:web:acd108de32c1c78b7bb2bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

const email = document.getElementById("email");
const password = document.getElementById("password");

window.login = () => {
  let obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);


  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(async (res) => {
        window.localStorage.href ='/Main.html'
      let id = res.user.uid;
      const reference = doc(db, "Users", id);
       

      const user = await getDoc(reference);
      if (user.exists()) {
        console.log(user.data());
       
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
