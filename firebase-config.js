// =====================================================
// FIREBASE CONFIGURATION - CoreTalk
// =====================================================

const firebaseConfig = {
  apiKey: "AIzaSyB2MK4Xb0PdsT4FwL5TbVm23Rf8_OloGo4",
  authDomain: "coretalk-1e3af.firebaseapp.com",
  projectId: "coretalk-1e3af",
  storageBucket: "coretalk-1e3af.firebasestorage.app",
  messagingSenderId: "723021051930",
  appId: "1:723021051930:web:193c0cd2c6c6b9f93ab9a3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
