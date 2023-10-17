   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
   import { getDatabase ,set ,ref} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
   import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: "AIzaSyDrY8Tqr9rhBU12lkvJ-vmqsTGcTzJHkk4",
     authDomain: "authentication-app-8a013.firebaseapp.com",
     databaseURL: "https://authentication-app-8a013-default-rtdb.firebaseio.com",
     projectId: "authentication-app-8a013",
     storageBucket: "authentication-app-8a013.appspot.com",
     messagingSenderId: "1046366947288",
     appId: "1:1046366947288:web:bb121d2e73e942bbcb94ad"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const database = getDatabase(app);
   const auth = getAuth();  
   const createUser= document.querySelector(".signupButton");
   
   createUser.addEventListener("click",  (e) => {
   
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("signupPassword").value;
     
   createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;

      set(ref(database, 'user/'+ user.uid),{
        username: username,
        email: email
      })
      alert("Signed Up......") 
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage)
      // ..
    });
   })