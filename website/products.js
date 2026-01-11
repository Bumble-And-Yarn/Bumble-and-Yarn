const products = [
  {
    name: "Flower Petal Coaster",
    image: "flower petal coaster.jpg",
    category: "coasters",
    prices: [
      { label: "Set of 2", price: 7.20 },
      { label: "Set of 4", price: 14.40 },
      { label: "Set of 6", price: 21.60 },
      { label: "Set of 8", price: 28.80 },
      { label: "Set of 12", price: 36.00 }
    ],
    colors: [
      "Red","Blue","White","Black","Green",
      "Orange","Yellow","Purple","Pink",
      "Brown","Grey"
    ]
  },
  {
    name: "Flurry Coaster",
    image: "flurry coaster.jpg",
    category: "coasters",
    prices: [
      { label: "Set of 2", price: 7.20 },
      { label: "Set of 4", price: 14.40 },
      { label: "Set of 6", price: 21.60 },
      { label: "Set of 8", price: 28.80 },
      { label: "Set of 12", price: 36.00 }
    ],
    colors: [
      "Red","Blue","White","Black","Green",
      "Orange","Yellow","Purple","Pink",
      "Brown","Grey"
    ]
  },
  {
    name: "Helm Coaster",
    image: "helm coaster.jpg",
    category: "coasters",
    prices: [
      { label: "Set of 2", price: 7.20 },
      { label: "Set of 4", price: 14.40 },
      { label: "Set of 6", price: 21.60 },
      { label: "Set of 8", price: 28.80 },
      { label: "Set of 12", price: 36.00 }
    ],
    colors: [
      "Red","Blue","White","Black","Green",
      "Orange","Yellow","Purple","Pink",
      "Brown","Grey"
    ]
  },
  {
    name: "Cactus Coaster",
    image: "cactus coaster.jpg",
    category: "coasters",
    prices: [
      { label: "Set of 2 (No pot)", price: 8.00 },
      { label: "Set of 2 (With pot)", price: 23.00 },
      { label: "Set of 4 (No pot)", price: 16.00 },
      { label: "Set of 4 (With pot)", price: 31.00 },
      { label: "Set of 6 (No pot)", price: 24.00 },
      { label: "Set of 6 (With pot)", price: 39.00 },
      { label: "Set of 8 (No pot)", price: 32.00 },
      { label: "Set of 8 (With pot)", price: 47.00 }
    ],
    colors: [] // cactus has NO color options
  }
];

const container = document.getElementById("products");
const filter = document.getElementById("categoryFilter");

function addToBasket(item) {
  const basket = JSON.parse(localStorage.getItem("basket")) || [];
  basket.push(item);
  localStorage.setItem("basket", JSON.stringify(basket));
  alert("Added to basket");
}

function renderProducts(category = "all") {
  container.innerHTML = "";

  products
    .filter(p => category === "all" || p.category === category)
    .forEach(p => {
      const div = document.createElement("div");
      div.className = "product";

      const priceOptions = p.prices
        .map((o, i) => `<option value="${i}">${o.label} - £${o.price.toFixed(2)}</option>`)
        .join("");

      const colorOptions = p.colors.length
        ? p.colors.map(c => `<option value="${c}">${c}</option>`).join("")
        : `<option value="Standard">Standard</option>`;

      div.innerHTML = `
        <img src="${p.image}">
        <h3>${p.name}</h3>

        <select class="price-select">
          ${priceOptions}
        </select>

        <select class="color-select">
          ${colorOptions}
        </select>

        <button>Add to basket</button>
      `;

      div.querySelector("button").onclick = () => {
        const priceIndex = div.querySelector(".price-select").value;
        const color = div.querySelector(".color-select").value;
        const priceObj = p.prices[priceIndex];

        addToBasket({
          name: `${p.name} (${priceObj.label}${p.colors.length ? `, ${color}` : ""})`,
          price: priceObj.price
        });
      };

      container.appendChild(div);
    });
}

filter.addEventListener("change", e => {
  renderProducts(e.target.value);
});

renderProducts();
