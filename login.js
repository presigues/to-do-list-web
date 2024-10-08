
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


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
    measurementId: "G-96SRZ18V1D",
    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);




const submit = document.getElementById('submit2');
submit.addEventListener("click", function (e) {
    e.preventDefault();

    const email = document.getElementById('emaillog').value;
    const password = document.getElementById('passlog').value;

    signInWithEmailAndPassword(auth, email, password)
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
/*
const logout = document.getElementById('logout');
logout.addEventListener("click", function (e){
    e.preventDefault();
    auth().signOut().then(() =>{
        console.log(email + "user has logged out");
    })
});

document.getElementById("email").innerHTML = email;
console.log("you are logged in as" + email);
*/




