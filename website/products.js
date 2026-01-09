let basket = JSON.parse(localStorage.getItem("basket")) || [];

function addToBasket(name, btn) {
  const product = btn.closest(".product");
  const price = parseFloat(product.querySelector(".price").value);
  const colorSelect = product.querySelector(".color");
  const color = colorSelect ? colorSelect.value : "N/A";

  basket.push({ name, price, color });
  localStorage.setItem("basket", JSON.stringify(basket));
  alert("Added to basket");
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
