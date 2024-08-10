// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


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
    databaseURL: "https://to-do-list-web-a60e3-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabse();



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
            
            // ...
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });

})

function switchy(){
document.getElementById("emailtext").style.display = "none";
document.getElementById("email").style.display = "none";
document.getElementById("passtext").style.display = "none";
document.getElementById("pass").style.display = "none";
document.getElementById("submit").style.display = "none";
document.getElementById("loginoki").style.display = "none";
}

const finish = document.getElementById('submit');
function accinfo(user){
    finish.addEventListener("click", function (event) {
event.preventDefault();
;
    })

}

const first = document.getElementById('firstname').value;
const last = document.getElementById('lastname').value;
const age = document.getElementById('age').value;

function addData(first, last, age, user){
    set(ref(db, 'UserInfo/' + user)), {
        name: {firstname: first, lastname: last},
        age: age,


    }
}

