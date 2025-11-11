// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4mZLOYuP9UiyjQVHCmjib1F5uiLzBdQg",
    authDomain: "gamehub-ts.firebaseapp.com",
    projectId: "gamehub-ts",
    storageBucket: "gamehub-ts.firebasestorage.app",
    messagingSenderId: "1078088484363",
    appId: "1:1078088484363:web:8b07fe9be14448d4f9690e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;