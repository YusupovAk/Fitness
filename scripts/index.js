// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqVyBBki8CfaXKmboVnRBA5yOl2N3LN0M",
  authDomain: "uzbektracker.firebaseapp.com",
  databaseURL: "https://uzbektracker-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "uzbektracker",
  storageBucket: "uzbektracker.firebasestorage.app",
  messagingSenderId: "979406532557",
  appId: "1:979406532557:web:51932afe54a7b4d2cf9e84",
  measurementId: "G-RFCV6SB8QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



let son = document.querySelector('body');
let nav_bar = document.querySelector('#login');
let logo = document.querySelector('.logo');
nav_bar.addEventListener('click', function() {
    let log = prompt('Enter your username');
    if(log){
        alert('Welcome ' + log);
    }
});
logo.addEventListener('click', function() {
    alert('Welcome to the homepage');
});