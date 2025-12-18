let basket = JSON.parse(localStorage.getItem("basket")) || [];

const products = [
  {
    name: "Flurry Coaster",
    image: "flurry coaster.jpg",
    prices: [
      "£7.20 – Set of 2",
      "£14.40 – Set of 4",
      "£21.60 – Set of 6",
      "£28.80 – Set of 8",
      "£36.00 – Set of 12"
    ],
    colors: ["Red","Blue","White","Black","Green","Orange","Purple","Pink","Yellow","Brown","Grey"]
  },
  {
    name: "Flower Petal Coaster",
    image: "flower petal coaster.jpg",
    prices: [
      "£7.20 – Set of 2",
      "£14.40 – Set of 4",
      "£21.60 – Set of 6",
      "£28.80 – Set of 8",
      "£36.00 – Set of 12"
    ],
    colors: ["Red","Blue","White","Black","Green","Orange","Purple","Pink","Yellow","Brown","Grey"]
  },
  {
    name: "Helm Coaster",
    image: "helm coaster.jpg",
    prices: [
      "£7.20 – Set of 2",
      "£14.40 – Set of 4",
      "£21.60 – Set of 6",
      "£28.80 – Set of 8",
      "£36.00 – Set of 12"
    ],
    colors: ["Red","Blue","White","Black","Green","Orange","Purple","Pink","Yellow","Brown","Grey"]
  },
  {
    name: "Cactus",
    image: "cactus coaster.jpg",
    prices: [
      "£8 – Set of 2 (no pot)",
      "£23 – Set of 2 (with pot)",
      "£16 – Set of 4 (no pot)",
      "£31 – Set of 4 (with pot)",
      "£24 – Set of 6 (no pot)",
      "£39 – Set of 6 (with pot)",
      "£32 – Set of 8 (no pot)",
      "£47 – Set of 8 (with pot)"
    ],
    colors: []
  }
];

const container = document.getElementById("products");

if (container) {
  products.forEach((p, i) => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>

        <select id="price-${i}">
          ${p.prices.map(pr => `<option>${pr}</option>`).join("")}
        </select>

        ${p.colors.length ? `
        <select id="color-${i}">
          ${p.colors.map(c => `<option>${c}</option>`).join("")}
        </select>` : ""}

        <button class="add-btn" onclick="addToBasket(${i})">Add to Basket</button>
      </div>
    `;
  });
}

function extractPrice(text) {
  const match = text.match(/£([\d.]+)/);
  return match ? parseFloat(match[1]) : 0;
}

function addToBasket(index) {
  const priceText = document.getElementById(`price-${index}`).value;
  const colorEl = document.getElementById(`color-${index}`);
  const color = colorEl ? colorEl.value : "N/A";

  basket.push({
    name: products[index].name,
    priceText,
    priceValue: extractPrice(priceText),
    color,
    image: products[index].image
  });

  localStorage.setItem("basket", JSON.stringify(basket));
  alert("Added to basket!");
}

const basketContainer = document.getElementById("basket-items");
const totalEl = document.getElementById("total");

if (basketContainer) {
  if (basket.length === 0) {
    basketContainer.innerHTML = "<p>Nothing to buy</p>";
  } else {
    let total = 0;

    basket.forEach((item, index) => {
      total += item.priceValue;

      basketContainer.innerHTML += `
        <div class="basket-item">
          <img src="${item.image}">
          <div>
            <strong>${item.name}</strong><br>
            ${item.priceText}<br>
            Colour: ${item.color}
          </div>
          <span class="bin" onclick="removeFromBasket(${index})">🗑</span>
        </div>
      `;
    });

    totalEl.innerText = `Total: £${total.toFixed(2)}`;
  }
}

function removeFromBasket(index) {
  basket.splice(index, 1);
  localStorage.setItem("basket", JSON.stringify(basket));
  location.reload();
}
