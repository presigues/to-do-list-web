import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getDatabase, ref, child, get, set, update, remove } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCIrzu4NcaGj86E0NzpYL-M0Hs86DCWJqY",
    authDomain: "to-do-list-web-a60e3.firebaseapp.com",
    projectId: "to-do-list-web-a60e3",
    storageBucket: "to-do-list-web-a60e3.appspot.com",
    messagingSenderId: "618176734239",
    appId: "1:618176734239:web:741673d8c736f4da9e212a",
    measurementId: "G-96SRZ18V1D",
    databaseURL: "https://to-do-list-web-a60e3-default-rtdb.firebaseio.com/",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

const db = getFirestore(app);

function addData(){
    set(ref(db, 'UserInfo/' + user)), {
        name: {firstname: , lastname: },
        age: ,


    }
}



 
