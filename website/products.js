let basket = JSON.parse(localStorage.getItem("basket")) || [];

function addToBasket(name, el) {
  const product = el.parentElement;
  const price = product.querySelector(".price")?.value || "";
  const colour = product.querySelector(".colour")?.value || "";

  if (!price) {
    alert("Please select a price");
    return;
  }

  basket.push({ name, price, colour });
  localStorage.setItem("basket", JSON.stringify(basket));
  updateBasketCount();
}

function updateBasketCount() {
  const count = document.getElementById("basketCount");
  if (count) count.textContent = basket.length;
}

function loadBasket() {
  const list = document.getElementById("basketItems");
  if (!list) return;

  list.innerHTML = "";
  basket.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} – ${item.colour || "No colour"} – ${item.price}`;
    list.appendChild(li);
  });
}

updateBasketCount();
loadBasket();
