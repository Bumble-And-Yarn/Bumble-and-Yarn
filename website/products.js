function addToBasket(name, image, button, noColour = false) {
  const product = button.parentElement;
  const priceSelect = product.querySelector(".price");
  const colourSelect = product.querySelector(".colour");

  if (!priceSelect.value) {
    alert("Select a price");
    return;
  }

  if (!noColour && !colourSelect.value) {
    alert("Select a colour");
    return;
  }

  const basket = JSON.parse(localStorage.getItem("basket")) || [];

  basket.push({
    name,
    image,
    price: parseFloat(priceSelect.value),
    colour: noColour ? "N/A" : colourSelect.value
  });

  localStorage.setItem("basket", JSON.stringify(basket));
  alert("Added to basket");
}

if (document.getElementById("basket-items")) {
  const basket = JSON.parse(localStorage.getItem("basket")) || [];
  let total = 0;
  const container = document.getElementById("basket-items");

  basket.forEach(item => {
    total += item.price;
    container.innerHTML += `
      <div class="basket-item">
        <img src="${item.image}">
        <div>
          <strong>${item.name}</strong><br>
          Colour: ${item.colour}<br>
          £${item.price.toFixed(2)}
        </div>
      </div>
    `;
  });

  document.getElementById("total").innerText =
    "Total: £" + total.toFixed(2);
}
