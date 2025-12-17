const products = [
  {
    name: "Flurry Coaster",
    image: "flurry coaster.jpg",
    category: "coasters",
    prices: [
      { label: "Set of 2", price: 7.20 },
      { label: "Set of 4", price: 13.60 },
      { label: "Set of 6", price: 19.20 },
      { label: "Set of 8", price: 21.60 }
    ],
    colors: ["Red", "Blue", "White", "Grey"]
  },
  {
    name: "Flower Petal Coaster",
    image: "flower petal coaster.jpg",
    category: "coasters",
    prices: [
      { label: "Set of 2", price: 8.00 },
      { label: "Set of 4", price: 15.00 },
      { label: "Set of 6", price: 22.00 }
    ],
    colors: ["Pink", "Yellow", "White"]
  },
  {
    name: "Cactus Coaster",
    image: "cactus coaster.jpg",
    category: "special",
    prices: [
      { label: "2 without pot", price: 8 },
      { label: "2 with pot", price: 23 },
      { label: "4 without pot", price: 16 },
      { label: "4 with pot", price: 31 },
      { label: "6 without pot", price: 24 },
      { label: "6 with pot", price: 39 },
      { label: "8 without pot", price: 32 },
      { label: "8 with pot", price: 47 }
    ],
    colors: []
  },
  {
    name: "Helm Coaster",
    image: "helm coaster.jpg",
    category: "coasters",
    prices: [
      { label: "Set of 2", price: 9.00 },
      { label: "Set of 4", price: 17.00 }
    ],
    colors: ["Navy", "White"]
  }
];

const container = document.getElementById("products");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";

  let priceOptions = p.prices.map(pr =>
    `<option value="${pr.price}">${pr.label} – £${pr.price}</option>`
  ).join("");

  let colorDropdown = p.colors.length
    ? `<select class="color">${p.colors.map(c => `<option>${c}</option>`).join("")}</select>`
    : "";

  div.innerHTML = `
    <img src="${p.image}">
    <h3>${p.name}</h3>

    <select class="price">${priceOptions}</select>
    ${colorDropdown}

    <button>Add to basket</button>
  `;

  div.querySelector("button").onclick = () => {
    const price = parseFloat(div.querySelector(".price").value);
    const option = div.querySelector(".price").selectedOptions[0].text;
    const colorEl = div.querySelector(".color");

    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    basket.push({
      name: p.name,
      image: p.image,
      price,
      option,
      color: colorEl ? colorEl.value : ""
    });

    localStorage.setItem("basket", JSON.stringify(basket));
    alert("Added to basket");
  };

  container.appendChild(div);
});
