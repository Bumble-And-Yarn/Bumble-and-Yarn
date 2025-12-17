const products = [
  {
    name: "Flurry Coaster",
    image: "flurry coaster.jpg",
    prices: [
      { label: "Set of 2", price: 7.20 },
      { label: "Set of 4", price: 14.40 },
      { label: "Set of 6", price: 21.60 },
      { label: "Set of 8", price: 28.80 },
      { label: "Set of 10", price: 36.00 },
      { label: "Set of 12", price: 43.20 }
    ],
    colors: [
      "Red", "Blue", "White", "Black", "Green",
      "Orange", "Purple", "Pink", "Yellow", "Brown", "Grey"
    ]
  },

  {
    name: "Flower Petal Coaster",
    image: "flower petal coaster.jpg",
    prices: [
      { label: "Set of 2", price: 7.20 },
      { label: "Set of 4", price: 14.40 },
      { label: "Set of 6", price: 21.60 },
      { label: "Set of 8", price: 28.80 },
      { label: "Set of 10", price: 36.00 },
      { label: "Set of 12", price: 43.20 }
    ],
    colors: [
      "Red", "Blue", "White", "Black", "Green",
      "Orange", "Purple", "Pink", "Yellow", "Brown", "Grey"
    ]
  },

  {
    name: "The Helm Coaster",
    image: "helm coaster.jpg",
    prices: [
      { label: "Set of 2", price: 7.20 },
      { label: "Set of 4", price: 14.40 },
      { label: "Set of 6", price: 21.60 },
      { label: "Set of 8", price: 28.80 },
      { label: "Set of 10", price: 36.00 },
      { label: "Set of 12", price: 43.20 }
    ],
    colors: [
      "Red", "Blue", "White", "Black", "Green",
      "Orange", "Purple", "Pink", "Yellow", "Brown", "Grey"
    ]
  },

  {
    name: "The Cactus",
    image: "cactus coaster.jpg",
    prices: [
      { label: "Set of 2 (without pot)", price: 8 },
      { label: "Set of 2 (with pot)", price: 23 },
      { label: "Set of 4 (without pot)", price: 16 },
      { label: "Set of 4 (with pot)", price: 31 },
      { label: "Set of 6 (without pot)", price: 24 },
      { label: "Set of 6 (with pot)", price: 39 },
      { label: "Set of 8 (without pot)", price: 32 },
      { label: "Set of 8 (with pot)", price: 47 }
    ],
    colors: [] // ❗ NO colour dropdown for cactus
  }
];

const container = document.getElementById("products");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";

  const priceOptions = product.prices.map(p =>
    `<option value="${p.price}">${p.label} – £${p.price.toFixed(2)}</option>`
  ).join("");

  const colorDropdown = product.colors.length
    ? `<select class="color">
        ${product.colors.map(c => `<option>${c}</option>`).join("")}
      </select>`
    : "";

  div.innerHTML = `
    <img src="${product.image}">
    <h3>${product.name}</h3>

    <select class="price">
      ${priceOptions}
    </select>

    ${colorDropdown}

    <button>Add to basket</button>
  `;

  div.querySelector("button").onclick = () => {
    const priceSelect = div.querySelector(".price");
    const colorSelect = div.querySelector(".color");

    const item = {
      name: product.name,
      image: product.image,
      option: priceSelect.options[priceSelect.selectedIndex].text,
      price: parseFloat(priceSelect.value),
      color: colorSelect ? colorSelect.value : ""
    };

    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    basket.push(item);
    localStorage.setItem("basket", JSON.stringify(basket));

    alert("Added to basket!");
  };

  container.appendChild(div);
});
