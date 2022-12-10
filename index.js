var backgroundSliderImages = ["image/bg-1.jpg", "image/bg-2.jpg", "image/bg-3.jpg", "image/bg-4.jpg"];
var sliderSection = document.getElementById("slider-bg");

var backgroundIndex = 0;

// sliderSection.style.backgroundImage = `url('')`;

// next.addEventListener("click", (e) => {
//     backgroundIndex++;
//     sliderSection.style.backgroundImage = `url('${backgroundSliderImages[backgroundIndex]}')`;
//     if (backgroundIndex > backgroundSliderImages.length - 1) {
//         backgroundIndex = 0;
//     }
//     console.log(backgroundIndex);
//     // console.log(ba);
// });

// prev.addEventListener("click", (e) => {
//     backgroundIndex--;
//     sliderSection.style.backgroundImage = `url('${backgroundSliderImages[backgroundIndex]}')`;
//     if (backgroundIndex < 0) {
//         backgroundIndex = backgroundSliderImages.length - 1;
//     }
// });

var slidePic;

slidePic = setInterval(() => {
    backgroundIndex++;
    sliderSection.style.backgroundImage = `url('${backgroundSliderImages[backgroundIndex]}')`;
    if (backgroundIndex >= backgroundSliderImages.length - 1) {
        backgroundIndex = -1;
    }
}, 4000);

// stopSlider.addEventListener("click", (e) => {
//     clearInterval(slidePic);
// });
//  HOME PAGE ITEMS

var productsHttpRequest = new XMLHttpRequest();
productsHttpRequest.open("GET", "https://dummyjson.com/products");
productsHttpRequest.send();
productsHttpRequest.onreadystatechange = function () {
    if (productsHttpRequest.readyState === XMLHttpRequest.DONE && productsHttpRequest.status === 200) {
        var products = JSON.parse(productsHttpRequest.responseText).products;
        // console.log(products);
        var productsContainer = document.querySelector(".row");
        if (productsContainer) {
            for (var i = 0; i < products.length; i++) {
                // var product = JSON.stringify(products[i]);
                // console.log(products[i]);
                makeProduct(products[i], productsContainer);
            }
        }
    } else {
        console.log("There was a problem with the request.");
    }
};

function makeProduct(product, container) {
    var item = document.createElement("div");
    item.innerHTML = `
        <div class="card mr-4 mb-4 h-100" style="width: 15rem; margin-bottom: 1.5rem;">
        <img
            src="${product.thumbnail}"
            class="card-img-top"
            alt="${product.title}"
        />
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">
            ${product.description}
            </p>
            <a href="#" class="btn btn-primary addToCart">Add to Cart</a>
        </div>
    </div>
    `;
    container.appendChild(item);
}

var addToCartBtn = document.querySelectorAll(".addToCart").forEach(function (button) {
    button.addEventListener("click", function () {
        var cart = JSON.parse(localStorage.getItem("cart")) || [];
        product = {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            images: [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            ],
        };
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item added to cart!");
    });
});
// console.log(addToCartBtn);

// addToCartBtn.array.forEach((element) => {
//     console.log("hi");
// });
