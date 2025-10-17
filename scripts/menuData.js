import { createOrder } from './firebase-client.js';
const menu = [
  { id:1, name: "Chicken Dum Biryani (MINI)", desc: "Authentic Andhra flavor.", price: "₹120", img: "C:\Users\Rabba\Downloads\the_bb_biryani_pwa_v3\images\biryani4" },
  { id:2, name: "Chicken Dum Biryani (FULL)", desc: "Tender chicken with royal spices.", price: "₹200", img: "images/biryani2.png" },
  { id:3, name: "Family Pack Chicken Biryani", desc: "Perfect for 3-4 people.", price: "₹600", img: "images/biryani3.png" },
  { id:4, name: "Combo - Dum Biryani + Chicken Fry + Thumps up", desc: "Great value combo.", price: "₹170", img: "images/biryani4.png" },
];
function renderMenu(){
  const container = document.getElementById('menuList');
  menu.forEach(item => {
    const el = document.createElement('div');
    el.className = 'menu-item';
    el.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="info">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <a class="btn orderBtn" href="#">Order via WhatsApp</a>
      </div>
      <div class="price">${item.price}</div>
    `;
    container.appendChild(el);
    el.querySelector('.orderBtn').addEventListener('click', async (ev) => {
      ev.preventDefault();
      const randomId = Math.floor(Math.random()*900000)+100000;
      const orderData = {
        orderRef: 'BB-' + randomId,
        itemId: item.id,
        itemName: item.name,
        price: item.price,
        phone: '+919949946903'
      };
      try {
        const res = await createOrder(orderData);
        if(res && res.success){
          alert('Order recorded. Ref: ' + orderData.orderRef);
        } else {
          alert('Order not saved to server, proceed to WhatsApp to confirm.');
        }
      } catch (e){
        console.warn('Create order failed', e);
      }
      const waText = encodeURIComponent('Hi, I want to order: ' + item.name + ' - ' + item.price + '. OrderRef: ' + orderData.orderRef);
      window.open('https://wa.me/919949946903?text=' + waText, '_blank');
    });
  });
}
document.addEventListener('DOMContentLoaded', renderMenu);
