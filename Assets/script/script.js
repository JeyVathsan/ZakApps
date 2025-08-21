let cartCount = 0;

// Select the "Add to Cart" button
const addToCartBtn = document.querySelector(".addToCartBuyNow");

// Select the cart counter span
const cartCountSpan = document.getElementById("cart-count");

// Add click event
addToCartBtn.addEventListener("click", () => {
  cartCount++;
  cartCountSpan.textContent = cartCount;
});



// trial

document.getElementById("filterBtn").addEventListener("click", function () {
  let checked = Array.from(document.querySelectorAll(".filters input[type=checkbox]:checked"))
                     .map(cb => cb.value);

  let products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    let category = product.getAttribute("data-category");

    if (checked.length === 0 || checked.includes(category)) {
      product.style.display = "flex"; // show
    } else {
      product.style.display = "none"; // hide
    }
  });
});

