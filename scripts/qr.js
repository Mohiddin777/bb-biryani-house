document.addEventListener("DOMContentLoaded", () => {
  const qr = document.getElementById("qrCode");
  const randomId = Math.floor(Math.random() * 900000) + 100000;
  const upiUri = `upi://pay?pa=9949946903@ybl&pn=The%20BB%20Biryani%20House&tn=Order-${randomId}&cu=INR`;
  const upiEncoded = encodeURIComponent(upiUri);
  qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${upiEncoded}`;
  const wa = document.getElementById('whatsappOrderGlobal');
  if(wa){
    const text = encodeURIComponent(`Hello! I want to place an order. OrderRef: ${randomId}. Please confirm.`);
    wa.href = `https://wa.me/919949946903?text=${text}`;
  }
});
