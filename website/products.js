const products = [
  {
    id: 1,
    name: "Flower Petal Coaster",
    image: "flower petal coaster.jpg",
    category: "coasters",
    price: 7.20
  },
  {
    id: 2,
    name: "Flurry Coaster",
    image: "flurry coaster.jpg",
    category: "coasters",
    price: 7.20
  },
  {
    id: 3,
    name: "Helm Coaster",
    image: "helm coaster.jpg",
    category: "coasters",
    price: 7.20
  },
  {
    id: 4,
    name: "Cactus",
    image: "cactus coaster.jpg",
    category: "cactus",
    price: 8.00
  }
];

const container = document.getElementById("products");
const filter = document.getElementById("categoryFilter");

function addToBasket(product) {
  const basket = JSON.parse(localStorage.getItem("basket")) || [];
  basket.push(product);
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
      div.innerHTML = `
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>£${p.price.toFixed(2)}</p>
        <button>Add to basket</button>
      `;
      div.querySelector("button").onclick = () => addToBasket(p);
      container.appendChild(div);
    });
}

filter.addEventListener("change", e => {
  renderProducts(e.target.value);
});

renderProducts();
