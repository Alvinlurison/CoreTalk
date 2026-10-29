// =====================================================
// FIREBASE CONFIGURATION - CoreTalk
// =====================================================

const firebaseConfig = {
  apiKey: "AIzaSyBmsSCbPmXCk4nPZAXKfZVZrjEn9x_cwGA",
  authDomain: "adecomm-hub.firebaseapp.com",
  projectId: "adecomm-hub",
  storageBucket: "adecomm-hub.firebasestorage.app",
  messagingSenderId: "771891537050",
  appId: "1:771891537050:web:fed4f72bb2c1d85485ab23"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Stay signed in until user signs out
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(function() {});

// Keep chats/data available offline (cached on device)
db.enablePersistence({ synchronizeTabs: true }).catch(function(err) {
  // Ignore if multiple tabs or unsupported
});
