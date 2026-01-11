const products = [
  {
    id: 1,
    name: "Flower Petal Coaster",
    image: "flower petal coaster.jpg",
    category: "coasters",
    options: [
      { label: "Pink", price: 7.20 },
      { label: "Cream", price: 7.20 }
    ]
  },
  {
    id: 2,
    name: "Flurry Coaster",
    image: "flurry coaster.jpg",
    category: "coasters",
    options: [
      { label: "White", price: 7.20 },
      { label: "Blue", price: 7.20 }
    ]
  },
  {
    id: 3,
    name: "Helm Coaster",
    image: "helm coaster.jpg",
    category: "coasters",
    options: [
      { label: "Natural", price: 7.20 },
      { label: "Grey", price: 7.20 }
    ]
  },
  {
    id: 4,
    name: "Cactus Coaster",
    image: "cactus coaster.jpg",
    category: "coasters",
    options: [
      { label: "Green", price: 8.00 },
      { label: "Dark Green", price: 8.00 }
    ]
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

      const optionsHtml = p.options
        .map(
          (o, i) =>
            `<option value="${i}">${o.label} - £${o.price.toFixed(2)}</option>`
        )
        .join("");

      div.innerHTML = `
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <select class="option-select">${optionsHtml}</select>
        <button>Add to basket</button>
      `;

      div.querySelector("button").onclick = () => {
        const select = div.querySelector(".option-select");
        const opt = p.options[select.value];
        addToBasket({
          name: `${p.name} (${opt.label})`,
          price: opt.price
        });
      };

      container.appendChild(div);
    });
}

filter.addEventListener("change", e => {
  renderProducts(e.target.value);
});

renderProducts();
