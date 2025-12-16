let basket = JSON.parse(localStorage.getItem("basket")) || [];

function updateBasketCount() {
  document.querySelectorAll("#basket-count").forEach(el => {
    el.textContent = basket.length;
  });
}

function addToBasket(name) {
  const product = event.target.closest(".product");
  const price = product.querySelector(".price")?.value;

  if (!price) {
    alert("Please select a price");
    return;
  }

  basket.push({ name, price });
  localStorage.setItem("basket", JSON.stringify(basket));
  updateBasketCount();
}

function loadBasket() {
  const list = document.getElementById("basket-items");
  if (!list) return;

  list.innerHTML = "";
  basket.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} – £${item.price}`;
    list.appendChild(li);
  });
}

updateBasketCount();
loadBasket();
