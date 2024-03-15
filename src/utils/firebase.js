// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//for sign in authentication 
import { getAuth, createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD79jVyGwzQOTz2s44iE6OA0UCc-DmvuI4",
  authDomain: "netflixgpt-dd4aa.firebaseapp.com",
  projectId: "netflixgpt-dd4aa",
  storageBucket: "netflixgpt-dd4aa.appspot.com",
  messagingSenderId: "82962629714",
  appId: "1:82962629714:web:4d97f964cc2385a80b0b8b",
  measurementId: "G-7TTEBYD2NF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("analytics"+analytics)


const auth = getAuth();

const isUserSinnedIn =()=>{
  const user = auth.currentUser;
  if (user) {
    return true;
  }else{
    return false;
  }
}

const  createUser =(displayName,email,password)=>{

      
    
   

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up is done
    const user = userCredential.user;
    //update username
    const userName=displayName
    console.log("userName :"+userName)
    updateProfile(user,{displayName:userName})
    console.log(user)
    console.log("User created and display name updated successfully!")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error in creating new user")
    console.log(errorCode)
    console.log(errorMessage)
    // ..
  });
}

const signInUser = (email,password)=>{
  const userPromise =new Promise((resolve, reject) => {
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      resolve(user)
      //console.log(user.displayName)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error in sign in new user")
      console.log(errorCode)
      console.log(errorMessage)
      reject(errorMessage)
    });
  })
  return userPromise
}

const signOutUser=()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("user sinned out")
    return true;
  }).catch((error) => {
    // An error happened.
  });
}

  export  {isUserSinnedIn,createUser,signInUser,auth,signOutUser};