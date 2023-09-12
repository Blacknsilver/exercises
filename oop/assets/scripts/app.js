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
      const prodEl = document.createElement("li");
      prodEl.className = "product-item"; // another css class
      prodEl.innerHTML = `
        <div>
            <img src="${prod.imageUrl}" alt="${prod.title}"        
            <div class="product-item__content">
                <h2>${prod.title}</h2>
                <h3>\$${prod.price}</h3>
                <p>${prod.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
