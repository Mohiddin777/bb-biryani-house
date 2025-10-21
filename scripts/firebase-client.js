import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDyJyW7Bo76CoiSh-Lg4mS9UBH5PX_ENY",
  authDomain: "the-bb-biryani-house.firebaseapp.com",
  projectId: "the-bb-biryani-house",
  storageBucket: "the-bb-biryani-house.firebasestorage.app",
  messagingSenderId: "188179103097",
  appId: "1:188179103097:web:272b4df1ad8bddf6a2c3a8"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
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
