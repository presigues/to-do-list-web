// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import { getDatabase, ref, set } from "firebase/database";


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

const first = document.getElementById('firstname').value;
const last = document.getElementById('lastname').value;
const age = document.getElementById('age').value;

const finish = document.getElementById('finish');
function accinfo(user){
    finish.addEventListener("click", function (event) {
event.preventDefault();
addData(first, last, age, user);
   
})
}




function addData(first, last, age, user){
    const db = getDatabse(app);
    set(ref(db, 'UserInfo/' + user), {
        name: {firstname: first, lastname: last},
        age: age,
    }) 
    .then(()=>{
        alert("data added");
    })
    .catch((error) =>{
        alert("unsuccessful");
        console.log(error);
    })

}



 
