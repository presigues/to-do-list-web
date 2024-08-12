



const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    console.log(email);

 /*   createUserWithEmailAndPassword(auth, email, password)
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
*/
})
/*
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
        */

