// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//<script src="https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"></script>
//<script src="https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"></script>
//<script src="https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"></script>

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIrzu4NcaGj86E0NzpYL-M0Hs86DCWJqY",
  authDomain: "to-do-list-web-a60e3.firebaseapp.com",
  databaseURL: "https://to-do-list-web-a60e3-default-rtdb.firebaseio.com",
  projectId: "to-do-list-web-a60e3",
  storageBucket: "to-do-list-web-a60e3.appspot.com",
  messagingSenderId: "618176734239",
  appId: "1:618176734239:web:741673d8c736f4da9e212a",
  measurementId: "G-96SRZ18V1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = firebase.firestore();


const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;



    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Creating Account....");
            window.location.href = "info.html";
            
            // ...
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });

})

const submit2 = document.getElementById('submit2');
submit2.addEventListener("click", function (e) {
    e.preventDefault();

    const email2 = document.getElementById('emaillog').value;
    const password2 = document.getElementById('passlog').value;

    signInWithEmailAndPassword(auth, email2, password2)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;     
            console.log(userCredential)
            window.location.href = "main.html";
            console.log("you are logged in as" + email);
             
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });

})
        

