import firebase from "firebase/app";
import "firebase/auth";



const config = {

    apiKey: "AIzaSyCXcMI8VvzZVzjFzjict25vHNLbpStS8Bc",
    authDomain: "sardordevs-academy.firebaseapp.com",
    projectId: "sardordevs-academy",
    storageBucket: "sardordevs-academy.appspot.com",
    messagingSenderId: "738944347100",
    appId: "1:738944347100:web:1d92bff0c5c80861f9bd19",
    measurementId: "G-HNM1ZMF5SK"

}
if(!firebase.apps.length){
    firebase.initializeApp(config)
}
export default firebase