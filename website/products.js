let basket = JSON.parse(localStorage.getItem("basket")) || [];

function addToBasket(button) {
  const product = button.closest(".product");
  const name = product.querySelector("h3").innerText;
  const price = parseFloat(product.querySelector(".price").value);
  const colorSelect = product.querySelector(".color");
  const color = colorSelect ? colorSelect.value : "N/A";

  basket.push({ name, price, color });
  localStorage.setItem("basket", JSON.stringify(basket));

  alert("Added to basket");
}

function filterCategory() {
  const selected = document.getElementById("categoryFilter").value;
  document.querySelectorAll(".product").forEach(product => {
    product.style.display =
      selected === "all" || product.dataset.category === selected
        ? "block"
        : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("basket-items");
  const totalEl = document.getElementById("total");
  if (!list) return;

  let total = 0;
  basket.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} | ${item.color} | £${item.price.toFixed(2)}`;
    list.appendChild(div);
    total += item.price;
  });

  totalEl.textContent = basket.length
    ? `Total: £${total.toFixed(2)}`
    : "Nothing to buy";
});
