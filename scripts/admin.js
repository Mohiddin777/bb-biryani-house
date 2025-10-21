import { db } from "./firebase-client.js";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const ordersTableBody = document.getElementById("ordersTableBody");

function renderOrders(snapshot) {
  ordersTableBody.innerHTML = "";

  snapshot.forEach((docSnap) => {
    const order = docSnap.data();
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${order.ref || docSnap.id}</td>
      <td>${order.item || "-"}</td>
      <td>₹${order.price || "-"}</td>
      <td>${order.phone || "N/A"}</td>
      <td>
        <select data-id="${docSnap.id}">
          <option value="Informed" ${order.status === "Informed" ? "selected" : ""}>Informed</option>
          <option value="Being Prepared" ${order.status === "Being Prepared" ? "selected" : ""}>Being Prepared</option>
          <option value="Completed" ${order.status === "Completed" ? "selected" : ""}>Completed</option>
        </select>
      </td>
    `;

    // Handle status update instantly
    tr.querySelector("select").addEventListener("change", async (e) => {
      const newStatus = e.target.value;
      const docRef = doc(db, "orders", e.target.dataset.id);
      await updateDoc(docRef, { status: newStatus });
    });

    ordersTableBody.appendChild(tr);
  });
}

// Listen for real-time updates
onSnapshot(collection(db, "orders"), (snapshot) => {
  renderOrders(snapshot);
});
