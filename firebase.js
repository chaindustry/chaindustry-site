// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOtI1z5Dw0gqE97OATMG6KwaVXRt9lWvs",
  authDomain: "chaindustry-16999.firebaseapp.com",
  projectId: "chaindustry-16999",
  storageBucket: "chaindustry-16999.firebasestorage.app",
  messagingSenderId: "1049177796391",
  appId: "1:1049177796391:web:0651313e556fb86be64302",
  measurementId: "G-EEN44L4H8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
