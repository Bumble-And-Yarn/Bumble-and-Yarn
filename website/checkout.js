const itemsDiv = document.getElementById('checkout-items');
const totalDiv = document.getElementById('total');

const basket = JSON.parse(localStorage.getItem('basket')) || [];
let total = 0;

if (basket.length === 0) {
  itemsDiv.textContent = 'Nothing to buy';
} else {
  basket.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} | Color: ${item.color} | £${item.price.toFixed(2)}`;
    itemsDiv.appendChild(div);
    total += item.price;
  });

  totalDiv.textContent = `Total: £${total.toFixed(2)}`;
}
