// cart.js

// Load cart from localStorage or start empty
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

// Update cart display
function updateCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');

  if (!cartContainer || !totalDisplay) return; // Prevent errors if elements not on page

  cartContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <strong>${item.name}</strong> - R${item.price}
      <button onclick="removeFromCart(${index})" style="margin-left: 10px;">Remove</button>
    `;
    cartContainer.appendChild(div);
    total += item.price;
  });

  totalDisplay.innerText = `Total: R${total}`;
}

// Initialize cart display when page loads
document.addEventListener('DOMContentLoaded', updateCart);
