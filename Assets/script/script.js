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
