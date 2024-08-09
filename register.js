 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCIrzu4NcaGj86E0NzpYL-M0Hs86DCWJqY",
   authDomain: "to-do-list-web-a60e3.firebaseapp.com",
   projectId: "to-do-list-web-a60e3",
   storageBucket: "to-do-list-web-a60e3.appspot.com",
   messagingSenderId: "618176734239",
   appId: "1:618176734239:web:741673d8c736f4da9e212a",
   measurementId: "G-96SRZ18V1D"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);