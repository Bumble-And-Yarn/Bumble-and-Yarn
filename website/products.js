let basket = JSON.parse(localStorage.getItem("basket")) || [];

function addToBasket(name, price) {
  basket.push({ name, price });
  localStorage.setItem("basket", JSON.stringify(basket));
  alert(name + " added to basket");
}

if (document.getElementById("basketItems")) {
  const container = document.getElementById("basketItems");
  let total = 0;

  basket.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} – £${item.price}`;
    container.appendChild(div);
    total += item.price;
  });

  const totalDiv = document.createElement("h3");
  totalDiv.textContent = "Total: £" + total.toFixed(2);
  container.appendChild(totalDiv);
}
