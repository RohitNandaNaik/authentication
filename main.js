//setting up firebase with our website

const firebaseApp = firebase.initializeApp({ 
apiKey: "AIzaSyBh9U94ACu7fpW3LZWjiqfuQk8G8LfGaOo",
authDomain: "auth-form-7843f.firebaseapp.com",
projectId: "auth-form-7843f",
storageBucket: "auth-form-7843f.appspot.com",
messagingSenderId: "991400775431",
appId: "1:991400775431:web:42459a109c6aee872a3fa2",
measurementId: "G-V3QHMG83JQ" });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

//signup function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password)

    //firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in 
      document.write("You are Signed UP")
      // ...
    })
    .catch((error) => {
     console.log(error.code);
     console.log(error.mesage)
      // ..
    });

}
// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    document.write("You are Signed In")
    // ...
  })
  .catch((error) => {
    alert("Wrong Credentials!");
    console.log(error.code);
     console.log(error.mesage)
  });

    }