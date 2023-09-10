// Import the functions you need from the SDKs you need
import * as appFirebaseOrigiginal from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import * as authFirebaseOriginal from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import * as firestoreFirebaseOriginal from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
import * as analyticsFirebaseOriginal from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Initialize Firebase
const appModule = appFirebaseOrigiginal;
const authModule = authFirebaseOriginal;
const firestoreModule = firestoreFirebaseOriginal;
const analyticsModule = analyticsFirebaseOriginal;

const app = appModule.initializeApp(firebaseConfig);
const auth = authModule.getAuth(app);
const firestore = firestoreModule.getFirestore(app);
const analytics = analyticsModule.getAnalytics(app);

export {
  app,
  auth,
  firestore,
  analytics,
  appModule,
  authModule,
  firestoreModule,
  analyticsModule,
};
