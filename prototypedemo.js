function Product(name, price) {
    this.name = name;
    this.price = price;
}

const p = new Product("Iphone", 120000);

Product.prototype.display = function () {
    console.log("Details of product are", this);
}

p.display();


// If you want to access Product.protoype from p,
console.log(p._proto_);