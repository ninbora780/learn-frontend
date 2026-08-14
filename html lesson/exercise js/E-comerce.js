const products = [
    { id: 1, name: "Minimalist Watch",    price: 120, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 2, name: "Classic Sneakers",    price: 85,  img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
    { id: 3, name: "Bluetooth Speaker",   price: 45,  img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 4, name: "Leather Backpack",    price: 150, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500" },
    { id: 5, name: "Wireless Headphones", price: 200, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 6, name: "Smart Sunglasses",    price: 180, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500" }
];

function loadProduct() {
    const grid = document.querySelector("#product");
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="card-info">
                <h3>${product.name}</h3>
                <p class="price">ID : ${product.id}</p>
                <p class="price">Price : ${product.price}$</p>
                <button class="btn" onclick="addToCard()">Add to Card</button>
            </div>
        `;
        grid.appendChild(card);
    });
}
let cardCount = 0;
function addToCard() {
    cardCount++;
    document.querySelector("#cardCount").textContent = cardCount;
}
const shop = document.querySelector(".icon i");
const contenShop = document.querySelector(".content-shop");
shop.addEventListener("click" , function(){
    contenShop.innerHTML = "content-shop";
});
loadProduct();
