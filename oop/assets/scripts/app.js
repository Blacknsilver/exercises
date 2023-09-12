class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];
  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order now.</button>
    `;
    cartEl.className = "cart";
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  addToCart() {
    console.log("Adding product to cart");
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item"; // another css class
    prodEl.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}"        
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
      `;
    const addCartButton = prodEl.querySelector("button"); // Even though the page will have multiple buttons, this code will execute for and treat each button individually.
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://m.media-amazon.com/images/I/51HGSKCft0L._AC_UL320_.jpg",
      "A soft pillow",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Wollteppich_1.jpg/220px-Wollteppich_1.jpg",
      "A carpet",
      89.99
    ),
  ];

  constructor() {}
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list"; // this is a css class
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
