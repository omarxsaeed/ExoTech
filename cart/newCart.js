var cart = JSON.parse(this.localStorage.getItem("cart")) || [];
var shoppingCartContainer = document.getElementsByClassName("shopping-cart-container")[0];

function showCartItems() {
    if (cart.length !== 0) {
        shoppingCartContainer.classList.add("full");
        shoppingCartContainer.classList.remove("empty");

        shoppingCartContainer.innerHTML = `
            <h2>My Cart</h2>
        `;
        shoppingCartContainer.innerHTML = for (var i = 0; i < cart.length; i++) {
            return `
                <h1>hi</h1>
            `

        }
    } else {
        shoppingCartContainer.classList.add("empty");
        shoppingCartContainer.classList.remove("full");

        shoppingCartContainer.innerHTML = `
            <div class="empty-cart-div">
                <span class="material-symbols-outlined">shopping_bag</span>
                <h3>Your bag is empty</h3>
                <p>Looks like you haven't made your choice yet.</p>
            </div>
        `;
    }
}

showCartItems();
