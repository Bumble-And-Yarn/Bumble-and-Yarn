// =======================
// BASKET STORAGE
// =======================
let basket = JSON.parse(localStorage.getItem("basket")) || [];

// =======================
// ADD TO BASKET
// =======================
function addToBasket(button) {
  const product = button.closest(".product");

  const name = product.querySelector("h3").innerText;
  const price = parseFloat(product.querySelector(".price").value);
  const colorSelect = product.querySelector(".color");
  const color = colorSelect ? colorSelect.value : "N/A";
  const image = product.querySelector("img").getAttribute("src");

  basket.push({
    name,
    price,
    color,
    image
  });

  localStorage.setItem("basket", JSON.stringify(basket));
  alert("Added to basket");
}

// =======================
// REMOVE FROM BASKET
// =======================
function removeFromBasket(index) {
  basket.splice(index, 1);
  localStorage.setItem("basket", JSON.stringify(basket));
  renderBasket();
}

// =======================
// RENDER BASKET
// =======================
function renderBasket() {
  const basketItems = document.getElementById("basket-items");
  const totalEl = document.getElementById("total");

  if (!basketItems || !totalEl) return;

  basketItems.innerHTML = "";
  let total = 0;

  if (basket.length === 0) {
    totalEl.textContent = "Nothing to buy";
    return;
  }

  basket.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "basket-item";

    div.innerHTML = `
      <img src="${item.image}" class="basket-img">
      <div class="basket-info">
        <strong>${item.name}</strong><br>
        Color: ${item.color}<br>
        £${item.price.toFixed(2)}
      </div>
      <button class="bin" onclick="removeFromBasket(${index})">🗑️</button>
    `;

    basketItems.appendChild(div);
  });

  totalEl.textContent = `Total: £${total.toFixed(2)}`;
}

// =======================
// CATEGORY FILTER
// =======================
function filterCategory() {
  const selected = document.getElementById("categoryFilter").value;

  document.querySelectorAll(".product").forEach(product => {
    if (selected === "all" || product.dataset.category === selected) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// =======================
// LOAD ON PAGE
// =======================
document.addEventListener("DOMContentLoaded", renderBasket);
