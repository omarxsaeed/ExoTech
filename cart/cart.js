var cart = JSON.parse(this.localStorage.getItem("cart")) || [];
var shoppingCartContainer = document.getElementsByClassName("shopping-cart-container")[0];
// console.log(shoppingCartContainer);
// console.log(cart);
var totalPrice = 0;

function showCartItems() {
    if (cart.length !== 0) {
        shoppingCartContainer.classList.add("full");
        shoppingCartContainer.classList.remove("empty");
        shoppingCartContainer.innerHTML = `
            <h2>My Cart</h2>
        `;

        for (var i = 0; i < cart.length; i++) {
            var item = document.createElement("div");

            item.innerHTML = `
            <div class="cart-item">
                <div class="itemDetails">
                    <img src="${cart[i].thumbnail}" alt="" />
                    <div class="itemText">
                        <h6>Apple</h6>
                        <h2>Iphone 10X</h2>
                    </div>
                </div>
                <p>${cart[i].price}</p>
                <div class="quantityContainer">
                    <span class="material-symbols-outlined decrement"> remove </span>
                    <p>1</p>
                    <span class="material-symbols-outlined increment"> add </span>
                </div>
            
                <p class="total">${cart[i].price}</p>
            
                <span class="material-symbols-outlined"> delete </span>
            </div>
                    `;

            // var itemContainer = document.createElement("div");
            // var itemDetails = document.createElement("div");

            // var brand = document.createElement("h6");
            // var title = document.createElement("h2");
            // var price = document.createElement("p");
            // var img = document.createElement("img");
            // var quantityContainer = document.createElement("p");
            // var itemTotal = document.createElement("p");

            // brand.innerText = cart[i].brand;
            // title.innerText = cart[i].title;
            // price.innerText = "$" + cart[i].price;
            // img.src = cart[i].thumbnail;

            // itemContainer.appendChild(img);
            // itemDetails.appendChild(brand);
            // itemDetails.appendChild(title);
            // itemContainer.appendChild(itemDetails);

            // item.appendChild(itemContainer);
            // item.appendChild(price);

            // itemDetails.setAttribute("class", "item-details");
            // itemContainer.setAttribute("class", "item-container");
            // item.setAttribute("class", "cart-item");

            shoppingCartContainer.appendChild(item);

            totalPrice += cart[i].price;
        }

        var totalPriceText = document.createElement("h3");
        totalPriceText.innerText = "Total of: $" + totalPrice;
        document.body.appendChild(totalPriceText);
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
