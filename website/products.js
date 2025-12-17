let basket = JSON.parse(localStorage.getItem("basket")) || [];

function addToBasket(button, name) {
  const product = button.closest(".product");
  const price = parseFloat(product.querySelector(".price").value);
  const color = product.querySelector(".color").value;

  basket.push({ name, price, color });
  localStorage.setItem("basket", JSON.stringify(basket));

  alert(`${name} (${color}) added to basket`);
}

if (document.getElementById("basketItems")) {
  const container = document.getElementById("basketItems");
  const totalEl = document.getElementById("total");

  let total = 0;
  container.innerHTML = "";

  basket.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} – ${item.color} – £${item.price.toFixed(2)}`;
    container.appendChild(div);
    total += item.price;
  });

  totalEl.textContent = "Total: £" + total.toFixed(2);
}
