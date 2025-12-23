function addToBasket(name, element) {
  const product = element.closest('.product');
  const price = parseFloat(product.querySelector('.price').value);
  const colorSelect = product.querySelector('.color');
  const color = colorSelect ? colorSelect.value : 'N/A';

  const basket = JSON.parse(localStorage.getItem('basket')) || [];

  basket.push({ name, color, price });

  localStorage.setItem('basket', JSON.stringify(basket));
  alert('Added to basket');
}
