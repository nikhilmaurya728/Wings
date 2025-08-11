

/* js/main.js */
fetch("vdata/products.json")
  .then((res) => res.json())
  .then((products) => {
    const list = document.getElementById("product-list");
    products.forEach((p) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${p.name}</h3>
        <img src="${p.image}" width="150" />
        <p>₹${p.price}</p>
        <a href="vproduct.html?id=${p.id}">👁 View</a>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      `;
      list.appendChild(div);
    });
  });

function addToCart(id) {
  fetch("vdata/products.json")
    .then((res) => res.json())
    .then((products) => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const product = products.find((p) => p.id === id);
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
    });
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const el = document.getElementById("cartCount");
  if (el) el.innerText = cart.length;
}
updateCartCount();