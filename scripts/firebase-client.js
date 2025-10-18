firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("Admin is logged in:", user.email);
    // You can initialize your dashboard here
  } else {
    window.location.href = "login.html"; // Redirect if not logged in
  }
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

db.collection("orders").onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if (change.type === "added") {
      const orderData = change.doc.data();
      renderOrder(orderData); // Replace with your actual function
    }
  });
});

const firebaseConfig = {
  apiKey: "AIzaSyBDyJyW7Bo76CoiSh-Lg4mS9UBH5PX_ENY",
  authDomain: "the-bb-biryani-house.firebaseapp.com",
  projectId: "the-bb-biryani-house",
  storageBucket: "the-bb-biryani-house.firebasestorage.app",
  messagingSenderId: "188179103097",
  appId: "1:188179103097:web:272b4df1ad8bddf6a2c3a8"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export async function createOrder(orderObj){
  try {
    const docRef = await addDoc(collection(db, 'orders'), {
      ...orderObj,
      status: 'pending',
      createdAt: serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch(e) {
    console.error('Firebase createOrder error', e);
    return { success: false, error: e.message || e };
  }
}
export { db };
