let cartCount = 0;
let cartTotal = 0;

function addToCart(productName, price) {
    cartCount++;
    cartTotal += price;
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('cart-total').innerText = cartTotal;
    alert(productName + " added to cart!");
}
