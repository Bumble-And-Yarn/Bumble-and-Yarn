<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Products</title>
  <link rel="stylesheet" href="style.css">
  <script defer src="products.js"></script>
</head>
<body>

<header>
  <a href="index.html">Home</a>
  <a href="products.html">Products</a>
  <a href="checkout.html">Checkout</a>
</header>

<h1>Products</h1>

<div class="products">

  <!-- CACTUS -->
  <div class="product">
    <img src="cactus coaster.jpg" alt="Cactus">
    <h2>Cactus</h2>

    <label>Price:</label>
    <select class="price">
      <option value="8">£8 – 2 (no pot)</option>
      <option value="23">£23 – 2 (with pot)</option>
      <option value="16">£16 – 4 (no pot)</option>
      <option value="31">£31 – 4 (with pot)</option>
      <option value="24">£24 – 6 (no pot)</option>
      <option value="39">£39 – 6 (with pot)</option>
      <option value="32">£32 – 8 (no pot)</option>
      <option value="47">£47 – 8 (with pot)</option>
    </select>

    <button onclick="addToBasket('Cactus', null, this)">Add to basket</button>
  </div>

  <!-- TEMPLATE FOR OTHER PRODUCTS -->
  <div class="product">
    <img src="flurry coaster.jpg" alt="Flurry">
    <h2>Flurry</h2>

    <label>Color:</label>
    <select class="color">
      <option>red</option><option>blue</option><option>white</option>
      <option>black</option><option>green</option><option>orange</option>
      <option>yellow</option><option>purple</option><option>pink</option>
      <option>brown</option><option>grey</option>
    </select>

    <label>Price:</label>
    <select class="price">
      <option value="7.2">£7.20 – 2</option>
      <option value="14.4">£14.40 – 4</option>
      <option value="21.6">£21.60 – 6</option>
      <option value="28.8">£28.80 – 8</option>
      <option value="36">£36.00 – 12</option>
    </select>

    <button onclick="addToBasket('Flurry', this)">Add to basket</button>
  </div>

</div>

</body>
</html>
