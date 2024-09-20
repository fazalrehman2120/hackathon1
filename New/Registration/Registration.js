// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
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

const studentName = document.getElementById("studentName");
const LastName = document.getElementById("LastName")
const  email= document.getElementById("email");
const password = document.getElementById("password");
const cnic = document.getElementById("cnic");
// const age = document.getElementById("age");

window.saveStudent = () => {
  let obj = {
    name: studentName.value,
    LastName: LastName.value,
    email: email.value,
    password: password.value,
    cnic: cnic.value,
    // age: age.value,
  };

  console.log(obj);

  const reference = collection(db, "students");
  addDoc(reference, obj)
    .then(() => {
      alert("Saved Successfully")
      // console.log("alert");
    })
    .catch((err) => {
      console.log(err);
    });
};
